// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var heartbeat_pb = require('./heartbeat_pb.js');

function serialize_heartbeat_HeartbeatReply(arg) {
  if (!(arg instanceof heartbeat_pb.HeartbeatReply)) {
    throw new Error('Expected argument of type heartbeat.HeartbeatReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_heartbeat_HeartbeatReply(buffer_arg) {
  return heartbeat_pb.HeartbeatReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_heartbeat_HeartbeatRequest(arg) {
  if (!(arg instanceof heartbeat_pb.HeartbeatRequest)) {
    throw new Error('Expected argument of type heartbeat.HeartbeatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_heartbeat_HeartbeatRequest(buffer_arg) {
  return heartbeat_pb.HeartbeatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var HeartbeatService = exports.HeartbeatService = {
  handleHeartbeat: {
    path: '/heartbeat.Heartbeat/HandleHeartbeat',
    requestStream: false,
    responseStream: false,
    requestType: heartbeat_pb.HeartbeatRequest,
    responseType: heartbeat_pb.HeartbeatReply,
    requestSerialize: serialize_heartbeat_HeartbeatRequest,
    requestDeserialize: deserialize_heartbeat_HeartbeatRequest,
    responseSerialize: serialize_heartbeat_HeartbeatReply,
    responseDeserialize: deserialize_heartbeat_HeartbeatReply,
  },
};

exports.HeartbeatClient = grpc.makeGenericClientConstructor(HeartbeatService);
