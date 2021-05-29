const express = require('express');
const app = express();
const db = require(__dirname + '/database-bridge.js')
const bcrypt = require('bcrypt');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
const users = [];

const {
    PORT = 3000,
        NODE_ENV = 'development'
} = process.env;

const IN_PROD = NODE_ENV == "production";

app.get('/home', (req, res) => {
    res.render('index')
});
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/login', (req, res) => {
    res.render('log-in')
});

app.get('/signup', (req, res) => {
    res.render('sign-up')
});

app.get('/profile', (req, res) => {
    res.render('profile')
});

app.get('/cal', (req, res) => {
    res.render('calender')
});

// log in information 
app.post('/login', (req, res) => {

})
app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString() ,
            name  : req.body.name ,
            email : req.body.email,
            password : hashedPassword
        })
        res.render('log-in')
    } catch {

    }
    console.log(users)
})

void
function DATABASE() {
    if (IN_PROD) {
        db.connect(err => {
            if (err) throw err;
            console.log('Connected to a Database Server!');
        });
    }
}();


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});