export interface IBoard {
  id: string;
  name: string;
  columns?: IColumn[];
  executors?: IExecutor[];
}

export interface IColumn {
  id: string;
  name: string;
  color: string;
  tasks?: ITask[];
}

export interface ITask {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  executor?: IExecutor;
}

export interface IExecutor {
  id: string;
  name: string;
}
