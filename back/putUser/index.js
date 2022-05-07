const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
const { UpdateUser, header } = require("../functions/apiFunctions");

module.exports = async function (context, req) {
    const client = new MongoClient('mongodb+srv://adm:adm@mousse.ed5s0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true });
	await client.connect();
	const database = client.db("MousseDB");
	const donerCollection = database.collection("Doner");

    const email = req.body.email;
    const pass = req.body.pass;
    const validated = req.body.validated;

    const res = await donerCollection.find({"email" : email});
    let user = await res.toArray();
    user = user[0];
    user = UpdateUser(user, email, pass, validated);

    donerCollection.save(user)

    context.res = {
        body: {status: "updated"},
        headers: header
    };
}