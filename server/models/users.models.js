const {Schema , model}= require('mongoose');
const bycrypt = require('bcrypt')

const users = new Schema (

    {

        email : {
            type : String ,
            required : true 
        } ,

        userName : {
            type : String ,
            required : true
        },

        password : {
            type : String,
            required : true ,
        } ,

        token : {
            type : String  ,
            default : true
        } ,

        likeProducts : {
            Type : String
        }


      
    }
) 


module.exports = model( 'Users ', users)