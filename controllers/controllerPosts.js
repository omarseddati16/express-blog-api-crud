const posts = require('../data/posts');

const index = (req, res) => {
  const tag = req.query.tag;
  let filteredPosts = posts;

  if (tag) {
    filteredPosts = posts.filter(item => item.tag.toLowerCase().includes(tag.toLowerCase()));
  }

  res.json(filteredPosts);
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);
  if (!post)
    return res.status(404).json({ error: "not found", message: "Post non trovato" });
  res.json(post);
};

const store = (req, res) => {
  res.send('Creazione di un nuovo post');
};

const update = (req, res) => {
  res.send(`Aggiornamento del post ${req.params.id}`);
};

const modify = (req, res) => {
  res.send(`Aggiornamento parziale del post ${req.params.id}`);
};


const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);

  if (!post) {
    return res.status(404).json({ error: "not found", message: "Post non trovato" });
  }

  posts.splice(posts.indexOf(post), 1);
  console.log('Lista post aggiornata:', posts);

  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};