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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923186587796";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923186587796";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923186587796,923186587796";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_38_08_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDczLFxuICAgICAgICA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI2LFxuICAgICAgICA2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidVJYSEdKa085Y2RHZ1ZPbzBSemEyQXpsK3FtOUtXckcrZFA5c1UyTnVwYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicFkxaEpjdWlSejIxNkVCazVxNndEUVwiLFxuICBcInBob25lSWRcIjogXCI3N2NlMDE4MS0wMGEwLTRlOWUtOGFkMy03MTZmYmViMjFiNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxMTAsXG4gICAgICAyMzEsXG4gICAgICAyMDUsXG4gICAgICAxMDksXG4gICAgICA3NixcbiAgICAgIDE4NyxcbiAgICAgIDUzLFxuICAgICAgMTI1LFxuICAgICAgMjU1LFxuICAgICAgMjcsXG4gICAgICAyMjEsXG4gICAgICAxMzUsXG4gICAgICAyMjIsXG4gICAgICAxNTQsXG4gICAgICAxNTEsXG4gICAgICAxOSxcbiAgICAgIDE4MSxcbiAgICAgIDY5LFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDI0NyxcbiAgICAgIDE5MSxcbiAgICAgIDE2NixcbiAgICAgIDIwNyxcbiAgICAgIDE4OCxcbiAgICAgIDUzLFxuICAgICAgMjQ4LFxuICAgICAgMjI4LFxuICAgICAgODcsXG4gICAgICAxNjIsXG4gICAgICAzMixcbiAgICAgIDE4MCxcbiAgICAgIDksXG4gICAgICAxNjAsXG4gICAgICAyMixcbiAgICAgIDIzMSxcbiAgICAgIDIxMyxcbiAgICAgIDU2LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZWV0MxR0RKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNjg2MjcxMTg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIXwnZCA8J2Qk/CdkIhcIixcbiAgICBcImxpZFwiOiBcIjIwNTk1NzA1MzM0MTczMjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05MTXFab0RFT0NTM3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZWRhUitsdTZVWFJ0RDBiQm5KcndFZ3BMVzR1SHdqZTRPcmQzZ2w5clBYbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmQlpQNEh2aUo3WkJUVzA0bksvbGdKSHBkaDE0UHNmMHJSNU9KQ1dldENWVDJrVVA2THVhWnZVYWZaMWg2bDhEcXkxdjBrY0ZKU0lqN1NTNjQyLzBCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGUnp6VEZPakNNeWFiRkJoVUpQWFNMTGwxYU9ZOFFFZzU1aXlERzhFbWQ1amxFbkFzSkMzZkU1MkVYSU1SQlp3U3VqZkcvL2VIeEc3dXF5ZkdqZzJpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNjg2MjcxMTg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzMwNDI5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB6VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHpVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOHdHeGhRblBCMlZhb2xjNENkcU1XTmpNUEhyRUpZeW05Rk0rejBzMkdzVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjA1MTM4NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMzMDM4MjY2ODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.4.0",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "NOBITA",
  ownername:process.env.OWNER_NAME|| "NOBITA",


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
