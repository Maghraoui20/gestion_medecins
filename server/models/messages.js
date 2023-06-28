import mongoose from 'mongoose';
const messagesSchema = mongoose.Schema({
nom:  String, 
email:  String, 
message:  String, 

});
const  message= mongoose.model('message', messagesSchema);
export default message; 