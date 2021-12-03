import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
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
  create(id: number, task: ITask): void {
    db.ref(`${id}`).push(JSON.stringify(task));
  }

  async read(id: number): Promise<ITask> {
    const result = db.ref(`${id}`);
    const task = result.on("value", (elem) => elem.val());
    return task;
  }

  async update(id: number): Promise<void> {
    const result = db.ref(`${id}`);
    let task = result.on("value", (elem) => elem.val());
    task = { ...task, text: "Новое задание" };
    db.ref(`${id}`).push(JSON.stringify(task));
  }

  delete(id: number): void {
    db.ref(`${id}`).remove();
  }

  async filterByTag(tag: string): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = db.ref("tasks");
    const tasks = result.on("value", (elem) => elem.val());
    tasks.forEach((el: ITask) => {
      if (el.tag.includes(tag)) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }

  async filterByText(text: string): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = db.ref("tasks");
    const tasks = result.on("value", (elem) => elem.val());
    tasks.forEach((el: ITask) => {
      if (el.text.includes(text)) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }

  async filterByDate(date: Date): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = db.ref("tasks");
    const tasks = result.on("value", (elem) => elem.val());
    tasks.forEach((el: ITask) => {
      if (el.date === date) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }

  async filterByStatus(status: boolean): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = db.ref("tasks");
    const tasks = result.on("value", (elem) => elem.val());
    tasks.forEach((el: ITask) => {
      if (el.status === status) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }
}