const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 7865;

app.get('/', (req, res) => { 
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]*)', (req, res) => { 
  const id = req.params.id; 
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => { 
  const obj = {
    payment_methods: {
      credit_cards: true, 
      paypal: false
    }
  }
  res.send(obj);
});

app.post('/login', (req, res) => { 
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
module.exports = app;
