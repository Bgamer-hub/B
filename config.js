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
global.gurl  =process.env.GURL  || "https://wa.me/message/E3WLNO4GSPOHA1";
global.website=process.env.GURL || "https://wa.me/message/E3WLNO4GSPOHA1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_26_08_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQM0orM1U0bWhURk1MaXJNaVZOZHc5SG80c3E5dFluWGhVZXBuK3ZSQWY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzRnlNSlk5bFFMdWdOUWo2cmx5OVBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmMzk5Y2NhLWM4YjUtNDUxNC1iNWE0LTgwMTAwMzQ2NGQwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAzMyxcbiAgICAgIDE0NCxcbiAgICAgIDQsXG4gICAgICAyMjAsXG4gICAgICAyNTMsXG4gICAgICAzNixcbiAgICAgIDQ0LFxuICAgICAgMjM5LFxuICAgICAgMjQyLFxuICAgICAgMTI2LFxuICAgICAgMjI1LFxuICAgICAgMjYsXG4gICAgICA4MyxcbiAgICAgIDI0NCxcbiAgICAgIDQ4LFxuICAgICAgNjMsXG4gICAgICAyMjksXG4gICAgICAxNCxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxNTcsXG4gICAgICAxMTYsXG4gICAgICAxMzUsXG4gICAgICAxMDYsXG4gICAgICAxNDAsXG4gICAgICAxMjMsXG4gICAgICAxODMsXG4gICAgICA3OSxcbiAgICAgIDE5MyxcbiAgICAgIDQ1LFxuICAgICAgMjQzLFxuICAgICAgNzksXG4gICAgICAyOSxcbiAgICAgIDg4LFxuICAgICAgMjI1LFxuICAgICAgODUsXG4gICAgICAyMzYsXG4gICAgICAxNTgsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTlKOU1MQVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk5MjI2NzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdFTlRMRSBGVU5EU1wiLFxuICAgIFwibGlkXCI6IFwiMjgwNzkyNTYzNDk5MTI5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEQvNzQ0REVLT04zclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoZks0R2Z2TEdqS0ZKNWRPVVEvR3JGUjQ3T2ZwSnIvOWFBZmt6WC9sSW1jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNEQVZ3NGlXei9tTkd6QWp1cUpDMGdxYmxMOXNZSmFGUk0yenJHRk9hMTFHb3QyWFNkVmZmcVVWc2o2UTFCM3JHQ0Q2K3NoWVdqSG1zOWprbDNQT0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlzMlJlZWNzQnltSjlTMk9Ud0haZ1BpNEN6SXJTUW1qNHUxUTNvU3h5Z0tTc1ZkdUNHNVdqQUEyUDRPYy84SkROQXRQOUlKdUtsa1dTYmdqMkhib0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk5MjI2NzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzMwMzU5MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "garri-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "garri",


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
