import { Users } from "../models/users";
const { uuid } = require("uuidv4");
export function addUser(id: string, public_key: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      let users = Users.build({
        id: uuid(),
        public_key,
      });
      await users.save();
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
}

export function getAllUsers() {
  return new Promise(async (resolve, reject) => {
    resolve(await Users.find());
  });
}

export function deleteUser(id: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await Users.deleteOne({ id });
      resolve("");
    } catch (error) {
      reject(error);
    }
  });
}

export function getUser(id: any): any {
  return new Promise(async (resolve, reject) => {
    resolve(await Users.find({ id }));
  });
}

export function updateUser(
  id: any,
  public_key: string,
): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const elementArray = await getUser(id);
      if (!Array.isArray(elementArray) || elementArray.length < 1) {
        let err = new Error();
        err.message = "There is no user with this id";
        throw err;
      }
      const element = elementArray[0];
      if (id) element.id = id;
      if (public_key) element.public_key = public_key;
      await Users.findOneAndUpdate({ id }, element);
      resolve("");
    } catch (error) {
      reject(error);
    }
  });
}
