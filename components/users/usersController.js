const usersService = require('./usersService');

module.exports.profile = (req, res) => {
  res.json(usersService.profile());
}

module.exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (await usersService.checkingEmail(email)) {
      res.json({ error: "This email is already exsisted" });
    }
    else {
      const user = await usersService.register(fullName, email, password)
      res.json({ user, message: "Created account successfully" });
    }

  } catch (e) {
    res.status(400).json({ errorMessage: e.message ?? 'Unknown error' });
  }
};