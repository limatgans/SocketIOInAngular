const postNotitfications = ({ db, express }) => {
    const postNotitficationsrouter = express.Router();
    return postNotitficationsrouter.post('/', (req, res, next) => {
        const collection = db.collection('notifications');
        const reqBody = req.body;
        collection.insert({
            title: reqBody.title,
            message: reqBody.message,
            time: new Date()
        }).then((docs) => {
            // Inserting document
            console.log('Inserted Notifications');
            res.send(docs);

        }).catch((err) => {
            // An error happened while retriving
            console.log("Error in inserting notifications to DB " + err);
            res.status(500).send("unable to insert notifications to database");

        });
    });
};

module.exports = postNotitfications;