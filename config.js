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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GOyG2XOTpd04WQmef6nTBo";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajlsczC1FuEGnm8cb2R" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ba13242573cea18ca915a.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚩𝐘 𝐒𝚮𝐔𝚩𝚮𝚫𝚳 𝐒𝚰𝚪" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "916260273863";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916260273863";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/df0f6a5d4bffa2f4d017f.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_50_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYXpBRjYrbU96WHJXWHFKYXZtZG5aTGVlRllkOTNoRjg4MHhpVGRmTlp1cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYyNjAyNzM4NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdENjlFM0E2NDAxMTRGRUY5ODhEQUIyRTdDMTVCNjE3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY0NjIyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnRG1FU3pEdlI3R0NFNGRISHQtaFhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiYjBlMmZhLTE4MWEtNDdkNi1iZGY3LTlhOWYzYjMwY2UwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgNzAsXG4gICAgICAxNzAsXG4gICAgICAyMTEsXG4gICAgICAyNSxcbiAgICAgIDgzLFxuICAgICAgOTUsXG4gICAgICA3NixcbiAgICAgIDE1OCxcbiAgICAgIDgzLFxuICAgICAgMTkwLFxuICAgICAgMTA3LFxuICAgICAgMjcsXG4gICAgICAxNzMsXG4gICAgICAzNSxcbiAgICAgIDE4NSxcbiAgICAgIDM2LFxuICAgICAgMjU1LFxuICAgICAgNjQsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICA5NyxcbiAgICAgIDU5LFxuICAgICAgMTU2LFxuICAgICAgMTUzLFxuICAgICAgMjE0LFxuICAgICAgNjgsXG4gICAgICAxMzYsXG4gICAgICAyNyxcbiAgICAgIDUyLFxuICAgICAgMTUwLFxuICAgICAgMTMyLFxuICAgICAgMjcsXG4gICAgICAxNzUsXG4gICAgICAyMzcsXG4gICAgICAzNixcbiAgICAgIDE2NSxcbiAgICAgIDE3NixcbiAgICAgIDIwNSxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko4WVk1SzhDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyNjAyNzM4NjM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZqz8J2aqiDwnZCS8J2arvCdkJTwnZqp8J2arvCdmqvwnZqzIPCdkIrwnZCU8J2as/CdmqvwnZqqXCIsXG4gICAgXCJsaWRcIjogXCI2Mjg2MTMyNTkxNDM0MTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS0I0UFFERU1iOXRiVUdHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFXM0FiSzlYYzU1dlBWMi91ZHZEaDJMMFpJSVdzRUJLbndBOExKOEpuMFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnI2Ykl1eVVBdVZoL0N3VVRlYXcybXlMaDBrd2FLN3RJeGxCcXlLTU1rOE5WZzlzbUxtRnE3Nkp5bHNUTFNwbUxUL01BRWs5QUVGQklOZ2lFblVxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUzNQQVBMc1FqZy9LNWJuVktweGVhalJEUExFNnlwMG1vbWdFWmJ1Z0FhQ3BESmRXSU9wUzIrTzdtaXJXMnk1Y3JNaHBrUXkyazhDTmpUbFFjM2ZmQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjYwMjczODYzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NDYyMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZ2dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFnZy5qc29uIjogIntcImtleURhdGFcIjpcIlJCMXg1STNCRlhwY25LY3JLYWpoQU53bFVuRWxwdXQ1ZG10RjhyRHNCNjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1MDE0ODk5NCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝚩𝐘 𝐒𝚮𝐔𝚩𝚮𝚫𝚳 𝐒𝚰𝚪" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝚳𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳",
  packname: process.env.PACK_NAME || "𝚳𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳",
  botname : process.env.BOT_NAME  || "𝚳𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳",
  ownername:process.env.OWNER_NAME|| "𝚳𝐒𝚪 𝐒𝚮𝐔𝚩𝚮𝚫𝚳",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "7ynNoFpGkoECjBmnkq3SxcVc",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
