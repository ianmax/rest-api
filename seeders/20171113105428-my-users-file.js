'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
      username : 'admin',
      password : 'admin',
      isadmin : true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
    username : 'user',
    password : 'user',
    isadmin : false,
    createdAt : new Date(),
    updatedAt : new Date()
  },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    queryInterface.bulkDelete('Users', [{
      username :'admin'
    }])
  }
};
