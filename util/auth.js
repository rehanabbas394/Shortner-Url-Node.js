const jwt = require("jsonwebtoken")
const secret = "Rehan@512"

async function setUser(user){
    const payload = {
        _id: user._id,
        email: user.email,
        name: user.name,         
        role: user.role, 
        gender:user.gender   
       }
   return await jwt.sign(payload,secret)
}


async function getUser(token){
    if(!token) return null
   return jwt.verify(token,secret) 
}

module.exports = { setUser, getUser }