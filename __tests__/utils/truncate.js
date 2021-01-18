const { sequelize } = require("../../src/app/models");

module.exports = () => {
  //aguarda finalizar o pedido até chegar tudo
  return Promise.all(
    Object.keys(sequelize.models).map((key) =>
      sequelize.models[key].destroy({ truncate: true, force: true })
    )
  );
};
