const express = require('express');
const app = express();
const path = require('path');

// configuracion del puertos
app.set('port', process.env.PORT || 3000);
// motor de plantillas como ejs
app.set('view engine', 'ejs');
// configuar que la vista esta en la carpeta views
app.set('views', path.join(__dirname, 'views/ejs'));
// static files - archivos estatico
app.use(express.static(path.join(__dirname, '../public')))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json());

// Routes
app.use(require("./routes/web"));
app.use('/api', require("./routes/api"));

// starting the servers
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
