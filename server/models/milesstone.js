
const mongoose = require("mongoose");
const { Schema } = mongoose;

const MilesstoneSchema = Schema({
    name:{
        type:String,
        required:true
    },
    startDate:{
        type: Date, 
        default: Date.now
    },
    endDate:{
        type: Date, 
        default: Date.now
    },
    _owner:[{
        name:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true
        },
        _userId:{
            type:Schema.Types.ObjectId,
            required:true
        }
    }],
    _responsible:[{
        name:{
            type:String,
            required:true
        },
        photo:{
            type:String
        },
        _userId:{
            type:Schema.Types.ObjectId,
            required:true
        }
    }]
    
});

const Milesstones  = mongoose.model('milesstones', MilesstoneSchema);
module.exports = {
    Milesstones
};
