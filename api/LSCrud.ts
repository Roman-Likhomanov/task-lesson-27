import { ITask, ICrud } from "./index";

export class LSCrud implements ICrud {
  create(id: number, task: ITask): void {
    localStorage.setItem(`${id}`, JSON.stringify(task));
  }

  async read(id: number): Promise<ITask> {
    const result = localStorage.getItem(`${id}`);
    const task = JSON.parse(result as string) as ITask;
    return task;
  }

  async update(id: number): Promise<void> {
    const result = localStorage.getItem(`${id}`);
    let task = JSON.parse(result as string) as ITask;
    task = { ...task, text: "Новое задание" };
    localStorage.setItem(`${id}`, JSON.stringify(task));
  }

  delete(id: number): void {
    localStorage.removeItem(`${id}`);
  }

  async filterByTag(tag: string): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = localStorage.getItem("tasks");
    const tasks = JSON.parse(result as string);
    tasks.forEach((el: ITask) => {
      if (el.tag.includes(tag)) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }

  async filterByText(text: string): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = localStorage.getItem("tasks");
    const tasks = JSON.parse(result as string);
    tasks.forEach((el: ITask) => {
      if (el.text.includes(text)) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }

  async filterByDate(date: Date): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = localStorage.getItem("tasks");
    const tasks = JSON.parse(result as string);
    tasks.forEach((el: ITask) => {
      if (el.date === date) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }

  async filterByStatus(status: boolean): Promise<ITask> {
    const arrFilter: ITask[] = [];
    const result = localStorage.getItem("tasks");
    const tasks = JSON.parse(result as string);
    tasks.forEach((el: ITask) => {
      if (el.status === status) {
        arrFilter.push(el);
      }
    });
    return arrFilter;
  }
}
