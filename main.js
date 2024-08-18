const express = require('express');
const app = express();
const port = 3000;
const hostname = process.env.HOSTNAME || 'unknown';

app.get('/', (req, res) => {
    res.send(`Hello from Kubernetes server ${hostname} 🐳`)
});

app.get('/stop', (req, res) => {
    res.send(`Server ${hostname} is shutting down...`);
    console.log(`Server ${hostname} is shutting down...`);
    process.exit(0); 
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});