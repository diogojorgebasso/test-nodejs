const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid Request" });
    }
    if (!(await user.checkPassword(password))) {
      return res.json(401).json({ message: "Incorrect Password" });
    }

    return res.status(200).json({ user });
  }
}

module.exports = new SessionController();
