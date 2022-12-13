import {Account} from "./Account";

export class User {
  id: number = 0;
  userName: string = "";
  password: string = "";
  loginDate: string = "";
  accounts: Account[] | any;

}
