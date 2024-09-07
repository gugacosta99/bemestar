module.exports = (sequelize, DataTypes) => {
    const Instrucao = sequelize.define('Instrucao', {
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        incidenteId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'instrucoes',
    });

    Instrucao.associate = function (models) {
        Instrucao.belongsTo(models.Incidente, { foreignKey: 'incidenteId', as: 'incidente' });
    };

    return Instrucao;
};
