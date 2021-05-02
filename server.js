const grpc = require('@grpc/grpc-js');
const messages = require('./heartbeat_pb.js');
const services = require('./heartbeat_grpc_pb.js');

const server = new grpc.Server();

server.addService(services.HeartbeatService, {
  handleHeartbeat: function (call, callback) {
    let reply = new messages.HeartbeatReply();
    console.log('heartbeat');
    callback(null, reply);
  },
});

server.bindAsync('localhost:3000', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`gRPC bound to ${port}`);
    server.start();
  }
});
