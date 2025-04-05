import { ReactNode } from "react";

export interface Column<T> {
  key: string;
  name: string;
  render: (obj: T) => ReactNode;
}

export interface Props<T> {
  data: T[];
  loading: boolean;
  columns: Column<T>[];
}
