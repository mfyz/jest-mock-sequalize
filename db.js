const Sequelize = require('sequelize')

const sequelize = new Sequelize(
	process.env.MYSQL_DB,
	process.env.MYSQL_USERNAME,
	process.env.MYSQL_PASSWORD,
	{
		host: process.env.MYSQL_HOST,
		dialect: 'mysql',
	}
)

const User = require('./models/user')(sequelize, Sequelize)

sequelize.sync({
	alter: true,
})

const findUserById = uid => User.findOne({ where: { id: uid } })

module.exports = {
	User,
	findUserById
}
