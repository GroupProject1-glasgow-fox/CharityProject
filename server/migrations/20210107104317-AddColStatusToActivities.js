'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Activities', 'status', Sequelize.STRING)

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Activities', 'status')
    
  }
};
