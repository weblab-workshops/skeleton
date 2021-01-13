import { Schema, Document, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  googleid: String,
});

export interface UserInterface {
  name: string;
  googleid: string;
  _id: string;
}

const UserModel = model("User", UserSchema);

export default UserModel;
