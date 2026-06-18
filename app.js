const express = require('express');
const { PORT } = require('./src/config');
const app = express();

app.get('/', (req, res) => {
  res.send(`DevOps assessment app is running on port ${PORT}`);
});

app.get('/profile', (req, res)=>{
  res.send(`<h1>Hi student!, this is your default profile page<h1>`)
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
