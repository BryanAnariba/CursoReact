import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: [ true, 'Email is required' ],
        unique: true,
        trim: true,
        lowercase: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ],
        trim: true 
    },
    name: {
        type: String,
        required: [ true, 'Password is required' ],
        trim: true 
    }
},{
    timestamps: true,
    versionKey: false,
});

export const User = model( 'User', userSchema );