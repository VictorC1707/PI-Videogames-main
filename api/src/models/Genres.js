const {DataTypes, UUIDV4} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("genre",
    {
        name:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        id: {
            type: DataTypes.UUID,
            defaultValue:UUIDV4 ,
            unique: true,
            primaryKey: true,
        }
    },
    {
        timestamps: false,
    }
    )
}