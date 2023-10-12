const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Define an endpoint to read circle states
app.get('/read/:htmlFileName', (req, res) => {
    const htmlFileName = req.params.htmlFileName;
    const circleStatesFileName = `${htmlFileName}_circle_states.json`;

    fs.readFile(circleStatesFileName, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file.');
        }
        res.send(data);
    });
});

// Define an endpoint to save circle states
app.post('/save/:htmlFileName', (req, res) => {
    const htmlFileName = req.params.htmlFileName;
    const circleStatesFileName = `${htmlFileName}_circle_states.json`;
    const circleStates = req.body;

    if (!Array.isArray(circleStates)) {
        return res.status(400).send('Invalid data format.');
    }

    fs.writeFile(circleStatesFileName, JSON.stringify(circleStates), (err) => {
        if (err) {
            return res.status(500).send('Error writing to the file.');
        }
        res.send('Data saved.');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
