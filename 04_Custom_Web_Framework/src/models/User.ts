import axios, {AxiosPromise} from "axios";
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void; // Typescript type alias
// Defining Callback as a void function with no arguments

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if(!handlers || handlers.length === 0){
      return;
    }
    handlers.forEach(callback => {
      callback();
    })
  }

  save(): void {

  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((response: AxiosResponse): void => {

    });
  }
}
