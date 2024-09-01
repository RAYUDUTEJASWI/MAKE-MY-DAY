const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (replace with MongoDB)
let events = [];

app.use(bodyParser.json());

// Route to get all events
app.get('/api/events', (req, res) => {
    res.json(events);
});

// Route to create a new event
app.post('/api/events', (req, res) => {
    const { name, description, date } = req.body;
    const newEvent = { name, description, date };
    events.push(newEvent);
    res.status(201).send('Event created successfully');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
