const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ip', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/stream', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'stream.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
