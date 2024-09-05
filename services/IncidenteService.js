
// Create IncidenteService class with async getAll() method

const IncidenteService = {    
    async getAll() {
        const incidentes = [
            {
                "id": 1,
                "nome": "Queimadura",
                "descricao": "Queimadura",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2-TuWD3BS_HhYRiYo2gyHLwaEJMWPnCJhA&s"
            },
            {
                "id": 2,
                "nome": "Afogamento",
                "descricao": "Afogamento",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aDe0ciZhknSVsyg0KpYUw7fcBpTHUvjvJw&s"
            },
            {
                "id": 3,
                "nome": "Fratura",
                "descricao": "Fratura",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vD02EH1ts4Bcn8NgPxVKzdl7zqpoHOHOuQ&s"
            }
        ]
        
        return incidentes;
    },

    async get(id) {
        const incidente = {
            "id": 1,
            "nome": "Queimadura",
            "descricao": "Queimadura",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2-TuWD3BS_HhYRiYo2gyHLwaEJMWPnCJhA&s",
            "instrucoes": [
                {
                    "numero": 1,
                    "descricao": "Leve à água corrente"
                },
                {
                    "numero": 2,
                    "descricao": "Coloque bandagem no local"
                },
                {
                    "numero": 3,
                    "descricao": "Buscar atendimento"
                }
            ]
        }
        return incidente;
    }

}

module.exports = IncidenteService