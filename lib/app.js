const express = require('express');
const app = express();

app.use(express.json());

<<<<<<< HEAD

=======
>>>>>>> 3a02eccf6c9f73742977badf6186b54741fa2e06
app.use('/api/v1/reviewers', require('./routes/reviewers'));
app.use('/api/v1/actors', require('./routes/actors'));
app.use('/api/v1/studios', require('./routes/studios'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
<<<<<<< HEAD


=======
>>>>>>> 3a02eccf6c9f73742977badf6186b54741fa2e06

module.exports = app;
