const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="eliakimkiplagat441@gmail.com"
global.location="kabsabet,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VablfKe9cDDZcDmkiN2G";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VablfKe9cDDZcDmkiN2G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ eliakimtech


global.devs = "254728705726" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728705726";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728705726,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_14_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImUxdGh1UjVTQWVjd0IwbkRPWndFbjFHam81L0o2WnhRZElXSmNMSnJhUms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI4NzA1NzI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQTRCNEEyNTg1MEMxMTUxODA0QjFGNzg0RDBCMjgzOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMyNDE2NjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGJiNHZMYjZRdmFNU0Rsd3dkZGZnUVwiLFxuICBcInBob25lSWRcIjogXCJjZDhiMWEzMi0yYjAzLTQyOWQtYTE0OS1kMmQ0M2QyNzIzMGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjM0LFxuICAgICAgMjExLFxuICAgICAgMjU0LFxuICAgICAgMTIxLFxuICAgICAgMTU4LFxuICAgICAgMTM4LFxuICAgICAgMjQ5LFxuICAgICAgNTEsXG4gICAgICA3MixcbiAgICAgIDI0NyxcbiAgICAgIDIwLFxuICAgICAgMjUyLFxuICAgICAgMjQ0LFxuICAgICAgMjIxLFxuICAgICAgMzYsXG4gICAgICAyNDMsXG4gICAgICAyMixcbiAgICAgIDE2NixcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDIzNyxcbiAgICAgIDg5LFxuICAgICAgOTcsXG4gICAgICAyNTQsXG4gICAgICAyOSxcbiAgICAgIDQzLFxuICAgICAgODcsXG4gICAgICAxNDksXG4gICAgICAxMDEsXG4gICAgICAyMzMsXG4gICAgICAyOSxcbiAgICAgIDM3LFxuICAgICAgMTk4LFxuICAgICAgMTIyLFxuICAgICAgMTEsXG4gICAgICA0MyxcbiAgICAgIDczLFxuICAgICAgMjI1LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNYWkdOMlBYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3Mjg3MDU3MjY6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMTU2MTk1MjA1OTQ0Nzo1MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5alcHl0aG9uIPCfpI9Qcm9ncmFtbWVy8J+RqOKAjfCfkrsg8J+WpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012cis3a0JFTG1wMnJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieWRlTisxYWx3M2daSDlGUFAxZlpiRVF2Nk40VG44VTQrQ0dhbzlubTVnTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYZytiWnpqUnA1MGRDd3BrWU90THRMNGY3WU5Kd2xkU29nSDFKVkJqSnkyMGs5NVp0RUswbGxaYmV6amJVMTR1SE9mK0s2Nkg2amNDaDFTYk15b3hEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjM0V2ZjErQXpZOVF2d2VhQzhhVkJCTFBDSE1RaGFjQ29Jb3BUTFh4U1UzSGtWUTZXajM3cytkQUlkY1A4WmFxZTMxSzBHbXc5RnNNdjI1VEVyUVlpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3Mjg3MDU3MjY6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzI0MTY2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxrdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGt0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib2FZK3dpL1ZmTkVIellhKzI5Ry9JSzZrRHZaVnBweEdGSjdIcFp4ZXBDcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozOTAwMDIxMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzI0MTY2NTI1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.4.0",
  caption : global.caption || "" 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ELIAKIM-TECH",
  ownername:process.env.OWNER_NAME|| "eliakim ke",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false
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
