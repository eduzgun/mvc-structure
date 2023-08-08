
const Quote = require("../models/Quote");

app.get('/', (req, res) => {
    res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
})

const index = (req, res) => {
    try {
    const quotes = Quote.showAll();
    res.send(quotes);
    } catch (err) {
        res.status(500).send({err: "Server error!!! waaa"})
    }
}

const random = (req, res) => {
    try {
        const quote = Quote.showRandom();
        res.send(quote);

    } catch (err){
        res.status(500).send({err: "Server error!!! waaa"})
    }
}

const show = (req, res) => {
    const idx = parseInt(req.params.id);
    
    try{
        const quote = Quote.show();
        res.send(quote);
    } catch (err) {
        res.status(404).send({err: "Quote not found"})
    }
}


module.exports = {index, random, show}