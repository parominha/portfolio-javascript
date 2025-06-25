const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Nome, e-mail e senha são obrigatórios." });
    }

    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.json({ error: "Erro ao cadastrar." })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        res.status(400).json({ message: "Erro ao registrar usuário." });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "E-mail e senha são obrigatórios" })
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.json({ error: "Erro ao logar." })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ error: "Erro ao logar." })
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({ token })
    } catch (error) {
        console.error("Erro ao logar usuário:", error);
        res.status(400).json({ message: "Erro ao logar usuário." });
    }
};

module.exports = { registerUser, loginUser };