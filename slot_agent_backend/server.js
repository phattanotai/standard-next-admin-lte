const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


/* const privateKey = fs.readFileSync('/etc/letsencrypt/live/BigWin1234.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/BigWin1234.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/BigWin1234.com/chain.pem', 'utf8');

const httpsOptions = {
	key: privateKey,
	cert: certificate,
	ca: ca
}; */


const httpsOptions = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt'),
    //passphrase: '06012515'
    //ca: fs.readFileSync('./cert/ca-crt.pem')
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);

    }).listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on https://localhost:3000');
    });
});