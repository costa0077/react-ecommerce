module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        // Definição dos campos do modelo
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productIds: {
            type: DataTypes.ARRAY(DataTypes.INTEGER), // Um array para IDs de produtos, se necessário
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    // Definir relacionamentos
    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
        // Defina mais relacionamentos, se necessário
    };

    return Order;
};
