module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
        stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    });

    return Product;
};
