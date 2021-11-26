export interface ITask {
  id: number;
  date: Date;
  text: string;
  tag: string[];
  status: boolean;
}

export interface ICrud {
  create: (id: number, task: ITask) => void;
  read: (id: number) => Promise<ITask> | null;
  update: (id: number) => Promise<void> | null;
  delete: (id: number) => void;
  filterByTag: (tag: string) => Promise<ITask> | null;
  filterByText: (text: string) => Promise<ITask> | null;
  filterByDate: (date: Date) => Promise<ITask> | null;
  filterByStatus: (status: boolean) => Promise<ITask> | null;
}
