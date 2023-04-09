const express = require('express');
const app = express();
const port = 3000;

// Déclaration ressources statiques:
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.status(200).sendFile('/IHM/index.html', {root__dirname});
});
app.get('/a-propos', (req, res)=>{
    res.status(200).sendFile('/IHM/apropos.html', {root__dirname});
});
app.get('/a-propos', (req, res)=>{
    res.status(200).sendFile('/IHM/apropos.html', {root__dirname});
});
app.use((res, res)=>{
    res.status(404).sendFile('/IHM/404.html', {root__dirname});
});

app.listen(port, ()=>{
    console.log("server listening on port" + port);
});