const connectToMongo = require('./db');
const cors = require('cors');


connectToMongo();
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors());
//avilable routes
app.use('/api/auth', require('./routes/auth'))

app.get('/', (req, res) => {
  res.send('Grads On Hire')
})

app.listen(port, () => {
  console.log(`Grads On Hire backend listening on http://localhost:${port}`)
})