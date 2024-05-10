import { User } from "./models/User";
import axios from "axios";

const user = new User({ name: "myname", age: 20 });

user.on("change", () => {
  console.log("Change #1");
});
user.on("change", () => {
  console.log("Change #2");
});
user.on("save", () => {
  console.log("Save was triggerd");
});

// user.trigger('change');
// user.trigger('save');
user.trigger("sa");

axios.post('http://localhost:3000/users', {
  name: 'myname',
  age: 20
})
