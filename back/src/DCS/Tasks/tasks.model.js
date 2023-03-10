const { Model, DataTypes, INTEGER, TEXT } = require('sequelize');
const sequelize = require('../database/dcs.database.sqlite');

class Task extends Model {}
console.log("Task");
Task.init({
    Id : {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Description : {
        type: DataTypes.TEXT
    }, 
    Category : {
        type: DataTypes.TEXT
    },
    Priority : {
        type: DataTypes.TEXT
    },
    CreationDate : {
        type: DataTypes.DATEONLY
    },
    FinishDate : {
        type: DataTypes.DATEONLY
    },
    AuthorId : {
        type: DataTypes.INTEGER,
    },
    MachineId : {
        type: DataTypes.INTEGER
    },
    ResponsibleId : {
        type: DataTypes.INTEGER
    }, 
    Delete : {
        type: DataTypes.BOOLEAN
    }, 
    DeleteDate : {
        type: DataTypes.DATEONLY
    }
}, {
    sequelize, 
    modelName: 'task',
    timestamps: false,
    tableName: 'Tasks'
});

module.exports = Task;