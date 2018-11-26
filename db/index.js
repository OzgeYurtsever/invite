const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'invitation_list',
});

connection.connect(err => {
  if (err) {
    console.log('failed to connect to mysql', err);
    return;
  }

  console.log('connected to mysql!');
});

module.exports = connection;
