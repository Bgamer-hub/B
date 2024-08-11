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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_44_08_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI5LFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpdUo3YkZJQ1FaM0lFK0t2Qzk1Y0Jrc3laOFk0OVBqd3J1NjAvL1RUVlEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExMjU0MzUyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDE2NDhERjA3NUVBQTdDMTI1M0U5M0YyMzgzMzRCQzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMzE1NDYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklSM3FZMnAyVDh1SVZOVkp4RlNUaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ZjMGI4OGQtYTE0ZC00OWI1LThkMjYtZmFmMjBhOTM4MThmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTAyLFxuICAgICAgMjA4LFxuICAgICAgMjE4LFxuICAgICAgMTI2LFxuICAgICAgMjAzLFxuICAgICAgMjE0LFxuICAgICAgMjI0LFxuICAgICAgMTUwLFxuICAgICAgMzYsXG4gICAgICAxNTMsXG4gICAgICAxMzgsXG4gICAgICAxNjYsXG4gICAgICAyMjEsXG4gICAgICAzMSxcbiAgICAgIDE3NSxcbiAgICAgIDE1LFxuICAgICAgODIsXG4gICAgICAyNCxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICA2MyxcbiAgICAgIDEyMixcbiAgICAgIDk3LFxuICAgICAgMjQxLFxuICAgICAgOTAsXG4gICAgICAxNTksXG4gICAgICAxMDYsXG4gICAgICA0LFxuICAgICAgMTUsXG4gICAgICAxMDYsXG4gICAgICAxMTksXG4gICAgICAyNSxcbiAgICAgIDU3LFxuICAgICAgMTEsXG4gICAgICAxNzMsXG4gICAgICA1NSxcbiAgICAgIDI0OSxcbiAgICAgIDc5LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIksxVFpCQkdZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTI1NDM1MjQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5Njk3MjAxNTI3MjAzOToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTzAvYTRFRVAzcDNyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk8yeVFvOUR3eDlobHgrUkF3aEV2VlU0NmxpWXkrVUEra1Y5bmw2d2YxMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnhhSEN3L0pvNGtJR2ZUd0FDNDlwMFFTMTMzYmFzeEEweXZuV1V3RVBZM2FDNDlKY20rM1BCcXZCUWl2V3YyNFIzcDdMQWxWbnZtQ0FGMUtud1JEQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV3hUU0thV202Wm9iUzdBL25kVUI3NkRubEJkaDMyVXFrRkdtNmZRU1lhUXdjK09xUDNUWW94VWRvRDlIVTJGNHdueHdlenhMMHcrQkZTbmI4UmJYaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTEyNTQzNTI0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMzMTU0NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLaG5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtobi5qc29uIjogIntcImtleURhdGFcIjpcInZpeG5xR0s0eW52bTF4YVN5Z0p4aHZvN0tMN2EzSTR4U2lmeDM0QXVjVkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3MjI2NTUwNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzMxNTQwMTEzNVwifSIKfQ=="  // PUT your SESSION_ID 


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
