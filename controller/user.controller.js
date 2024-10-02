const User = require("../model/user.model")
const jwt = require("jsonwebtoken")
const secret = "Rehan@512"

async function UserSignup(req,res){
    const { name, email, password,gender,role } = req.body
    const user = await User.create({
        name,
        email,
        password,
        role,
        gender
    })
    return res.redirect("/")
    
}

async function UserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.render("login", { error: "Invalid Email or Password" });
    }
    
    // Correctly sign the token with all the user info needed
    const token = jwt.sign(
        { _id: user._id, email: user.email, name: user.name, role: user.role, gender: user.gender },
        secret, 
        { expiresIn: "1h" } // Add expiration for security
    );
    
    res.cookie("uid", token); // Store the token in cookies
    return res.redirect("/");
}



module.exports = { UserSignup , UserLogin }