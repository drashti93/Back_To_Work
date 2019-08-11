var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var UsersSchema = new Schema ({
   firstname: {
       type: String,
       required: true
   },
   lastname: {
       type: String,
       required: true
   },
   username: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true
   },
   contact: {
       type: String,
       required: false
   },
   skills: {
       type: String,
       required: true
   },
   company: {
       type: String,
       required: true
   },
   courses: {
       type: String,
       required: true
   },
   isactive: {
       type: Boolean,
       required: true
   },
   usertype: {
       type: Boolean,
       required: true
   }
})
var Users = mongoose.model("users", UsersSchema, "users")
module.exports = Users;