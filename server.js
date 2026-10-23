import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/style.css':'style.css','/app.js':'app.js','/generator.js':'generator.js'};
http.createServer(async(req,res)=>{const file=files[req.url];if(!file){res.writeHead(404).end();return;}try{res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html; charset=utf-8');res.end(await readFile(new URL(file,import.meta.url)));}catch{res.writeHead(500).end();}}).listen(5173,'127.0.0.1',()=>console.log('Preview: http://localhost:5173'));
