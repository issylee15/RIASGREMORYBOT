//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281"2348164793611;
global.sudo = process.env.SUDO || "2347071147123";
global.owner = process.env.OWNER_NUMBER || "2347071147123";
global.style = process.env.STYLE || "2347071147123";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tNYUs4cXIrYUNnR3d4N1l1eWZhUmRHQUNpcFdvUm9sL3U3QjU5dEJGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnp2UGdRcmowd3hsdnc5WlNnYklSRUhZSnI4aHlyMmFWR0JqWmhoN1dCTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQUZxdGJGYUlZbkhvaG9WMU42cUpHeTZnZFQrUE9Uc2xJUGlpWGp4WjNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZjIwazJVRzRhb1FhQVhWdE9JYVRlSTNweGZMK3ZpejRQaVorRFBhcFNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOZTFXSmFVZ0pEVUpzYnRoZDQvcTVKR1YxUGVWeUlFdlJoRllua1dtR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitZeFpjUFFPcjgvdDJxNTVDZlpBb3FwdmVNQW9IR2lITGZtODA2YmdXaUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZyOUpsVXpnaU5aaTREVDNuUythVEwrMGsyRUVpdnZ6VDA4QlNlOWpsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQW9JUkpVYUpRKy9qMng3S2FhTURuY0d4WWFhdEtoOHVRZVpsZWFMUnhHZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndyU2RCTWs1K1h5OGd6WU1FTUd1eDNDTDhSb0tMUWd4T1owbHF0dEh6RkRjUVB5bHZ4aEJIalQ0aGVQQVkyNEVmRVBPVEo5S0gxdkk1d1BvUzd4Tmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJEZmJjbDY4dnpZVVdnaVVYdlkrcEd5SVI2U1JKVlV5QlZITllJdkhZa3pvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFV2ZxSEswTVFfYWJhblRoU1FURnFRIiwicGhvbmVJZCI6IjcxOGQ4ZTA1LWYzNGMtNDA5Mi04ZmEzLTI0ZGYwOThiMTZjYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2dlpLbGUyRG9BSGNkMEVidDNVWFd3ZldtZ1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWROa2NPc1l5K216cFFaOVBYTFRNWEJRcGVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFBQUZQTUdTIiwibWUiOnsiaWQiOiIyMzQ3MDcxMTQ3MTIzOjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2YXYqtis2LEg2KXZitiz2YogSXNzeSBTdG9yZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmFFaG53UStwVGt2d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib0hrNC8zWVFrV096STloaGNBQ3hBTVVvVEQ5eWlGajNUa09WemFQU2JEdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibm4zUXBsUDBBUWxLRC9DdnVrUFgrcDBoODlUd2ZkaWpoVkRsc2wwZEQ4NUthbG1ZWHhqbUIwckVWdlVCSW1xMlNGTU9pcWpFN1hkTW90N0M0ZHU2QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlFpTG5NellMakJFeEtBazNRZlhzMjl6cmJQNHpJb1hUbFV3K0xOZjJuZFQvVXFhcUpSL2k5cFhXUDRIK2VZWlJMZ2ZuZUJJc3RwcUZ3bnNHQ2p3R2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA3MTE0NzEyMzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFCNU9QOTJFSkZqc3lQWVlYQUFzUURGS0V3L2NvaFk5MDVEbGMyajBtdzgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQzNzQ0MDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRkF3In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
