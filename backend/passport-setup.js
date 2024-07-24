// passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

// User model
const User = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String
});

const UserModel = mongoose.model('User', User);

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
async (token, tokenSecret, profile, done) => {
  let user = await UserModel.findOne({ googleId: profile.id });
  if (!user) {
    user = await UserModel.create({ googleId: profile.id, displayName: profile.displayName, email: profile.emails[0].value });
  }
  return done(null, user);
}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  done(null, user);
});
