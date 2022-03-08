// import http from 'http';
// import {readFileSync, createReadStream} from 'fs';

// http.createServer((req, res) => {
//   // Examplo de uso do writable (não é a melhor prática)
//   // const file = readFileSync('big.file');
//   // res.write(file);
//   // res.end();

//   // Exemplo com pipe
//   // createReadStream("big.file")
//   // .pipe(res);

// }).listen(3000, () => console.log('running at 3000'));


// Gerando arquivo de dados para teste
// node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file

// examplo uso stdin
// const stdin = process.stdin
// .on('data', msg => console.log('data terminal', msg.toString()))

// stdin.pipe(process.stdout)

// Exemplo com sockets

// import net from 'net';

// // acessando servidor remoto com socket
// // node -e "process.stdin.pipe(require('net').connect(1338))"

// net.createServer(socket => socket.pipe(process.stdout)).listen(1338)