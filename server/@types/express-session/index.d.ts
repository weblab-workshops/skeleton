import User from "../../../shared/User";
declare module "express-session" {
  interface Session {
    user?: User;
  }
}
