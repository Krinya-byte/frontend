import {Account} from "./Account";

export class User {
  id: number = 0;
  name : string ="";
  userName: string = "";
  password: string = "";
  loginDate: string = "";
  accounts: Account[] | any;

}
