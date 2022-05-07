const { MongoClient } = require("mongodb");
const { config } = require('../functions/config');

async function connectDB(collection_names) {
  /*
    Connect to the database
  */
    const client = new MongoClient(config['conn'], { useUnifiedTopology: true });
    await client.connect();
    const database = client.db(config['db']);
    const collections = []
    for (let i = 0; i < collection_names.length; i++) {
      collections.push(database.collection(collection_names[i]));
    }

    return collections;
}

const header = {
  'Access-Control-Allow-Credentials': 'false',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Max-Age": "86400"
}

function UpdateUser(list, email, pass, validated) {
  /*
    Complete the validations
  */
  if (email !== undefined && email.length < 64) {
    list.email = email;
  }

  if (pass !== undefined && pass.length < 32) {
    list.pass = pass;
  }

  if (validated !== undefined) {
    list.validated = validated;
  }

  return list;
}

module.exports = { connectDB, UpdateUser, header };
