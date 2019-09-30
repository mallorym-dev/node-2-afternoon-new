const express = require('express');
const mc = require('./controllers/messages_controller');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = '/api/messages';
app.use(express.json());
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);


app.listen(3001, () => console.log('Server running on Port 3001'));