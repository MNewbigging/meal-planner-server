import { UserLogin } from "../helpers/dbconnect.ts";

export const viewAllUsers: any = async (context: any) => {
  try {
    const allUsers = await UserLogin.find({ username: { $ne: null } });

    if (allUsers) {
      context.response.body = "users found: " + allUsers;
      context.response.status = 200;
    } else {
      context.response.body = "no users to find";
      context.response.status = 204;
    }
  } catch (err) {
    context.response.body = null;
    context.response.status = 500;
    console.log(err);
  }
};
