# Electron SIGABRT

This reproduces a SIGBART in streams when closing an Electron app with at least one window while an active gRPC communication is happening inside a worker thread.

```
git clone
npm install
npm run server
npm run client
```

`client` will bombard the server with gRPC calls to make sure there's some stream action going on almost constantly.

`server` will `app.quit()` after five seconds and trigger an SIGABRT if it happens to happen at the right moment. Should happen after a single digit amount of tries.
