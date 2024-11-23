module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        status: { type: DataTypes.STRING, defaultValue: 'Aguardando Pagamento' },
    });

    return Order;
};
