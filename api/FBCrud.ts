import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  remove,
} from "firebase/database";
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
  private collection;

  constructor(collection: string) {
    this.collection = collection;
  }

  async create(id: number, task: ITask): Promise<boolean> {
    try {
      await set(ref(db, `${this.collection}/${id}`), JSON.stringify(task));
    } catch (e) {
      return false;
    }
    return true;
  }

  async read(id: number): Promise<ITask> {
    const dbRef = ref(db);
    return get(child(dbRef, `${this.collection}/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        }
        console.log("No data available");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async updateTask(id: number, patch: Partial<ITask>): Promise<void> {
    const that = this;
    function readTask() {
      return get(child(ref(db), `${that.collection}/${id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            return snapshot.val();
          }
          console.log("No data available");
        })
        .catch((error) => {
          console.error(error);
        });
    }
    const result = await readTask();
    let task = JSON.parse(result as string) as ITask;
    task = { ...task, ...patch };

    await update(ref(db, `${this.collection}/${id}`), task);
  }

  delete(id: number): void {
    remove(ref(db, `${this.collection}/${id}`));
  }
}
