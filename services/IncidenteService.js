const { Incidente, Instrucao } = require('../models');

const IncidenteService = {
    async getAll() {
        try {
            const incidentes = await Incidente.findAll();
            return { success: true, code: 200, data: incidentes };
        } catch (err) {
            console.error(err);
            return { success: false, code: 500, data: "Internal server error" };
        }

    },

    async get(id) {
        try {
            const incidente = await Incidente.findByPk(id, { include: ['instrucoes'] });
            return { success: true, code: 200, data: incidente };
        } catch (err) {
            console.error(err);
            return { success: false, code: 500, data: "Internal server error" };
        }
    },

    async create(incidente) {
        try {
            const res = await Incidente.create(incidente, { include: ['instrucoes'] });
            return { success: true, code: 201, data: "Incidente criado com sucesso" };
        } catch (err) {
            console.error(err);
            return { success: false, code: 500, data: "Internal server error" };
        }
    },

    async update(id, incidente) {
        return { success: false, code: 501, data: "Not implemented" };
    },

    async delete(id) {
        return { success: false, code: 501, data: "Not implemented" };
    },

    async deleteTest() {
        return { success: false, code: 501, data: "Not implemented" };
    }

}

module.exports = IncidenteService