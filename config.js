const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Kipkogeimeshack6@gmail.com"
global.location="Kapsabet,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/DJMESHK/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/DJMESHK/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY MESH-TECH" 


global.devs = "254707541188" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707541188";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254707541188,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_45_08_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgzLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYZHovK2dROHF0QnpmWUdPd3djTFE2amZDU055eHd5TVpGcFJwQkdTckc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfXzhqdW4tdFN3cUstN3FZUEpiUDBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0YzljNmZiLWQ5Y2QtNGNmYS1hMjFlLWEyOTlmODY2ODQwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAyMDYsXG4gICAgICA1MixcbiAgICAgIDIxNixcbiAgICAgIDE5OSxcbiAgICAgIDE5MyxcbiAgICAgIDUsXG4gICAgICA0NyxcbiAgICAgIDI1NCxcbiAgICAgIDIzMixcbiAgICAgIDkxLFxuICAgICAgMTM1LFxuICAgICAgMTEwLFxuICAgICAgNzEsXG4gICAgICAyMjgsXG4gICAgICA4MCxcbiAgICAgIDM1LFxuICAgICAgMTAsXG4gICAgICAwLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTc1LFxuICAgICAgMTQzLFxuICAgICAgMTI3LFxuICAgICAgMTU5LFxuICAgICAgMjI3LFxuICAgICAgMTkzLFxuICAgICAgMjIwLFxuICAgICAgMzEsXG4gICAgICAzNSxcbiAgICAgIDIzMCxcbiAgICAgIDI0OCxcbiAgICAgIDE5MyxcbiAgICAgIDEzMixcbiAgICAgIDIxOSxcbiAgICAgIDE2MixcbiAgICAgIDIxMyxcbiAgICAgIDIxOCxcbiAgICAgIDE2MCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTkFCUTJLN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA3NTQxMTg4OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc2MzIwNTY5OTYwNzc6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGVYMStFRUVOWGQzYlVHR0IwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6SjF2d2x3S043azhSSDFXNnRGV1pRMUdHTkM4TUJGSEI4QkI1amxib0hZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhPemJ3R0hDSUxVVyttd2JLRGlJSVNTUW9zbHRjMVFsbzgrdDZCZEE0UWJiS01iTVh3OHhGWmU0VVFnekhYamRXNTNWQjZQeWM1V3pBWWdzSktBY0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxqckVxTE82UmZka2FESEZWOHNINTRQbk1kZXM0K2htS3NJeDJucExibm1GZXA2cWRObmpSbmlSWGdkVVZDMTltdzFXSkVCVHBVWEpvNG9uUHJSTERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNzU0MTE4ODozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzI5NzQ5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9XZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1dkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.4.0",
  caption : global.caption || "*POWERED BY MESH*",
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MESH-TECH",
  ownername:process.env.OWNER_NAME|| "Mesh Ke",


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
