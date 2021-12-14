export interface ITask {
  id: number;
  date: Date;
  text: string;
  tag: string[];
  status: boolean;
}

export interface ICrud {
  create: (id: number, task: ITask) => void;
  read: (id: number) => Promise<ITask | null>;
  updateTask: (id: number, patch: Partial<ITask>) => Promise<void> | null;
  delete: (id: number) => void;
}
