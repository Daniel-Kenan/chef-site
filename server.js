const express = require('express');
const app = express();
const db = require(__dirname + '/database-bridge')
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const passport_config = require(__dirname + '/passport-config');
const methodoverride = require('method-override');
const PORT = process.env.PORT || 3000;
const users = [];

app.set('view engine', 'ejs');

passport_config(passport, email =>  users.find( user => user.email == email ),
id =>  users.find( user => user.id == id ))

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(session({
    secret: 'curate',
    saveUninitialized: false,
    resave: false,

}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(methodoverride('_method'))


app.get('/home', (req, res) => {
    res.render('index')
});

app.get('/', (req, res) => {
    res.render('index')
});


app.get('/login', checkNotauthenticated, (req, res) => {
    res.render('log-in')
});

app.get('/signup', checkNotauthenticated,(req, res) => {
    res.render('sign-up')
});

app.get('/profile', checkauthenticated, (req, res) => {

    res.render('profile' , {name : req.user.name , email : req.user.email })
});

app.get('/cal', (req, res) => {
    res.render('calender')
});
app.get('/maps', (req, res) => {
    res.render('maps');
})
// log in information 
app.post('/login', passport.authenticate('local',{
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true
}))

app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
     res.redirect('/signup')
    }
    console.log(users)
})

void function DATABASE() {
        db.connect(err => {
            if (err) throw err;
            console.log('Connected to a Database Server!');
        });  
};

function checkauthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/signup')
}

function checkNotauthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}
app.delete('/logout', (req,res)=>{
    req.logOut()
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});