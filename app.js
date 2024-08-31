const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // To serve static files like JS

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'de_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Serve customer creation
app.get('/createcustomer', (req, res) => {
  res.sendFile(__dirname + '/views/createcustomer.html');
});

// Handle customer creation
app.post('/createcustomer', async (req, res) => {
  const { name, phone_number, balance } = req.body;

  // Insert customer into the database
  const query = `INSERT INTO customers (name, phone_number, balance) VALUES (?, ?, ?)`;
  db.query(query, [name, phone_number, balance], (err, result) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.redirect('/createcustomer?status=success');
  });
});


// Serve the transaction
app.get('/createtransaction', (req, res) => {
  res.sendFile(__dirname + '/views/createtransaction.html');
});

// Handle new transaction
app.post('/createtransaction', async (req, res) => {
  const { sender_id, receiver_id, amount } = req.body;

  // // Insert user into the database
  // const query = `INSERT INTO transactions (sender_id, receiver_id, amount) VALUES (?, ?, ?)`;
  // db.query(query, [sender_id, receiver_id, amount], (err, result) => {
  //   if (err) {
  //     return res.redirect('/createtransaction?status=error');
  //   }
  // });

  // // Update sender balance
  // const senderQuery = `UPDATE customers SET balance = balance - ? WHERE id = ?`;
  // db.query(senderQuery, [amount, sender_id], (err, result) => {
  //   if (err) {
  //     return res.redirect('/createtransaction?status=error');
  //   }
  // });

  // // Update receiver balance
  // const receiverQuery = `UPDATE customers SET balance = balance + ? WHERE id = ?`;
  // db.query(receiverQuery, [amount, receiver_id], (err, result) => {
  //   if (err) {
  //     return res.redirect('/createtransaction?status=error');
  //   }
  // });

  // Create an ACID transaction
  db.beginTransaction((err) => {
    if (err) {
      return res.redirect('/createtransaction?status=error');
    }

    // Create an ACID transaction
    const query = `SELECT balance FROM customers WHERE id = ? FOR UPDATE`;
    db.query(query, [sender_id], (err, result) => {
      if (err) {
        return db.rollback(() => {
          res.redirect('/createtransaction?status=error');
        });
      }

      const senderBalance = result[0].balance;

      if (senderBalance < amount) {
        return db.rollback(() => {
          res.redirect('/createtransaction?status=error');
        });
      }

      const insertQuery = `INSERT INTO transactions (sender_id, receiver_id, amount) VALUES (?, ?, ?)`;
      db.query(insertQuery, [sender_id, receiver_id, amount], (err, result) => {
        if (err) {
          return db.rollback(() => {
            res.redirect('/createtransaction?status=error');
          });
        }
      

        const senderQuery = `UPDATE customers SET balance = balance - ? WHERE id = ?`;
        db.query(senderQuery, [amount, sender_id], (err, result) => {
          if (err) {
            return db.rollback(() => {
              res.redirect('/createtransaction?status=error');
            });
          }

          const receiverQuery = `UPDATE customers SET balance = balance + ? WHERE id = ?`;
          db.query(receiverQuery, [amount, receiver_id], (err, result) => {
            if (err) {
              return db.rollback(() => {
                res.redirect('/createtransaction?status=error');
              });
            }

            db.commit((err) => {
              if (err) {
                return db.rollback(() => {
                  res.redirect('/createtransaction?status=error');
                });
              }
              res.redirect('/createtransaction?status=success');
            });
          });
        });
      });
    });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
