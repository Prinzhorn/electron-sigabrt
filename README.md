# gRPC + Worker.terminate() = SIGABRT

This reproduces a SIGABRT in http/2 streams when terminating a worker thread in the middle of gRPC communication

```
git clone
npm install
npm run server
npm run client
```

`server` will run `index.js` which starts `server.js` in a worker. The worker will start a simple gRPC server. After two seconds `worker.terminate()` will be called, which triggers the SIGABRT if it happens at the right moment.

`client` will bombard the server with gRPC calls to make sure there's some stream action going on almost constantly.
