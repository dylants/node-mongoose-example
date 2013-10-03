var mongoose = require("mongoose"),
    User = mongoose.model("User");

module.exports = function(app) {
    app.get("/users", function(req, res) {
        /*
         * For the GET request on /users, we'll return all the User documents
         * in our Mongo database. To do so, we execute the find() operation
         * on the User model, which is done asynchronously so accepts a callback.
         * This callback takes in an error object (if any problems occur) and
         * the list of User documents.
         */
        User.find(function(err, users) {
            // if there is an error, handle it and return
            if (err) {
                console.error(err);
                res.send(500);
                return;
            }

            // with no errors, respond with the list of users
            res.send(users);
        });
    });

    app.post("/users", function(req, res) {
        /*
         * For the POST request on /users, we take the data send in the body
         * of the request and use it to instantiate a new User document. We
         * then save the user and respond to the user based on it's success.
         *
         * So for example, this endpoint would accept something of the form:
         *
         * {
         *     "firstName": "Billy",
         *     "lastName": "Jean"
         * }
         *
         * And use that to create a user with that name.
         */
        var user = new User(req.body);
        user.save(function(err, user) {
            // if there is an error, handle it and return
            if (err) {
                console.error(err);
                res.send(500);
                return;
            }

            // with no errors, respond with created
            res.send(201);
        });
    });

    /*
     * This is a helper method which will populate the database
     * with a static set of users.
     */
    app.get("/users/populate", function(req, res) {
        // we define an array of users
        var users = [{
            firstName: "Biff",
            lastName: "Stu"
        }, {
            firstName: "Bill",
            lastName: "Jones"
        }, {
            firstName: "Jimmy",
            lastName: "Johns"
        }];
        /*
         * The create method will iterate over our array of users
         * and for each, create the user and save it to the database
         * if it is a valid user.
         */
        User.create(users, function(err) {
            // if there is an error, handle it and return
            if (err) {
                console.error(err);
                res.send(500);
                return;
            }

            // with no errors, respond with created
            res.send(201);
        });
    });

};
