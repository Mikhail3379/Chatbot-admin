import mongoose, { Schema } from "mongoose";

interface IUsers {
  id: string;
  public_key: string;
  
}

interface UsersModelInterface
  extends mongoose.Model<UsersDoc> {
  build(attr: IUsers): UsersDoc;
}

interface UsersDoc extends mongoose.Document {
  id: string;
  public_key: string;
  
}

const usersSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  public_key: {
    type: String,
    required: true,
  }
  });
  

usersSchema.statics.build = (attr: IUsers) => {
  return new Users(attr);
};

const Users = mongoose.model<
  UsersDoc,
  UsersModelInterface
>("Users", usersSchema);

export { Users };
