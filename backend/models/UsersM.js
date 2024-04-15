const Sequelize= require('sequelize');
const sequelize= require('../utils/database');

const Users = sequelize.define("Users",{

    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        
    },    
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    phone:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    

})

module.exports =Users;