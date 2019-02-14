const getNotifications = ({ db, express }) => {
    const getNotificationsrouter = express.Router();
    return getNotificationsrouter.get('/', (req, res, next) => {
        const collection = db.collection('notifications');
        collection.find({}).then((docs) => {
            // Getting documents
            console.log('Got the values');
            res.send(docs);
        }).catch((err) => {
            // An error happened while retriving
            console.log("Error in retriving from DB " + err);
            res.status(500).send("unable to retrive to database");
        });
    });
};

module.exports = getNotifications;