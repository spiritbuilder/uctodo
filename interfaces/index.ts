// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

declare global {
  interface Window {
    localStorage: any;
  }
}

export type User = {
  id: number;
  name: string;
};

export type Todo = {
  color: "pirp"|"grin"|"";
  description: string;
  status: "open" | "completed";
  todoId?:number
};



export type Filter = "all" | "grin"|"pirp"


