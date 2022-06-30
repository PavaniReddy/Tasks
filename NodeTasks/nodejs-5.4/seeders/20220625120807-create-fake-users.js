'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        password: 'JohnA9',
        email: 'john_doe@gmail.com',
        age:21,
        isDeleted:true,
        uuid: '2e16ac23-acea-471b-a0fd-cb5218c943a7',
        createdAt: "2022-06-25T07:53:42.576Z",
        updatedAt: "2022-06-25T07:53:42.576Z"
      },{
        name: "Joeyy",
        uuid: '86d47abd-702e-4c3b-a147-3ca7a27b8b10',
        password: "abhuiLL8",
        email: "sean11@gmail.com",
        age: 22,
        isDeleted: false,
        createdAt: "2022-06-26T19:35:33.421Z",
        updatedAt: "2022-06-26T19:35:33.421Z"
    

      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
