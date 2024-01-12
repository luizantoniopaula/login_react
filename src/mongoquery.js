/**
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:kmrqsc91@127.0.0.1:27017/?authMechanism=DEFAULT&authSource=MoonBase";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MoonBase");
  //Find the first document in the customers collection:
  dbo.collection("usuarios").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
**/
           
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://admin:kmrqsc91@127.0.0.1:27017/?authMechanism=DEFAULT&authSource=MoonBase';
// Database Name
const dbName = 'MoonBase';
// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
  const col = db.collection('usuarios');
  // Get first two documents that match the query
  col.find({}).toArray(function(err, docs) {
    assert.equal(null, err);
    assert.equal(docs.name);
    client.close();
  });
});


