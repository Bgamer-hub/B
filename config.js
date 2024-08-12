noconst fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94751512472";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_15_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyLFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDgwLFxuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicTZvb2dhTVZleGI3L3prZzFGTmFWc25nWm1WOTEvYllWTjN6QW4rK0l2UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGNhaUV1MC1TOEM1dXF6aThxNGtDZ1wiLFxuICBcInBob25lSWRcIjogXCIxOWQyZDVkYi1hYTJmLTQ0YTItYjU0MC1iOTgwMGU2ODcwMmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAxNDEsXG4gICAgICA4MixcbiAgICAgIDIxNixcbiAgICAgIDM4LFxuICAgICAgMTAzLFxuICAgICAgMjM1LFxuICAgICAgMTIxLFxuICAgICAgNTYsXG4gICAgICA0NyxcbiAgICAgIDIwOSxcbiAgICAgIDM0LFxuICAgICAgMTE1LFxuICAgICAgMjQzLFxuICAgICAgNzYsXG4gICAgICAyMjgsXG4gICAgICA4MixcbiAgICAgIDk5LFxuICAgICAgNTEsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgNTEsXG4gICAgICA2LFxuICAgICAgMCxcbiAgICAgIDE1MyxcbiAgICAgIDE0OCxcbiAgICAgIDY2LFxuICAgICAgMCxcbiAgICAgIDEwOSxcbiAgICAgIDE3LFxuICAgICAgMTksXG4gICAgICAyMzksXG4gICAgICAyMjIsXG4gICAgICAxMTAsXG4gICAgICAyMjAsXG4gICAgICAyMzUsXG4gICAgICAxNDUsXG4gICAgICAxMTYsXG4gICAgICAyMixcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA4MTY0OUhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1MTUxMjQ3Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTkyMjQyNTc1OTc1NDE6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaUluY1FDRU1mZDU3VUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxzR0V3ZjRHVVlWa0Ruc3J6NXRXNzFHY284TzZHZEp3TnhnMDhDWE1GVGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlNMbXpMTHhTVjlkVkMvYy8rVWJUZzBSYWhMcDZXdVMwa2Q3Ykk5OE16ZjFuK1pUVzNXTWFqTHZMNVdWSVdUMU9JWFdKWGNxeStUeGNCTlpxOHk1RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiKzR1TGhLVm96THZjUDVWbWx0a0NLNlRSK2JyRmxFaVIwOVVnKzFvZXBHU1BJdm5yZXNJeDh4b0ZSNTRmUk4vRmdxK2RkcGlKR1ZXTlF5SVl0d1pBanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTE1MTI0NzI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM0NjEzMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNjNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc2My5qc29uIjogIntcImtleURhdGFcIjpcImxvTk9ON3hXQ2l1VnZMc2JGRlRvUm9vT01QWjFGWCs4Vnp0UjRyWnQzWnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njc5OTUzNTI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI5MzAyODM2MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.4.0",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Mr Chamma",
  packname: process.env.PACK_NAME || "Chamma",
  botname : process.env.BOT_NAME  || "Mr Chamod",
  ownername:process.env.OWNER_NAME|| "Nethmi",


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
