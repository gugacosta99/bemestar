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
        const {success, code, data} = await IncidenteService.getAll();
        if (!success) {
            console.error(data);
            res.status(code).json({ message: data });
        }
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
})

app.get('/api/incidente/:id', async (req, res) => {
    try {
        const {success, code, data} = await IncidenteService.get(req.params.id);
        if (!success) {
            console.error(data);
            res.status(code).json({ message: data });
        } else if (!data) {
            res.status(404).json({ message: "Incidente not found" });
        }
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/api/incidente', async (req, res) => {
    const incidente = req.body

    try {
        const {success, code, data} = await IncidenteService.create(incidente);
        if (!success) {
            res.status(code).json({ message: data });
        }
        res.status(201);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.put('/api/incidente/:id', async (req, res) => {
    const incidente = req.body

    try {
        const {success, code, data} = await IncidenteService.update(req.params.id, incidente);
        if (!success) {
            res.status(code).json({ message: data });
        }
        res.status(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.delete('/api/incidente/:id', async (req, res) => {
    try {
        const {success, code, data} = await IncidenteService.delete(req.params.id);
        if (!success) {
            res.status(code).json({ message: data });
        }
        res.status(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.delete('/api/test/clear', async (req, res) => {
    try {
        const {success, code, data} = await IncidenteService.deleteTest();
        if (!success) {
            res.status(code).json({ message: data });
        }
        res.status(200);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
})

app.listen(3000, () => console.log('Listening on port http://localhost:3000'));

module.exports = app