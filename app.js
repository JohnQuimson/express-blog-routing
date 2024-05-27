const path = require('path');
const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');

//middelware generici
app.use(express.static('./public'));

// routers
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, './index.html');
  res.sendFile(filePath);
});

app.use('/posts', postsRouter);

//start server
app.listen(3000, () => {
  console.log('Server attivo sulla porta http://localhost:3000.');
});
