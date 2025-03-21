require('dotenv').config();

const express = require('express');
const { env } = require('process');
const app = express();

const routes = require('./routers/index.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.use('/', routes);

const PORT = process.env.PORT ?? 3003
app.listen(PORT, () => {
    require('./database/db.js');
    console.log(`Server Is Start On PORT ${PORT}.`);
})