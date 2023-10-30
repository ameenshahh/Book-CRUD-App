const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

exports.authenticate = async (req, res, next) => {
  const token = req.header("authorization");
  try {
    if (!token.startsWith("Bearer ")) {
      return res
        .status(403)
        .json({ message: "Authorisation header should start with Bearer" });
    }

    const tokenValue = token.slice(7);

    jwt.verify(tokenValue, process.env.SECRET_KEY, async (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token verification failed." });
      }

      // Inside the callback, user contains the payload
      req.user = user;

      // You can now access the user object here
      const payload = user;

      if (payload) {
        const user = await UserModel.findOne({ email: payload.email });

        req.user = user;
        next();
      } else {
        return res
          .status(400)
          .json({ status: false, message: "You are not authorized" });
      }
    });
  } catch (err) {
    return res
      .status(400)
      .json({ status: false, message: "Something went wrong" });
  }
};
