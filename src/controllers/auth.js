const db = require("./Login");
const login = db.details;
const hash = require("object-hash");

const Login = async (req, res, next) => {
  try {
    var password = req.body.password;
    const hashpassword = hash.MD5(password);

    let data = await login.create({
      cd_fullname: req.body.fullname,
      cd_email: req.body.email,
      cd_password: hashpassword,
    });
    res.send({
      message: "Login successful",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "Login failed",
    });
  }
};

export default Login;
