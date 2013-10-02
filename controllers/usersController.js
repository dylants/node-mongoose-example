var mongoose = require("mongoose"),
    User = mongoose.model("User");

module.exports = function(app) {
    app.get("/users", function(req, res) {
        User.find(function(err, users) {
            res.send(users);
        });
    });

    app.get("/users/populate", function(req, res) {
        var users = [
            {
                firstName: "Biff",
                lastName: "Stu"
            },
            {
                firstName: "Bill",
                lastName: "Jones"
            },
            {
                firstName: "Jimmy",
                lastName: "Johns"
            }
        ];
        User.create(users, function(err) {
            if (err) {
                console.error(err);
                res.send(500);
            }
            res.send(201);
        });
    });

    app.post("/users", function(req, res) {
        var user = new User(req.body);
        user.save(function(err, user) {
            if (err) {
                console.error(err);
                res.send(500);
            }
            res.send(201);
        });
    });
};
