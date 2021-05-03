# http/2 + Worker.terminate() = SIGABRT

This reproduces a SIGABRT in http/2 streams when terminating a worker thread right when a read happens on an http/2 stream.

```
git clone

# In two terminals:
npm run server
npm run client
```

`server` will run `index.js` which starts `server.js` in a worker. The worker will start an http/2 server, exact example code copied from the docs. After two seconds `worker.terminate()` will be called, which triggers the SIGABRT if it happens at the right moment.

`client` will bombard the server with http/2 requests to make sure there's some stream action going on almost constantly. It uses the http/2 client example code from the docs.
