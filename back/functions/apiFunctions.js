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

module.exports = { UpdateUser, header };
