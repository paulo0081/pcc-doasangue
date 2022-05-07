const { MongoClient } = require("mongodb");
const { header } = require("../functions/apiFunctions");

module.exports = async function (context, req) {
    const client = new MongoClient('mongodb+srv://adm:adm@mousse.ed5s0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true });
	await client.connect();
	const database = client.db("MousseDB");
	const donerCollection = database.collection("Doner");

    const email = req.body.email;

    const foundDoc = await donerCollection.deleteOne({
        "email": email
    });

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            "status": "deleted"
        },
        headers: header
    };
}
