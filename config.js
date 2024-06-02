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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923498279596";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_20_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJvZW1sZjgyWHpJYTgvR3JqMWpVbmZ6WjFRRzVVRTM5d2dRSndLMFAwOEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzA1MzQ4NzI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwODhDQUVBRjk1MTk2MDNERjBGQkFGQjlGOTEyRUEzRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTczNDUyMzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1JQN3ZlNXFSRGU2azRsVWdlX0w1UVwiLFxuICBcInBob25lSWRcIjogXCIyN2NhNzM2OC1hYjRhLTQ2ZTAtYmJhZi03OGMwYmYwZjk0M2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDE2MyxcbiAgICAgIDM3LFxuICAgICAgNzMsXG4gICAgICAyMCxcbiAgICAgIDU5LFxuICAgICAgMzksXG4gICAgICAxMDIsXG4gICAgICAyNDMsXG4gICAgICAxNDYsXG4gICAgICAxMzcsXG4gICAgICAxLFxuICAgICAgMTM3LFxuICAgICAgMTg3LFxuICAgICAgNjYsXG4gICAgICAyNyxcbiAgICAgIDE0NCxcbiAgICAgIDI0MCxcbiAgICAgIDE4MixcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDE2MixcbiAgICAgIDEzNixcbiAgICAgIDE3MyxcbiAgICAgIDIwOCxcbiAgICAgIDQxLFxuICAgICAgMTE2LFxuICAgICAgNCxcbiAgICAgIDExMixcbiAgICAgIDExMixcbiAgICAgIDExLFxuICAgICAgODAsXG4gICAgICAxNyxcbiAgICAgIDEyMixcbiAgICAgIDI0OSxcbiAgICAgIDIwOCxcbiAgICAgIDk3LFxuICAgICAgMTgyLFxuICAgICAgOTcsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMThYVkQyTjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwNTM0ODcyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzQ3NjAzMzkwNTQ0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2E2K1lFQkVNcTM4cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsOVpDWUtUN2FhREZMdmFUSGJxaWpRSDdYbkhpSC8xVTd3NmwvbnR4bjJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkV2ak40enBpNm9JTkNKd1JtRThlTDVMQkJ5MmFkYUhHM3IydmtJUENQaDV5NVdxTXQvQ0RMbElzdHE5UEpZY0tkZ1Q0YjYzMVFSMHJCQktvdEpzSURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJkdG45dmFOV2hnNUJZd2hINWIyc3QwaTR5ZHo3c0hoSVVtS3ltZTgvMFV4U3lZYVd6a3NncXZldDkzT3pwdUVKQUFXUmlVUjQrR0ZYOVNoUXY0cmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwNTM0ODcyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTczNDUyMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFSytcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVLKy5qc29uIjogIntcImtleURhdGFcIjpcIkVFWWF5VlNVY2x2Si9OaENSS3l5VkN5dWNhV0E1OXFtUkFwYytpN2FKcFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcyNTIyNTM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTczNDUyMjk1NjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
