import mongoose from "mongoose";


const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    }, 
    email:{
        type:String,
        required: 'Email address is required',
        unique:true,
     
        // lowercase: true,
        
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        minlength: 8
    },
    token:{
        type:String,
    },
    data:[
        {
            requestType:{
                type:String,
            },
            request:{
                type:String
            }
        }
    ]
  


},
{timestamps:true}
);

export default mongoose.model("User",UserSchema)