const express = require('express');
const App = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

// public sttatic path
const staticpath = path.join(__dirname, '../public');
const templates_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');
App.use(express.static(staticpath));

App.set('view engine', 'hbs');
App.set('views', templates_path);
hbs.registerPartials(partials_path);

App.get('', (req, res) => {
  res.render('index');
});

App.get('/about', (req, res) => {
  res.render('about');
});

App.get('/weather', (req, res) => {
  res.render('weather');
});

App.get('*', (req, res) => {
  res.render('error', {
    errormsg: 'Opps! Page not  found ',
  });
});

App.listen(port, () => {
  console.log(`Listining......${port}`);
});
