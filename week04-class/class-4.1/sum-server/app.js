const express = require('express');
const cors = require('cors')

const PORT = 3000;
const app = express();

//Enable CORS fo all the routes
app.use(cors())

app.get('/sum', (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    return res.send(sum.toString());
})

app.listen(PORT, () => console.log("Sum-server is listening at port: ", PORT));