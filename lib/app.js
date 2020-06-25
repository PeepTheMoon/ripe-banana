const express = require('express');
const app = express();

app.use(express.json());

<<<<<<< HEAD
<<<<<<< HEAD
// app.use('/api/v1/reviewers', require('./routes/reviewers'));
=======
app.use('/api/v1/reviewers', require('./routes/reviewers'));
app.use('/api/v1/actors', require('./routes/actors'));
>>>>>>> 8063eb2bdbc1dc127257fabfffd004f844762516
app.use('/api/v1/studios', require('./routes/studios'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
<<<<<<< HEAD



=======
// app.use('/api/v1/studios', require('./routes/studios'));
app.use('/api/v1/reviewers', require('./routes/reviewers'));
=======
>>>>>>> 8063eb2bdbc1dc127257fabfffd004f844762516

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
>>>>>>> 40edb74bf1e78cb3a74d5d403e574351e7760a56

module.exports = app;
