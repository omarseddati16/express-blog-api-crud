// recupero i posts 
const posts = require('../data/posts');

// index
const index = (req, res) => {
  const tags = req.query.tag;
  // definisco l'arrey
  let filteredPosts = posts;

  if (tags) {
    filteredPosts = posts.filter(item => {
      return item.tags.map(tag => tag.toLowerCase()).includes(tags.toLowerCase())
    })
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
  const newIdPosts = posts[posts.length - 1].id + 1;
  const { name, image, tags } = req.body
  posts.push({
    id: newIdPosts,
    name,
    image,
    tags,
  })
  res.status(201).json(posts);
};

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);
  if (!post)
    return res.status(404).json({ error: "not found", message: "Post non trovato" });

  post.name = req.body.name
  post.image = req.body.image
  post.tags = req.body.tags

  res.json(post);
};

const modify = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id);
  if (!post) {
    return res.status(404).json({ error: "not found", message: "Post non trovato" });
  }

  post.tags = req.body.tags;

  res.json(post);
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