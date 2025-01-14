import mongoose from "mongoose";

const schema = new mongoose.Schema({
    key: String,
    value: {
        type: String,
        require : true
    }
})

export const model = mongoose.model("model",schema)