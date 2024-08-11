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


global.devs = "923184474176" // Developer Contact
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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_12_08_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicm9CRzFKcW5YcGJqUjFidy8rNk1MSnE4OG5UYlg3Uk1VdE1tNEJ0dy93cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVVRNSmxKWl9SRkdGWFBXSkJOY3Zmd1wiLFxuICBcInBob25lSWRcIjogXCJiNmE2OTYzNC01YmE3LTRmMzAtYWVmMi1jMTlkOWQ2YmQyMWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA0MixcbiAgICAgIDIzOCxcbiAgICAgIDQ0LFxuICAgICAgMTY2LFxuICAgICAgMjAxLFxuICAgICAgOTQsXG4gICAgICAxODYsXG4gICAgICA1NCxcbiAgICAgIDQ5LFxuICAgICAgOTIsXG4gICAgICAxNjUsXG4gICAgICA0NCxcbiAgICAgIDEyMSxcbiAgICAgIDE1NSxcbiAgICAgIDIzNSxcbiAgICAgIDE1MixcbiAgICAgIDAsXG4gICAgICAxNTgsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMTg5LFxuICAgICAgMjA0LFxuICAgICAgMjIzLFxuICAgICAgMTk3LFxuICAgICAgNzksXG4gICAgICAyMDIsXG4gICAgICAxMyxcbiAgICAgIDE4NCxcbiAgICAgIDE1MSxcbiAgICAgIDE0LFxuICAgICAgMTQsXG4gICAgICAzOCxcbiAgICAgIDEzNSxcbiAgICAgIDUsXG4gICAgICAxMjAsXG4gICAgICAxMjIsXG4gICAgICAxLFxuICAgICAgODEsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYM1kxR01GQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDU1OTg4Njg3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTg0Mzc5NDMwNTQ0MDQ6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHZKNDlnREVOdUE0clVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnODhuVVZCd01GeEFnNHRqcUZ0ZGE5MEs0eEVIc1VRNzgzMytFbEpaVEhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkY4NFRsblpYRzh1Vk50N3lyaDZPdjIxZ2prV0pnVStXdWs2TzFINjNicERldUpFWnd6dDlhVDEvL1ErcWtqMXJlaFhGMzJvdFpPMmF2TzNnbVJKeUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJNZERXdDMwc1NYd1ZZTW1tUkRicGRER24waGlERlN4cE9odUk5V0VJTWZySHpjUXlrZ2ZpWUV4YXpIYzdaRVZBSTBxVkJEOS9UZWdCbkpyUUQ2UGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ1NTk4ODY4NzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMzY3NTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHptXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIem0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsbmJyUEhFMWNBdEhGMmdDNWNQMFk3dG5GeitBRU5MNld2N2Q3QU5JMHZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5MTQ4NzIyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
