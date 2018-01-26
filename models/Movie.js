const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type:String,
        required: [true, '`{PATH}`alanı zorunludur.' ],
        maxlenght: [15, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGHT}) karakterden küçük olmalıdır.' ],
        minlenght: [3, '`{PATH}` alanı (`{VALUE}`), ({MINLENGHT}) karakterden büyük olmalıdır. ']
    },
    category: {
        type: String,
        maxlength: 30,
        minlenght: 1
    },
    country:{
        type: String,
        maxlength: 30,
        minlenght: 1
    },
    year:{
        type: Number,
        max: 2040,
        min: 1900
    },
    imdbScore: {
        type: Number,
        max: 10,
        min: 0
    },
    director_id: Schema.Types.ObjectId,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);