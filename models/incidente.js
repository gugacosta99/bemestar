module.exports = (sequelize, DataTypes) => {
    const Incidente = sequelize.define('Incidente', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        clr: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Incidente.associate = function (models) {
        Incidente.hasMany(models.Instrucao, { as: 'instrucoes', foreignKey: 'incidenteId', onDelete: 'CASCADE' });
    };

    return Incidente;
};
