const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/RESOURCE', require('./routes/RESOURCE'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
app.use('/api/v1/reviewers', require('./routes/reviewers'));

module.exports = app;