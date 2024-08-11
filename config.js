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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_22_08_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVyNndxUlUybTErQ2p3QTdzRVBhTFJjb2JqR0haOUhBaEFNT0I5RzE1ZTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzg2Nzc0NjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTRERTA2MEY5Mzg2OEJGRDI2OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjM0MTQ5MjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib0IxaEozd3VSdGl0OTkwZEdUT1h2d1wiLFxuICBcInBob25lSWRcIjogXCI0ZTIyZGJiYS04ZGUwLTQxOGMtOTY2NC02NGVmYmEwZWE3M2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMTkyLFxuICAgICAgMjAyLFxuICAgICAgMTQsXG4gICAgICAyMjMsXG4gICAgICAyMzQsXG4gICAgICA4MixcbiAgICAgIDIyLFxuICAgICAgOTUsXG4gICAgICAxOTMsXG4gICAgICAxNixcbiAgICAgIDIwMCxcbiAgICAgIDE2NixcbiAgICAgIDEyMSxcbiAgICAgIDE0MixcbiAgICAgIDYzLFxuICAgICAgMTg4LFxuICAgICAgMTA3LFxuICAgICAgODIsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDYzLFxuICAgICAgMTgsXG4gICAgICAxMTUsXG4gICAgICAxNzQsXG4gICAgICAxMDgsXG4gICAgICAxMjAsXG4gICAgICA2MSxcbiAgICAgIDMsXG4gICAgICAxNjEsXG4gICAgICAyNDYsXG4gICAgICAxMzksXG4gICAgICA3MixcbiAgICAgIDE1MixcbiAgICAgIDI1LFxuICAgICAgMjAyLFxuICAgICAgMTIxLFxuICAgICAgMTIsXG4gICAgICA2MSxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEM0hLUFhXS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzg2Nzc0NjIyOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjg0MTA0MTU2NDg4NzA6NTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi76O/IERJ76O/R07igqzvo79Q4oKsRFJJXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Erdi9BSUVJRHo1TFVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhNzUrcWJXUzJ6WUQvdXFxeTNrRUd5N1BwM0F0bXdDZFZXM1RvWGsxUWdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1QNFVKTnNhUTFBNG1uMmhBbVVZY0paZmlLTVZPUE5GMTJrVmZCOVdzVmUyQk5xUHpLM0ozUVZlRVJ3WVRuSEtsTXNTc1dIMXZCeDNDblY5NWsraGlBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQ3YzdRbnJkVUpkb1FIWjJWZlNGRDRTd1ZKTXRncnFtTVJyQk9vSG1xbGdhN3J5NWh5WVVpZ0x6SWM0d09IL2lhZ2xBbzNBVjlZZXRzandnNUFCZWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc4Njc3NDYyMjo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzNDE0OTE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUExiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYWlhpajJLc3oyakpXa01ub241djBNZnRWT0dJbHk0c0ZmZ0kycVl6Tk5nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzODM0MDQ5MDYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlszLDEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIzNDE0ODUyMjk1XCJ9Igp9"  // PUT your SESSION_ID 


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
