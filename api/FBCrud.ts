import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { ITask, ICrud } from "./index";

const firebaseConfig = {
  apiKey: "AIzaSyAne10qyc09oi6o6tJAJQoS-kPDgTPXIpU",
  authDomain: "fbcrud-32e10.firebaseapp.com",
  databaseURL:
    "https://fbcrud-32e10-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fbcrud-32e10",
  storageBucket: "fbcrud-32e10.appspot.com",
  messagingSenderId: "1056013737331",
  appId: "1:1056013737331:web:f5dbfbce60c8bcd22ab906",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export class FBCrud implements ICrud {
  constructor(collection: string) {
    this.collection = collection;
  }

  async create(id: number, task: ITask): Promise<boolean> {
    try {
      await set(ref(db, `${this.collection}/${id}`), task);
    } catch (e) {
      return false;
    }
    return true;
  }

  async read(id: number): Promise<ITask> {
    try {
      const refer = await ref(db, `${this.collection}/${id}`);
      const value = onValue(refer, (el) => el.val());
      return value;
    } catch (e) {
      return false;
    }
  }

  // async update(id: number): Promise<void> {
  //   const result = db.ref(`${id}`);
  //   let task = result.on("value", (elem) => elem.val());
  //   task = { ...task, text: "Новое задание" };
  //   db.ref(`${id}`).push(JSON.stringify(task));
  // }

  // delete(id: number): void {
  //   db.ref(`${id}`).remove();
  // }
}
