import { config } from 'dotenv'
config()

export const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect("/login")
};

export const checkAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.email == process.env.ADMIN) return next()
    res.redirect("/")
}