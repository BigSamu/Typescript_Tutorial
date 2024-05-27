import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }




}