const jwt = require('jsonwebtoken')
const { AuthenticationError } = require('apollo-server-express')

const secret = 'shhhhhhhhhh'
const expiration = '2h'

module.exports = { 
  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim()
    }
    if (!token)
      return req;
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration })
      req.user = data
    } catch(err) {
      console.log('Invalid token')
    }
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id }
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
  },
  checkAuth: context => {
    if (process.env.NODE_ENV === 'production' && ! context.user)
      throw new AuthenticationError('You must be logged in to query this schema')
  }
}