
const express = require('express');
const app = express();
const port = 3000; // Wähle einen beliebigen freien Port

// Definiere eine einfache Route
app.get('/', (req, res) => {
    res.send('Hallo, dies ist dein lokaler Server!');
});

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
