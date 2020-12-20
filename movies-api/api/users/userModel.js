import mongoose from 'mongoose';

const MovieSchema = new Schema({
  id: Number,
  name: String
});

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
  name: {type: String, required: true},
  favourites: [MovieSchema]
});

export default mongoose.model('User', UserSchema);