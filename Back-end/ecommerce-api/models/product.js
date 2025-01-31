const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    oldPrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    expiryDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    deliveryAmount: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
});

module.exports = Product;
