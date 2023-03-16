// Dependencies
const express = require('express');

// Point Server to the route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set PORT
const PORT = process.env.PORT || 3001;

// Create an express server
const app = express();

// Parse incoming JSON data
app.use(express.json());

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});