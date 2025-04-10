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
global.sudo = process.env.SUDO || "2348164793611";
global.owner = process.env.OWNER_NUMBER || "2348164793611";
global.style = process.env.STYLE || "1";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUp5RUpUVW9xMjI3cFA3ai9LNlF2cGx2NVlTb29pcXpOQStqWkYyZG9rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnBWdkFKREJ5WFo0Vk5HekxvNnBiaG92emFQb3FmTWtBUHZIbGVWUXhGaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQndiZlRQTVU5cFc1aFoyNnliOTM5b3dlSS9WcWIvWE5zbjM0VlZQZW5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1ZitISW9oOUJOYU1hUHZCRk4zTWh3TmJxOHFSeDNOaTIvTlNDUHNhZ1R3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEMkdRRXEwS0Nia1p0ZG9ZR0UwMHhtU1dCaU1iZkJjYTRObWs1YXFxRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBvN1ZlNXpTZWpVVHNPU2l5cEZaM0N4a2d0VlhjMXFxb2lhSXM5RS8xVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkI1WWRzVTJHR1ZXYVJuUktySHRKZkw0a2lxTEwybHJNQTJtbzBFSnhrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWpiRWR0aGhtYjdqdW9PUTl3OHRnQkhjVlBkNW5Cbk5vRjQrbzFCR2xCOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA5V2VJNkEzTWpmaGpnK0hWaVNWeDJwejE2MzJYbVlPZDRqZnY2a3N6RjY0cFZjbEZBcFF4L1AxbWNWR05HTytldWpoVkdjZnFDUjBKSHovWVNyVGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6Im1HTWZDZDdyRU1Pem1YZU5mZmNRU0VLUkVxZVAweHRMdlNESWEzTzREbkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE2NDc5MzYxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMUM3QkJFNTlGNDUwREVFNzFCMzEzN0QzNDg4MTM0QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0MzI0NTY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTY0NzkzNjExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZDRDI4QThERjQyNDk4M0ZDREJBQ0E3Q0NGOTg1NTdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQzMjQ1NjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImRvQTlUVVRZUkVtV0k4RG5sYzVOdEEiLCJwaG9uZUlkIjoiMTA3OGMyY2MtNjg5OS00ZmMzLWIwNmQtN2Y4Mzg3Y2Y2YTg3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhJRlErSDVGajYrN0VnV2dKSkpWekJ1M251ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQNXdIajQ0SEdKUVNMSlN1Si9vdjJ4RWJBbjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjNMSzFBMjIiLCJtZSI6eyJpZCI6IjIzNDgxNjQ3OTM2MTE6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKb3NodWEuTyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSitVbjlVQ0VNU1A0YjhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieEloT2hkZTVFN1pyQnE5bjVkSHV5R2U4V2JmMjRXdEt6VmpnVzVEUUNYZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYkF0VWp3OWRlZjFVeHcxOW8zZzByT2FrRUlUSHZEVkpJZ2RPSkVoNzZGYkhmeG5CVXZIWnN3d0NPWmJaaGVrUG1XZCs5aTI0ci9PUXJ3Vml1N0hnQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkgrSmNpZlNHRGl6a0xOelJMZGtkT01iQms2M2RjbUl1cllZRkd6enpJeFBidFZ5MjAzTUJYU3RRL3pyb1JjTEFwZDZSMFBuaFNNMlVUNGNzZ2RHdmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE2NDc5MzYxMTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNTSVRvWFh1Uk8yYXdhdlorWFI3c2hudkZtMzl1RnJTczFZNEZ1UTBBbDQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQzMjQ1NjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlIxIn0="
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
