import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
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

// para que al guardar que no retorne la password
userSchema.pre( 'save', async function( next ) {
    const user = this;
    if ( !user.isModified( 'password' ) ) return next();
    try {
        const salt = await bcrypt.genSalt( 10 );
        user.password = await bcrypt.hash( user.password, salt );
        next();
    } catch ( err ) {
        throw new Error( `Hashed Password Failed ${ err }` )
    }
    
});

userSchema.methods.comparePassword = async function ( clientPassword ) {
    return await bcrypt.compare( clientPassword, this.password );
}

export const User = mongoose.model( 'User', userSchema );
