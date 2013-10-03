var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

/*
 * This defines a UserSchema which is necessary before defining any
 * Mongoose models. The schema outlines what attributes a User will
 * have, defining the type of each attribute and an optional default
 * value. This becomes useful in things like validation.
 *
 * For more information on Mongoose schemas, refer to:
 * http://mongoosejs.com/docs/guide.html
 */
var UserSchema = new Schema({
    // Our user has first name and last name attributes
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    }
});

/*
 * This creates the User model, which can be used to instantiate instances
 * of a User (which will contain the attributes defined in the schema).
 * By associating the model name "User" with the UserSchema, we can later
 * retrieve this model by the same name ("User"). This model can then
 * be used to create a new User document like so:
 *
 * var user = new User({ firstName: "Rick", lastName: "James" });
 *
 * However, keep in mind this document must be persisted with a call
 * to save() to store it in the database.
 *
 * For more information on Mongoose models, refer to:
 * http://mongoosejs.com/docs/models.html
 */
mongoose.model("User", UserSchema);
