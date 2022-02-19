const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
require('./server/routes/person.routes')(app);
app.listen(3001, () => {
    console.log("Listening at Port 3001")
});