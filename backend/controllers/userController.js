const { User } = require('../models');

const userProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['name', 'email', 'createdAt'],
        })
        if (!user) {
            return res.json({ error: 'Usuário não encontrado' })
        }
        res.json({ user })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'Erro ao buscar usuário' })
    }
}

module.exports = { userProfile };