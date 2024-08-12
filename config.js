const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "
" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_08_31_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVjhGbG1LNGkwZmptK0pVckJqcTNvc01XNlNISnlhUFpBVE5FMm1tTldiYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDNCek1VOEpRUmUxVkpVNDJzTHJUZ1wiLFxuICBcInBob25lSWRcIjogXCJhNGEzN2U4MC1iMTZiLTQzMzUtOTQ5NC1jMWU5MmUzMWFjNWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMjMzLFxuICAgICAgMTIzLFxuICAgICAgMTE5LFxuICAgICAgMjU1LFxuICAgICAgMTI3LFxuICAgICAgMTA4LFxuICAgICAgMTYxLFxuICAgICAgMjEsXG4gICAgICAxMTMsXG4gICAgICA5MyxcbiAgICAgIDExNSxcbiAgICAgIDM3LFxuICAgICAgMTksXG4gICAgICA2MSxcbiAgICAgIDgsXG4gICAgICAyMDgsXG4gICAgICAxMTksXG4gICAgICA3NCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMjU1LFxuICAgICAgMjEsXG4gICAgICA4NyxcbiAgICAgIDc5LFxuICAgICAgMTY2LFxuICAgICAgOTAsXG4gICAgICA5OSxcbiAgICAgIDIxMCxcbiAgICAgIDE2NyxcbiAgICAgIDE2MyxcbiAgICAgIDc1LFxuICAgICAgMjQ0LFxuICAgICAgMTAwLFxuICAgICAgMTQ5LFxuICAgICAgMTI5LFxuICAgICAgMTg2LFxuICAgICAgNDgsXG4gICAgICA4MixcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFlLTk5QVlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE3ODI4NTkyMzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzY0NTU5MDkzMDYzODQ6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJLzFpVW9RejVEbnRRWVlCaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInIxTWhTQ3BZdi9EOGtHRUp1MkNZc2ZlNExTOTdtcDN4UTg4QSttWW9zbEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVkhRME5HRGxsU1R2L2cvcjk1MG9mOFpoTHdGdlFWWmp6TnNNWmwwS0drM1ZUSjdYcWFpa3hZYkFSZ0ZqajAvb3ltWVB0a2M2UDZUQ2Y4VkRITnlsQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWdCSnpsVGsyWGVwQ1lIWGR3bVNackxFNzZPUUxJY1RLT2FyOXc3K3JNZERwei9TV0tMZ2V2NVAzeE5iQ2F6eXNqZ1JyQUNrWVIwVGtKUEl3TWZuREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTc4Mjg1OTIzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzQ1MTQ3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZHalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkdqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEVLMzJSYXhZOWlQMU9nQnVKSnpyMUoyZUdzaVVuZ2d5c1dYUTg2ODRacz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTUzNTE2OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzQ0NDA5MzA3MFwifSIKfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.4.0",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
