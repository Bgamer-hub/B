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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_08_21_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMenMwNEtCSFg2TnF0b01SRW1oMVdwUlZkUFcxN3dIZVdvd211WHlrYy9NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMyMzI2NDA0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUYyRjVDQTVERjhENURCRTQ1MzUwQzdFQzEwODFBRjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzNDUwODc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzIzMjY0MDQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NEQ4QzlCMDdGOTAyRUZBREI4MTgwQkE2QTQwNTVBNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjM0NTA4ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRzNqNmwxMlFTSXVuMGhnMTQ1NW9OZ1wiLFxuICBcInBob25lSWRcIjogXCIzNTYyN2FiOC1jMWUxLTQ1MjAtYjVhMC1kZWE2OWEzZDgxODNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyLFxuICAgICAgMTM1LFxuICAgICAgMjA4LFxuICAgICAgMTk4LFxuICAgICAgMTExLFxuICAgICAgMTM2LFxuICAgICAgMTQ1LFxuICAgICAgMjA5LFxuICAgICAgMTcsXG4gICAgICAyNDcsXG4gICAgICA5NyxcbiAgICAgIDIzNCxcbiAgICAgIDEzMCxcbiAgICAgIDExLFxuICAgICAgMjEyLFxuICAgICAgNzAsXG4gICAgICAxNixcbiAgICAgIDE1LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDEzNixcbiAgICAgIDEzMyxcbiAgICAgIDI1MSxcbiAgICAgIDE4NSxcbiAgICAgIDExMSxcbiAgICAgIDI4LFxuICAgICAgMjI3LFxuICAgICAgMTMyLFxuICAgICAgMjQ2LFxuICAgICAgMjUxLFxuICAgICAgNDIsXG4gICAgICA1LFxuICAgICAgMTMsXG4gICAgICAxNTQsXG4gICAgICAyMTAsXG4gICAgICAyNDksXG4gICAgICAyMTEsXG4gICAgICAyMjMsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1o5QTZZQzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMyMzI2NDA0Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTMxMTEyNzkyNDg4Mzo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKdjeKPpOKAjOKYoO+4j+KXj/CdkJLwnZCH8J2QgPCdkIfgoKvqr63wnZCZ8J2QgPCdkIPwnZCA8JOGqSDig53ig6rwnZi98J2ZivCdmZTinZzwnYa86q+tXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTN5N3FJRUVQaUw1N1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGTW5QbVMrSk5BdG5yODFoQzV5a3hJYXFTUjUzbHdIZVB0UzlwV2NEdWx3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtJVTZ3b1lKSk9kayt1a1FkRzU4akhIVzlGd3ZQbHllOVNxdENaUE44dEwvemhwblFIRmRwYzBJdFVHbVVJRGQ4dmxnc25JNU40RnV2OTU5aVlvdUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkcyNUJkQi94VXNkMlRVV3psWVRhNGVnZlNJRTlGVlZIc0ZZUHZKY0tNVlFlQ25tWUN5Zy9uVkE3dGxDUGxsbmExbDlLb3lCMFFXdXUxWmVDajkxK2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMyMzI2NDA0Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzQ1MDg3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJTSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlNJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnRLUVdWMzd3NXplNExRTXhiTFRTclpuZHZjZWxnYUUvbjl0TXRRcG1rRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTQ2ODYxOTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM0NDYzMTM4NjBcIn0iCn0=|  ""  // PUT your SESSION_ID 


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
