// sequelize migration:generate --name add_column_start_date_and_end_date-task
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // 追加のMigrationで複数カラムを追加する場合
    return Promise.all([
      queryInterface.addColumn("tasks", "start_date", {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null,
      }),
      queryInterface.addColumn("tasks", "end_date", {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null,
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn("tasks", "start_date"),
      queryInterface.removeColumn("tasks", "end_date"),
    ])
  }
};
