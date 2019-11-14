const db = require('../db')

jest.mock('../models/user', () => () => {
	const SequelizeMock = require('sequelize-mock')
	const dbMock = new SequelizeMock()
	return dbMock.define('user', {
		id: 2,
		email: 'john@abc.com',
		name: 'John'
	})
})

describe('Test Sequelize Mocking', () => {
	it('Should get value from mock model', async () => {
		const user = await db.User.findOne()
		expect(user.id).toEqual(2)
		expect(user.name).toEqual('John')
	})
})
