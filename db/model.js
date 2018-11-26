const connection = require('./index.js');

const getAll = cb => {
  connection.query(`SELECT * FROM guests`, (error, results) => {
    if (error) {
      cb(error);
    }
    cb(null, results);
  });
};

const addName = (name, cb) => {
  connection.query(`INSERT INTO guests(name) VALUES (?)`, name, cb);
};

const updateConfirmation = (id, status, cb) => {
  connection.query(
    'UPDATE guests SET hasConfirmed = ? where id = ?',
    [status, id],
    cb,
  );
};

module.exports = {
  getAll,
  addName,
  updateConfirmation,
};
