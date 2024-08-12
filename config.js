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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918513039675";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,918513039675";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,918513039675;
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,918513039675";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_19_08_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmVjVU0vR05xSVVMakszeWlJR2xhOThvN1J0djl2c0RwbWVockRIT0Zjcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDdpNEZpc0NSR1MzWm9lN3BvbkRtd1wiLFxuICBcInBob25lSWRcIjogXCJkNzJiNWExNC00MWYyLTRiOWYtYmU0Yi1hMzE2ZDc3MmVkNjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxMDAsXG4gICAgICAyNSxcbiAgICAgIDE5MixcbiAgICAgIDYzLFxuICAgICAgODksXG4gICAgICA0NixcbiAgICAgIDE0MyxcbiAgICAgIDE4MSxcbiAgICAgIDEwMSxcbiAgICAgIDIzNCxcbiAgICAgIDEzNCxcbiAgICAgIDEwNyxcbiAgICAgIDIwMixcbiAgICAgIDIwMyxcbiAgICAgIDg0LFxuICAgICAgMjQ4LFxuICAgICAgMTIsXG4gICAgICAxNDIsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTI1LFxuICAgICAgMTQ0LFxuICAgICAgMjMzLFxuICAgICAgMTQ4LFxuICAgICAgNjksXG4gICAgICAyNCxcbiAgICAgIDE2OCxcbiAgICAgIDE4NyxcbiAgICAgIDI0OSxcbiAgICAgIDE0NSxcbiAgICAgIDYsXG4gICAgICA2MSxcbiAgICAgIDE0MCxcbiAgICAgIDM3LFxuICAgICAgMTI1LFxuICAgICAgMTQ2LFxuICAgICAgMTA1LFxuICAgICAgNTUsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkhWUzJEV0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODUxMzAzOTY3NTo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEwNjczMjAzODIyODQ1OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05LdzQ2TUhFSWV0NDdVR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRjFkSTJQNlZ2S2lRY2FzWEpwbjl3VVpMcnJBMUY3NGV0UE8yUG4ySmZqTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxdnpwOG5qNGFKSDhRckVXOVFkam5qU3kySFNsbnliY0pQSGU4QU9ZQVJWNkdiZGpDamlMdy9QRXhrUkJOYXZVck5qMG1sSlZ0bVNNZk5FK0FQVllDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWL0E2RDV4dUEwWTcxNDZUT0duV1lSVmx6TlljaTRXS0hVSnp6SDgxVFIrTzIvQ1MxcXl3Y0lpRHY3Y0NFSkpPLzJ4OGE2cDVQMjIwUmZ4OUNodU5oQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg1MTMwMzk2NzU6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMzODk1NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKelVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp6VS5qc29uIjogIntcImtleURhdGFcIjpcIjBhdkZ2c0NpQkxJejBtclZKZXBKWGhvMEs0dm51aWpKb1JQaTZlZTBZeEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NDA3Njc1NCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.4.0",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " __𓆩❤‍🔥. ⃢⃝❥︎ S U N N Y🥵𒃺",
  ownername:process.env.OWNER_NAME|| "__𓆩❤‍🔥. ⃢⃝❥︎ S U N N Y🥵𒃺",


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
