const grpc = require('@grpc/grpc-js');
const messages = require('./heartbeat_pb.js');
const services = require('./heartbeat_grpc_pb.js');

const client = new services.HeartbeatClient('localhost:3000', grpc.credentials.createInsecure());

let request = new messages.HeartbeatRequest();

function makeCall() {
  client.handleHeartbeat(request, function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log('heartbeat success');
    }
  });

  setImmediate(makeCall);
}

makeCall();
