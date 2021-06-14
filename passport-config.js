const LocalStrategy = require('passport-local').Strategy();
const bcrypt = require('bcrypt');

function Initialise(passport, getUserById, getUserByEmail) {

    const authenticateUser = async (email, password, done) => {

        const user = getUserByEmail(email);

        if (user == null) {
            return done(null, false, {
                message: 'Incorrect Email'
            })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {
                    message: 'password incorrect'
                })
            }
        } catch(e){
            return done(e)
        }


    }

    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))

    passport.serialiseUser((user, done)=>  done(null, user.id)  )
    passport.deserialiseUser( (id, done)=> done(null, getUserById(id)))
}

module.exports = initialise