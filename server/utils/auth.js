const jwt = require('jsonwebtoken');

const secret = "gottacatchemall"
const expiration = '2hr'

module.exports = {
    signToken:{
        signToken: function({ email, username, _id }) {
            return jwt.sign({ data: { email, username, _id } }, secret, { maxAge: expiration } )
        }
    }
},
authMiddleware: function({ req, res}) {
    let token = req.body.token || req.query.token || req.headers.authorization
    if(req.headers.authorization){
        token = token.split(' ').pop().trim()
    }
}
if(!token) {
    return req
}

try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration })
    req.user =data
    return req
} catch(err){
    console.log('Invalid token:', err)
}

headers: {
    authorization: `Bearer jowonjoi0u0u0u0u0u098jpgno`
}