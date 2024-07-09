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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_24_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICA2MixcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ0FrRjIwTjdiNXc0bmt1bGNOdzFoSmtsRExBSDd3cWZoU1BMWkhIRitWWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MTE0MDYyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDM4MDNDMkU1MUVBMDdGQkQxQjgwQjYzOTNDQjhCRUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDg4MjgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJIamk3b29uUlh5Mlh2UGNacFI3aUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTNlYjg5M2UtM2UwYy00MjRkLTgyMWQtMTZhYTk3M2ExNmNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDE3NixcbiAgICAgIDE5NixcbiAgICAgIDE2MixcbiAgICAgIDE1MSxcbiAgICAgIDU4LFxuICAgICAgMjE4LFxuICAgICAgNDksXG4gICAgICAyNDQsXG4gICAgICAyNTIsXG4gICAgICA5OSxcbiAgICAgIDE3NixcbiAgICAgIDY0LFxuICAgICAgMTE3LFxuICAgICAgMTc4LFxuICAgICAgMzksXG4gICAgICA4NixcbiAgICAgIDIzNyxcbiAgICAgIDEzNyxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAyMzYsXG4gICAgICAyMjksXG4gICAgICAyMjcsXG4gICAgICAyNixcbiAgICAgIDIwLFxuICAgICAgMjE1LFxuICAgICAgNjQsXG4gICAgICAxOTYsXG4gICAgICAyMTMsXG4gICAgICAxMzQsXG4gICAgICAxNjcsXG4gICAgICAxOSxcbiAgICAgIDE1MyxcbiAgICAgIDExMSxcbiAgICAgIDY4LFxuICAgICAgMTIwLFxuICAgICAgMTAxLFxuICAgICAgMjIxLFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE1Nk4xU1Q1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MTE0MDYyMDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmYLwnZmD8J2ZivCdmY7wnZmPXCIsXG4gICAgXCJsaWRcIjogXCIyNDIyNDkwOTA3NDQ0Mzc6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXV2ckxVREVNK2lzclFHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkV3JFRVo0d1hHcEZ1cnArczYvbm5vdXdLTXh2Q01NMDljQzdRMkdTcjBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFOa0djUmdIRTVOS3d0QUhRL0FqSkp6SnV4NTRoRFBGd0ZKSDRGeWV0NUI4RHFTNVZKdVVTSkc2MUhXalptdGpON3Y2T2FTM2oyZGt1VFgwL1ZoQUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRWNkEwREM3QzFRUHkwTHJrRFRWNzZiM294bzFyVWxDS2p2QmJXcnhVZ2lUSVdpazZMNG1ZZlVKV2NiWXk4S0ZPaHcyeGRzczBtNW1RajUydlJLc2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxMTQwNjIwOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ4ODI3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdSZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1JnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMWtsRitwVW1jTXZ1a1VuWDIxcjlqSy9ERmlodVE0c3FkYlZ1ODhiR3Ftbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTcxODIzNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
