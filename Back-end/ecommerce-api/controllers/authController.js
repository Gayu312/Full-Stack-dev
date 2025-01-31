const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const signup = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json({ message: 'User created successfully', user });
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid password' });

    const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
};

module.exports = { signup, login };
