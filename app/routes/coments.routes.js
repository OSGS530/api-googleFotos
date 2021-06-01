const bodyParser = require('body-parser');
const Coment = require('../models/coments.model');

app.use(bodyParser.json())

app.get('/api/coment', (res, res) => {res.send(200, {coments:[]})
});

app.post('/api/coment');