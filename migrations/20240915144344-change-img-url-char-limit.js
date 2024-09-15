'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // change img url char limit to 1000

    await queryInterface.sequelize.query('ALTER TABLE "Incidentes" ALTER COLUMN "img" TYPE character varying(1000);');
  },

  async down (queryInterface, Sequelize) {
    // change img url char limit to 255

    await queryInterface.sequelize.query('ALTER TABLE "Incidentes" ALTER COLUMN "img" TYPE character varying(255);');
  }
};
