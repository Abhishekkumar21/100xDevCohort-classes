const express = require('express');
const cors = require('cors');
const PORT = 3001;

const app = express();

app.use(cors());

app.get('/simpleInterest', (req, res) => {
    const p = parseInt(req.query.principal);
    const r = parseInt(req.query.rate);
    const t = parseInt(req.query.years);
    const SimpleInterest = (p*r*t)/100;

    return res.json({
        principal : `${p}`,
        "Rate of Interest" : `${r}`,
        "Time(in years)" : `${t}`,
        "Total Interest" : `${SimpleInterest}`

    })
})


app.listen(PORT, () => console.log("SI-server is listening at port: ", PORT));