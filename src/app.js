const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Read user data from JSON file
const userData = fs.readFileSync('src/json/users.json', 'utf8');

// Convert JSON data to JavaScript object
const users = JSON.parse(userData);

// Read account data from JSON file
const accountData = fs.readFileSync('src/json/accounts.json', {
  encoding: 'utf8',
});
app.get('profiles', (req, res) => {
  res.render('profiles', { user: users[0] });
});

app.get('checking', function (req, res) {
  const checkingData = accounts.checking;
  res.render('account', { account: checkingData });
});

app.get('credit', function (req, res) {
  const creditAccountData = accounts.credit;
  res.render('account', { account: creditAccountData });
});
// Parse JSON account data into a JavaScript object
const accounts = JSON.parse(accountData);
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Account Summary',
    accounts: accounts,
  });
});
app.listen(3000, () => {
  console.log('PS Project Running on port 3000!');
});
