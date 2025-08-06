// recupero i dati express
const express = require('express');

const app = express()

const port = 3000
// middleware per i file statici (foto)
app.use(express.static('imgs/posts'))

// middle
const errorHandler = require('./middleware/errorHandler');

const notFound = require('./middleware/notFound');

const postsRouter = require('./routers/posts');
// utilizzo il body parser json per recuperare le informazioni dal body di una richista
app.use(express.json())
// definizione rotta base
app.get('/', (req, res) => {
  res.json(posts);
});

app.use('/posts', postsRouter);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});


