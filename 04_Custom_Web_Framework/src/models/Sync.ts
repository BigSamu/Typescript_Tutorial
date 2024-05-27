import axios, { AxiosResponse, AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync<T> {
  constructor(public rootUrl: string){}
  fetch(id: number): AxiosPromise<T> {
    return axios
      .get(`${this.rootUrl}/${id}`)
  }

  save(id: number, data: T): void {
    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      axios.post(`${this.rootUrl}`, data);
    }
  }
}
