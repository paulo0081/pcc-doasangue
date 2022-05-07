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

function UpdateCorp(corp, cnpj, pass, name, country, city, address, phone, email, state, entry_date, subscription_type, subscription_start, subscription_end) {
  if (cnpj !== undefined) {
    corp.cnpj = cnpj;
  }

  if (pass !== undefined) {
    corp.pass = pass;
  }

  if (name !== undefined) {
    corp.name = name;
  }

  if (country !== undefined) {
    corp.country = country;
  }

  if (city !== undefined) {
    corp.city = city;
  }

  if (address !== undefined) {
    corp.address = address;
  }

  if (phone !== undefined) {
    corp.phone = phone;
  }

  if (email !== undefined) {
    corp.email = email;
  }

  if (state !== undefined) {
    corp.state = state;
  }

  if (entry_date !== undefined) {
    corp.entry_date = entry_date;
  }

  if (subscription_type !== undefined) {
    corp.subscription_type = subscription_type;
  }

  if (subscription_start !== undefined) {
    corp.subscription_start = subscription_start;
  }

  if (subscription_end !== undefined) {
    corp.subscription_end = subscription_end;
  }

  return corp;
}

module.exports = { connectDB, UpdateUser, UpdateCorp, header };
