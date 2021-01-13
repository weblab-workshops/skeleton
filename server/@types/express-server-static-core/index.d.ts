import User from "../../../shared/User";
declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}
