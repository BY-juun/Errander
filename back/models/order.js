module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      classfication: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      detail: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      deliveryPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      additionalRequest: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pickUpTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pickUpPosLA: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      pickUpPosMA: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  Order.associate = (db) => {
    db.Order.belongsTo(db.User);
  };
  return Order;
};
