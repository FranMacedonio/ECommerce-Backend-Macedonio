import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcryptjs'

import User from '../models/User.model.js'

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const user = await User.findOne({ email: email })
    if(!user) return done(null, false, { message: 'Los datos no coinciden' })
    
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword) return done(null, false, { message: 'Los datos no coinciden' })

    return done(null, user)
}))

passport.serializeUser((user, done) => done(null, user._id))

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
      });
})