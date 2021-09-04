const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://dbUser:userDB1234@cluster0.qpj9v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listUsers(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listUsers(client){
    const database = client.db("dadosdb");
    const users = database.collection("users");

    const options = {
        sort: {username : 1},
    };

    const docs = await users.find().lean().exec();
    console.log();
}
    /*
    const cursor = users.find();

    const results = await cursor.toArray();

    if (results.length > 0){
        console.log("A pesquisa obteve resultados!");
        results.forEach((result, i) => {
            console.log();
            console.log(`${i + 1}. name: ${result.username}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   e-mail: ${result.email}`);
        });
    } else{
        console.log("Nenhum Resultado.");
    }
    
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error); */

/* MongoDB Local
const mongoose = require('mongoose');
const server = 'mongodb://localhost:27017/'
const database = 'dadosdb';

mongoose.connect(server+database).then(() => {
        console.log("Succesfully connect to MongoDB.");
    })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });


const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'users'}
);

module.exports = {Mongoose:mongoose, UserSchema:userSchema}
*/