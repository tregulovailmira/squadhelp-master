module.exports = (sequelize, DataTypes) => {

  const Transaction = sequelize.define('Transactions', {
    type: {
      allowNull: false,
      type: DataTypes.ENUM('payment', 'cashout'),
    },
    sum: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Transaction',
    timestamps: true,
  });

  Transaction.associate = function (models) {
    Transaction.belongsTo(models.Users,
      { foreignKey: 'userId', targetKey: 'id' });
    // Transaction.belongsTo(models.Contests,
    //   { foreignKey: 'contestId', targetKey: 'id' });
  };

  return Transaction;
};
