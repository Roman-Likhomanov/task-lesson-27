import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { ITask } from "./index";
import { FBCrud } from "./FBCrud";

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

describe("FBCrud", () => {
  it("create task", () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };
    const crud = new FBCrud("test");
    crud.create(1, task);
    expect(crud.read(1)).resolves.toBe(
      '{"id":1,"date":"1987-01-05T21:00:00.000Z","text":"string","tag":["tag"],"status":true}'
    );
  });

  // it("read task", () => {
  //   const task: ITask = {
  //     id: 1,
  //     date: new Date(2014, 0, 30),
  //     text: "string",
  //     tag: ["tag"],
  //     status: true,
  //   };

  //   const crud = new FBCrud('test/');
  //   crud.create(1, task);
  //   expect(crud.read(1)).resolves.toStrictEqual({
  //     id: 1,
  //     date: "2014-01-29T20:00:00.000Z",
  //     text: "string",
  //     tag: ["tag"],
  //     status: true,
  //   });
  // });

  // it("update task", () => {
  //   const task: ITask = {
  //     id: 1,
  //     date: new Date("01.06.1987"),
  //     text: "string",
  //     tag: ["tag"],
  //     status: true,
  //   };

  //   const crud = new FBCrud();
  //   crud.create(1, task);
  //   crud.update(1);
  //   expect(firebase.database().ref()).toHaveBeenCalledWith(
  //     "1",
  //     '{"id":1,"date":"1987-01-05T21:00:00.000Z","text":"Новое задание","tag":["tag"],"status":true}'
  //   );
  // });

  // it("delete task", () => {
  //   const task: ITask = {
  //     id: 1,
  //     date: new Date("01.06.1987"),
  //     text: "string",
  //     tag: ["tag"],
  //     status: true,
  //   };

  //   const crud = new LSCrud();
  //   crud.create(1, task);
  //   crud.delete(1);
  //   expect(crud.read(1)).resolves.toBe(null);
  // });
});
