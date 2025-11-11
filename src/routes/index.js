const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello').status(200);
});

router.post('/chat', async (req, res) => {
    const data  = req.body.msg;
    
    const message = data.toLowerCase();
    
    message === 'hi' ? res.json('Hello').status(200) 
                     : res.json(`sorry i can't understand`).status(200);
})

module.exports = router;