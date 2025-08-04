const express = require('express');

const app = express()

const port = 3000

app.use(express.static('imgs/posts'))

const postsRouter = require('./routers/posts');
const posts = require('./posts');

app.get('/', (req, res) => {
  res.json(posts);
});

app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});


