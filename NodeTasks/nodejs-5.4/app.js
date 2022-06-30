const express = require('express')

const logger = require('./middleware/logger')

const router = require('./routes/router')

const {sequelize, User, Post} = require('./models')

const app= express()
app.use(express.json()) 
app.use(logger)
app.use(router);


    const port =process.env.PORT||5000;
    app.listen(port, async () => {
    console.log(`Server Listening on port ${port}`);
    await sequelize.authenticate()
    console.log('Database Connected!')
    
})
    

