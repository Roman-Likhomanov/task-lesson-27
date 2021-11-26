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
    jest.spyOn(window.localStorage.__proto__, "setItem");
    const crud = new LSCrud();
    crud.create(1, task);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "1",
      '{"id":1,"date":"1987-01-05T21:00:00.000Z","text":"string","tag":["tag"],"status":true}'
    );
  });

  it("read task", () => {
    const task: ITask = {
      id: 1,
      date: new Date(2014, 0, 30),
      text: "string",
      tag: ["tag"],
      status: true,
    };

    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");

    const crud = new LSCrud();
    crud.create(1, task);
    expect(crud.read(1)).resolves.toStrictEqual({
      id: 1,
      date: "2014-01-29T20:00:00.000Z",
      text: "string",
      tag: ["tag"],
      status: true,
    });
  });

  // it("update task", () => {
  //     const task: ITask = {
  //         id: 1,
  //         date: new Date("01.06.1987"),
  //         text: "string",
  //         tag: ["tag"],
  //         status: true,
  //     };

  //     jest.spyOn(window.localStorage.__proto__, "setItem");
  //     jest.spyOn(window.localStorage.__proto__, "getItem");

  //     let crud = new LSCrud();
  //     crud.create(1, task);
  //     crud.read(1);
  //     task.text = "new";
  //     expect(crud.update(1)).resolves.toBe({
  //         id: 1,
  //         date: new Date("01.06.1987"),
  //         text: "new",
  //         tag: ["tag"],
  //         status: true,
  //     }) ;
  // })

  it("delete task", () => {
    const task: ITask = {
      id: 1,
      date: new Date("01.06.1987"),
      text: "string",
      tag: ["tag"],
      status: true,
    };

    jest.spyOn(window.localStorage.__proto__, "removeItem");
    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");

    const crud = new LSCrud();
    crud.create(1, task);
    crud.delete(1);
    expect(crud.read(1)).resolves.toBe(null);
  });

  it("filterByTag task", () => {
    const tasks: ITask[] = [
      {
        id: 1,
        date: new Date("01.06.1987"),
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ];
    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");

    localStorage.setItem("tasks", JSON.stringify(tasks));
    const crud = new LSCrud();
    expect(crud.filterByTag("tag")).resolves.toStrictEqual([
      {
        id: 1,
        date: "1987-01-05T21:00:00.000Z",
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ]);
  });

  it("filterByText task", () => {
    const tasks: ITask[] = [
      {
        id: 1,
        date: new Date("01.06.1987"),
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ];
    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");

    localStorage.setItem("tasks", JSON.stringify(tasks));
    const crud = new LSCrud();
    expect(crud.filterByText("string")).resolves.toStrictEqual([
      {
        id: 1,
        date: "1987-01-05T21:00:00.000Z",
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ]);
  });

  it("filterByDate task", () => {
    const tasks: ITask[] = [
      {
        id: 1,
        date: new Date("01.06.1987"),
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ];
    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");

    localStorage.setItem("tasks", JSON.stringify(tasks));
    const crud = new LSCrud();
    expect(
      crud.filterByDate("1987-01-05T21:00:00.000Z")
    ).resolves.toStrictEqual([
      {
        id: 1,
        date: "1987-01-05T21:00:00.000Z",
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ]);
  });

  it("filterByStatus task", () => {
    const tasks: ITask[] = [
      {
        id: 1,
        date: new Date("01.06.1987"),
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ];
    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");

    localStorage.setItem("tasks", JSON.stringify(tasks));
    const crud = new LSCrud();
    expect(crud.filterByStatus(true)).resolves.toStrictEqual([
      {
        id: 1,
        date: "1987-01-05T21:00:00.000Z",
        text: "string",
        tag: ["tag"],
        status: true,
      },
    ]);
  });
});
