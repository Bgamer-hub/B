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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "byte;;;ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZU5hMldhUXZjR3B4UkJLRUtKcnpzUUZGU2pvSVdHMWh6Q0hlTWU2L3ZsOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmI4aU1DZENTWUNRc0tjRUx3Q0Nwd1wiLFxuICBcInBob25lSWRcIjogXCJmNGZjNTk3OC0yMmIyLTQ2YzgtODgyNi0wMGVhMDkzMDNmODdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMTQsXG4gICAgICAxOTMsXG4gICAgICA5NSxcbiAgICAgIDExNixcbiAgICAgIDEwNCxcbiAgICAgIDk0LFxuICAgICAgMjI1LFxuICAgICAgMTAzLFxuICAgICAgNixcbiAgICAgIDM4LFxuICAgICAgMTYsXG4gICAgICAxLFxuICAgICAgMjI1LFxuICAgICAgOTQsXG4gICAgICA2NSxcbiAgICAgIDQ4LFxuICAgICAgMjA5LFxuICAgICAgMTg5LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDIxNSxcbiAgICAgIDU2LFxuICAgICAgMTA5LFxuICAgICAgNTAsXG4gICAgICAzOSxcbiAgICAgIDUxLFxuICAgICAgMTUwLFxuICAgICAgMTUyLFxuICAgICAgOTUsXG4gICAgICAxMTMsXG4gICAgICAxNzcsXG4gICAgICAyOCxcbiAgICAgIDM4LFxuICAgICAgMTgsXG4gICAgICAyMixcbiAgICAgIDEwOCxcbiAgICAgIDEzOSxcbiAgICAgIDIxMixcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyRzZKNlJQN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE5NDYxMzI3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGVfQW5vbnltb3VzX0xlZ2lvbl9PbmVcIixcbiAgICBcImxpZFwiOiBcIjkxMDM2NTYzMDcxMDA0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVSL3JZR0VPVFc1YlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmbWxxcDd6YXZCNTRlOEFkaDY0Q0crRWVZMUxBclJSRS9PRitrWkZmK1dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInd5VkpZUkdITm8zajRZZHRreG5ocTNjVUhRZzhmOVNuRnBjS0xzdW1HNGJveWl3TzNQYzdTUHBOOUY0ekhvMlVpV0NIbVg5YXA3WlMxL0ZQRW5TQURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFMRjNaNk5xdGVTUzVpM1kzUFJWRlNkYXBYU2Jwc1NzTVJlNDk2VXhoM1BZdkVuK0dJT2thVzdmaHNEcUp2OVA5TWVGWkFDbmRDblVJK0NkQkxzaWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxOTQ2MTMyNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzMwNTM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXhLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBeEsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYQVY5MlNDNXE2M3lGSzBhVmtpT1pyRThHN3VTWURxZ3BxakxyMDNUeGdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MjU5MjU1OTUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTMxMDY0ODY3OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
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
