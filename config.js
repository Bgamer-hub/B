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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_53_08_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICA1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyLFxuICAgICAgICAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MixcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMR0UwMGwzVHJQSldjdGg2WHlTS01ONXVHR2sraEZob3l2OGU3bDBuOU1JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2Z2lZLTE1R1F0T21oU29GVHJTbWxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2ZDQ3MGI4LWY4MTktNDc4OS05ZmRhLTg0ZDVjYTBmY2JlZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxNDYsXG4gICAgICA4NCxcbiAgICAgIDE0MyxcbiAgICAgIDE4MyxcbiAgICAgIDE3MyxcbiAgICAgIDI0OCxcbiAgICAgIDIxNSxcbiAgICAgIDc0LFxuICAgICAgMTQzLFxuICAgICAgMjcsXG4gICAgICAxMjIsXG4gICAgICAyNDUsXG4gICAgICAxNDcsXG4gICAgICAxMzksXG4gICAgICAyMzgsXG4gICAgICAxNjcsXG4gICAgICAyMDIsXG4gICAgICA0OCxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxMjAsXG4gICAgICAyMTAsXG4gICAgICAyNyxcbiAgICAgIDI1MyxcbiAgICAgIDI0MyxcbiAgICAgIDcsXG4gICAgICAzOSxcbiAgICAgIDM0LFxuICAgICAgMTg1LFxuICAgICAgMjM5LFxuICAgICAgMjEwLFxuICAgICAgMjExLFxuICAgICAgMjYsXG4gICAgICAyMDgsXG4gICAgICAyMCxcbiAgICAgIDc1LFxuICAgICAgMzcsXG4gICAgICAxMSxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdIVEpCUFJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE0MjM4ODA0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR3JhbmRwYSBDeXJpbFwiLFxuICAgIFwibGlkXCI6IFwiMTAwNDUxMDEzODg2MDkwOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEMGpQVUZFS1BNNHJVR0dBNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMEdlME5jUlhPWmdhT3RzcnJ5YW5YTkVSeVBKcWE0VGhOakphWGp3dGt3UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4dGdRVk83djQ0OEFaU0NMbmJEU21DVmlWV1hXMS9MbVZvT0ZKMWsvaGdvTmQrYm84dmFrUHZyRjhXT2lPRlMwR29XZTZhNDFpWXExSGNwdFlrbkJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHTGk5TmROK0trY2ZRZGUvU2xkb2tYejVqWGRWaCt6Q2lVY2hRMEszSDVzVnR3Qi9FTzNtWGQ0OVFHV0lvT2J6Z2kra3JMQ3pVTTE5cHByQjhMeThCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE0MjM4ODA0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzM3NzE5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUcvblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRy9uLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
