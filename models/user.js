module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(12),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'EMAIL'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'NAME'
		},
	}, {
		tableName: 'USER',
	});
}
