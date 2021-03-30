const { Op } = require("sequelize")
const User = require("../models/User")

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses', attributes: ['street', 'number', 'zipcode'] },
                { 
                    association: 'techs', 
                    through: {
                        attributes: []
                    },
                    attributes: ['name'],
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    } 
                }
            ]
        })

        res.json(users)
    }
}