const { getUser } = require("../util/auth");
const secret = "Rehan@512"
const jwt = require('jsonwebtoken');

function AuthenticateToken(req, res, next) {
    const authorizationHeadersValue = req.headers["authorization"];
    const tokenFromCookie = req.cookies.uid;

    const token = authorizationHeadersValue && authorizationHeadersValue.startsWith("Bearer")
        ? authorizationHeadersValue.split('Bearer ')[1]
        : tokenFromCookie;

    if (!token) {
        console.error('Invalid or missing token:', authorizationHeadersValue);
        return res.redirect("/login");
    }

    try {
        // Verify the JWT token
        const user = jwt.verify(token, secret); // Use the correct JWT secret
        
        // Attach the decoded user data to req.user
        req.user = user;
        next();
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        return res.redirect("/login");
    }
}

function restrictuserRole(roles = []) {
  return function (req, res, next) {
      if (!req.user) {
          return res.redirect("/login");
      }
      
      // Check if the user's role is included in the allowed roles
      if (!req.user.role || !roles.includes(req.user.role)) {
          return res.status(403).end("Unauthorized");
      }
      
      return next();
  };
}

  

module.exports = { AuthenticateToken, restrictuserRole };
