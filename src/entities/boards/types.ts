export interface IBoard {
  id: string;
  name: string;
  columns?: IColumn[];
  executors?: IExecutor[];
}

export interface IColumn {
  id: string;
  name: string;
  color: EColors;
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

export enum EColors {
  RED = "#F45B69",
  ORANGE = "#FF9914",
  GREEN = "#5CF64A",
  BLUE = "#2176AE",
  GRAY = "#F2EDEB",
}
