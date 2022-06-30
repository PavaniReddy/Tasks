'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      // define association here
      this.hasMany(Post, { foreignKey: 'userId', as: 'posts' })
    }
    toJSON(){
      return { ...this.get(),id: undefined}
    }
  }
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [4, 15],
        notNull: {msg: 'User must have a name' },
        notEmpty: {msg: 'Name must not be empty'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: ["^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])"],
      
        notNull: {msg: 'User must have a password' },
        notEmpty: {msg: 'Password must not be empty'}
       
      }
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {msg: 'User must have an email' },
        notEmpty: {msg: 'Email must not be empty'},
        isEmail: {msg: 'Must be a valid email address'}
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{

        notNull: {msg: 'Age field cannot be null' },
        notEmpty: {msg: 'Age must not be empty'},
        min: 5
         
        
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate:{
        notNull: {msg: 'isDeleted field cannot be null'},
        notEmpty: {msg: 'isDeleted must not be empty'}
      }
    },
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};