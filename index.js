const IncidenteService = require('./services/IncidenteService');

//create an express server
const express = require('express');
const app = express();


//serve static files
app.use(express.static('public'));


app.get('/usuario', (req, res) => {
    res.sendFile(__dirname + '/public/usuario.html');
});

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/public/create.html');
});

app.get('/api/incidentes', async (req, res) => {
    try {
        const incidentes = await IncidenteService.getAll();
        res.json(incidentes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
})

app.get('/api/incidente/:id', async (req, res) => {
    try {
        const incidente = await IncidenteService.get(req.params.id);
        if (!incidente) {
            res.status(404).json({ message: "Incidente not found" });
        }
        res.json(incidente);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/api/incidente', async (req, res) => {
    res.status(501).json({ message: "Not implemented" });
});

app.put('/api/incidente/:id', async (req, res) => {
    res.status(501).json({ message: "Not implemented" });
});

app.delete('/api/incidente/:id', async (req, res) => {
    res.status(501).json({ message: "Not implemented" });
});

app.listen(3000, () => console.log('Listening on port http://localhost:3000'));

module.exports = app