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

SUHAIL_06_28_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgyLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInlEWnhGemo2SDVpREtwNmZST3RRK1JEOHlhUFdUZ3ZQYXlyVXNXa2xwWWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhGZlBQXzBtUi15dGNaamVXcDcyb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGM2NDE1NTYtMTVmOC00MmJmLTlkYTMtZmU3MWY0OGM2M2ZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDIzOCxcbiAgICAgIDkwLFxuICAgICAgNDUsXG4gICAgICAxMTYsXG4gICAgICAxLFxuICAgICAgMTI4LFxuICAgICAgNjIsXG4gICAgICAxMDMsXG4gICAgICAyMjgsXG4gICAgICA1OCxcbiAgICAgIDE4OSxcbiAgICAgIDEwMixcbiAgICAgIDExNCxcbiAgICAgIDIyMSxcbiAgICAgIDEyOSxcbiAgICAgIDE3NixcbiAgICAgIDE1NixcbiAgICAgIDEzMyxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICA4MyxcbiAgICAgIDEyNCxcbiAgICAgIDEyMSxcbiAgICAgIDYzLFxuICAgICAgMTEyLFxuICAgICAgOCxcbiAgICAgIDIxNixcbiAgICAgIDE2MSxcbiAgICAgIDE2OSxcbiAgICAgIDIzOSxcbiAgICAgIDc2LFxuICAgICAgMjYsXG4gICAgICA1LFxuICAgICAgMTYzLFxuICAgICAgMTU0LFxuICAgICAgMTMsXG4gICAgICAyNyxcbiAgICAgIDI1NSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvMWlVb1E1dGJtdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjFNaFNDcFl2L0Q4a0dFSnUyQ1lzZmU0TFM5N21wM3hRODhBK21Zb3NsST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4Tnh0UXNRUEozMmJsTHFRdGwxZnl1U0ZlRnRnYlZTaytUcHpnRW9FWlVqZ2llZlZzYVJIcy9qQWtZMDl3NTJYaG5Xdy9TbHY3SDFKYkZobHBjUUJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiVk43RE93VmVKczJiZWJOc1VXbEtNRUpIZVB5SkQvcnlpbmd6Sk9JMXlpWDU3UDlkRGt1aytNYzU1R2NWTGNmY3BqZUhmbm5TZHdQS1ZoMkg1THNpQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE3ODI4NTkyMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzY0NTU5MDkzMDYzODQ6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE3ODI4NTkyMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM0NDQwNzNcbn0iCn0=
global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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
