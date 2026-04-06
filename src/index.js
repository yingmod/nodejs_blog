const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); 

const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

// Đổi tên engine thành 'hbs' cho đồng bộ với extname
app.engine('hbs', engine({ extname: '.hbs' })); 
app.set('view engine', 'hbs'); // Chuyển sang dùng 'hbs'
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});