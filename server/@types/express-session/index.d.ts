import { UserInterface } from "../../models/User";
declare module "express-session" {
  interface Session {
    user?: UserInterface;
  }
}
