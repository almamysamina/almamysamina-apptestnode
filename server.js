const express = require('express');
const mysql = require('mysql2');
const app = express();

// Créer la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: "mysqlservermkappdev.mysql.database.azure.com",
  user: "lrtehlqjrmlj",
  password: `L;'9T"6'3T1w+kYl`,
  database: "mkparisdev1",
});

// Connecter à la base de données
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connecté à la base de données MySQL');
});

// Route de base
app.get('/', (req, res) => {
  res.send('Accueil de l\'application Node.js');
});

// Exemple de route qui interroge la base de données
app.get('/getdata', (req, res) => {
  let sql = 'SELECT * FROM inventory';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});