import { ITask } from "./index";
import { FBCrud } from "./FBCrud";

describe("FBCrud", () => {
  it("create, read task", async () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };
    const crud = new FBCrud("test");
    crud.create(1, task);
    expect(crud.read(1)).resolves.toBe(JSON.stringify(task));
  });

  it("update task", async () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };

    const crud = new FBCrud("test");
    crud.create(1, task);
    await crud.updateTask(1, { text: "Новое задание" });
    expect(await crud.read(1)).toStrictEqual({
      id: 1,
      date: "1987-01-05T21:00:00.000Z",
      text: "Новое задание",
      tag: ["tag"],
      status: true,
    });
  });

  it("delete task", async () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };

    const crud = new FBCrud("test");
    crud.create(1, task);
    crud.delete(1);
    expect(crud.read(1)).resolves.toBe(undefined);
  });
});
