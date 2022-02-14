/*const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

//used for session cookie
const session = require('express-session');

const passport =require('passport');
const passportLocal = ('./config/passport-local-strategy');
const port = 8000;

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assests'))
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
name: 'codieal',
secret: 'blahsomething',
saveUninitialized:false,
resave:false,
cookie:{
    maxAge:(10000*60*100)
}
}));

app.use(passport.initialize());
app.use(passport.session());
//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        //console.log("Error!",error);
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port ${port}`)
})*/




const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//mongostore is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    /*store: new MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled'
    }),*/
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/codieal_develpoment',
        autoRemove:'disabled'

      }),
    function(err){
        console.log('error or connect-mongosb setup ok');
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
