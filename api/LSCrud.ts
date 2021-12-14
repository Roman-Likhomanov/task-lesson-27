import { ITask, ICrud } from "./index";

export class LSCrud implements ICrud {
  async create(id: number, task: ITask): Promise<void> {
    if (id != null) {
      localStorage.setItem(`${id}`, JSON.stringify(task));
    }
  }

  async read(id: number): Promise<ITask | null> {
    await null;
    const result = localStorage.getItem(`${id}`);
    if (result != null) {
      const task = JSON.parse(result as string) as ITask;
      return task;
    }
    return null;
  }

  async updateTask(id: number, patch: Partial<ITask>): Promise<void> {
    await null;
    const result = localStorage.getItem(`${id}`);
    if (result != null) {
      let task = JSON.parse(result as string) as ITask;
      task = { ...task, ...patch };
      localStorage.setItem(`${id}`, JSON.stringify(task));
    }
  }

  async delete(id: number): Promise<void> {
    const result = localStorage.getItem(`${id}`);
    if (result != null) {
      localStorage.removeItem(`${id}`);
    }
  }
}
