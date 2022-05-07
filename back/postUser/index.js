/*
    In production, modify this route to be only called by the Azure Function App or Admin.
    user adm
    pass adm
*/

const { MongoClient } = require("mongodb");
const { header } = require("../functions/apiFunctions");

module.exports = async function (context, req) {
    const client = new MongoClient('mongodb+srv://adm:adm@mousse.ed5s0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true });
	await client.connect();
	const database = client.db("MousseDB");
	const donerCollection = database.collection("Doner");

    // Save each variable to create a new user
    const email = req.body.email;
    const pass = req.body.pass;
    const validated = 0;
    const entry_date = new Date();

    // Save to the database
    const createdDoc = await donerCollection.insertOne({
		"email": email,
        "pass": pass,
        "validated": validated,
        "entry_date": entry_date.toISOString()
	});

	context.res = {
		status: 201,
		body: {"status": "success", "id": createdDoc.insertedId},
		headers: header
	};
}