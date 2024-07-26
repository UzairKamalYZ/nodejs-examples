const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug');
const app = express();
const sessionRouter = require('./src/router/sessionRouter');
const adminRouter = require('./src/router/adminRouter');

app.use(express.static(path.join(__dirname, '/public')));

app.set('views','./src/views');
app.set('view engine','ejs');
app.use('/admin',adminRouter)

app.get('/',(req,res) => {
    // this will be called when there is no index.html page in public
    res.render('index',{title: 'Welcome to UK Blog'});
    
})

app.use("/session",sessionRouter);


app.listen(3000,()=> {
    debug(`Listening on port ${chalk.greenBright('3000')}`);
});