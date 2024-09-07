const IncidenteService = require('./services/IncidenteService');

//create an express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { sequelize } = require('./models');


//serve static files
app.use(express.static('public'));

app.use(bodyParser.json());


app.get('/usuario', (req, res) => {
    res.sendFile(__dirname + '/public/usuario.html');
});

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/public/create.html');
});

app.get('/api/incidentes', async (req, res) => {
    try {
        const { success, code, data } = await IncidenteService.getAll();
        if (!success) {
            console.error(data);
            return res.status(code).json({ message: data });
        }
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
})

app.get('/api/incidente/:id', async (req, res) => {
    try {
        const { success, code, data } = await IncidenteService.get(req.params.id);
        if (!success) {
            console.error(data);
            return res.status(code).json({ message: data }).send();
        } else if (!data) {
            return res.status(404).json({ message: "Incidente not found" });
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
        const { success, code, data } = await IncidenteService.create(incidente);
        if (!success) {
            return res.status(code).json({ message: data });
        }
        res.status(201).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.put('/api/incidente/:id', async (req, res) => {
    const incidente = req.body

    try {
        const { success, code, data } = await IncidenteService.update(req.params.id, incidente);
        if (!success) {
            return res.status(code).json({ message: data });
        }
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.delete('/api/incidente/:id', async (req, res) => {
    try {
        const { success, code, data } = await IncidenteService.delete(req.params.id);
        if (!success) {
            return res.status(code).json({ message: data });
        }
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.delete('/api/clr', async (req, res) => {
    try {
        const { success, code, data } = await IncidenteService.deleteTest();
        if (!success) {
            return res.status(code).json({ message: data });
        }
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
})

//app.listen(3000, () => console.log('Listening on port http://localhost:3000'));

sequelize.sync()
    .then(() => {
        console.log('Connected to PostgreSQL');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = app