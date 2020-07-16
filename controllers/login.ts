import { UserLogin } from "../helpers/dbconnect.ts";

export const login: any = async (context: any) => {
  try {
    // Get username and password from request params
    const user: string = context.params.username;
    const pw: string = context.params.password;

    // Construct object from params
    const userDetails = {
      username: user,
      password: pw,
    };

    // Search for a match in db
    const data: any = await UserLogin.findOne(userDetails);

    // Success
    if (data) {
      context.response.body = "logged in";
      context.response.status = 200;
    } else {
      // Fail
      context.response.body = "user not found";
      context.response.status = 204;
    }
  } catch (err) {
    context.response.body = null;
    context.response.status = 500;
    console.log(err);
  }
};
