
const http = require("http");
const web = require("./data");

const server = http.createServer((req, res) => {
    const webData = web(); 

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${webData.title}</title>
    </head>
    <body>
        ${webData.title}
        ${webData.subtitle}
        ${webData.description}
    </body>
    </html>`);

    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});

