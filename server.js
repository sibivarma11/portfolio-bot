const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/', require('./src/routes/index'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
