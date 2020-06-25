const express = require('express');
const app = express();

app.use(express.json());

<<<<<<< HEAD
// app.use('/api/v1/reviewers', require('./routes/reviewers'));
app.use('/api/v1/studios', require('./routes/studios'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));



=======
// app.use('/api/v1/studios', require('./routes/studios'));
app.use('/api/v1/reviewers', require('./routes/reviewers'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
>>>>>>> 40edb74bf1e78cb3a74d5d403e574351e7760a56

module.exports = app;
