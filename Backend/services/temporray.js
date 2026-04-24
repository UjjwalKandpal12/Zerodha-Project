// import config from "../config/config.js";
import { google } from "googleapis";

const CLIENT_ID =
  "1029241325591-oeo98uv72rnmqh9thduf2embvnjhnmnc.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:5000";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

const code =
  "4/0Aci98E-x3DyMfgJEyM9QN7-ZCz-b-29Ti8_7y6NFBJZOWRl9hGYcPmCOIhKVK80Z26rh9w";

async function getToken() {
  const { tokens } = await oauth2Client.getToken(code);
  // console.log(tokens);
}
// 1//0gbkDcfn6CII6CgYIARAAGBASNwF-L9IrO4fniIOAfIICY2I6_EcsyPJ27sg9TU_OcOsL5dIq9Phrlh0LWBzPce10qhLywcD0_eQ
// 1//04oapbbCMeXyvCgYIARAAGAQSNwF-L9IrccIZ0mTrdLGBrePKyPQ94Izkql4v-W_6Ddlpyc-YDdzxSQe9EEZZgqn4-DxT-ikxR8c
getToken();
// STEP 1: Generate URL
// const url = oauth2Client.generateAuthUrl({
//   access_type: "offline", // 🔥 IMPORTANT (refresh token ke liye)
//   scope: ["https://mail.google.com/"],
// });

// console.log("Open this URL in browser:\n", url);
