import { ITask } from "./index";
import { LSCrud } from "./LSCrud";

describe("LSCrud", () => {
  it("create task", () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };
    const crud = new LSCrud();
    crud.create(1, task);
    const result = localStorage.getItem("1") as string;
    expect(JSON.parse(result)).toStrictEqual({
      id: 1,
      date: "1987-01-05T21:00:00.000Z",
      text: "string",
      tag: ["tag"],
      status: true,
    });
  });

  it("read task", () => {
    jest
      .useFakeTimers("modern")
      .setSystemTime(new Date("1987-01-05T21:00:00.000Z"));

    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };

    const crud = new LSCrud();
    crud.create(1, task);
    expect(crud.read(1)).resolves.toStrictEqual({
      id: 1,
      date: "1987-01-05T21:00:00.000Z",
      text: "string",
      tag: ["tag"],
      status: true,
    });
  });

  it("update task", () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };

    const crud = new LSCrud();
    crud.create(1, task);
    crud.updateTask(1, { text: "Новое задание" });
    expect(crud.read(1)).resolves.toStrictEqual({
      id: 1,
      date: "1987-01-05T21:00:00.000Z",
      text: "Новое задание",
      tag: ["tag"],
      status: true,
    });
  });

  it("delete task", () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };

    const crud = new LSCrud();
    crud.create(1, task);
    crud.delete(1);
    expect(localStorage.getItem("1")).toBe(null);
  });
});
