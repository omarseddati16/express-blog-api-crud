const index = (req, res) => {
  res.send('Lista dei post');
};

const show = (req, res) => {
  res.send(`Dettaglio del post ${req.params.id}`);
};

const store = (req, res) => {
  res.send('Creazione di un nuovo post');
};

const update = (req, res) => {
  res.send(`Aggiornamento del post ${req.params.id}`);
};

const destroy = (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};