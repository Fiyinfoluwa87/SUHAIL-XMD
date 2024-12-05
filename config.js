const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349016054039" ;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_17_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMwLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVTaEpCQVplaE5NZ29hcjd4Uk40c0JzRXZWM0dsajIzU3NJSVZMcUdGUEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpSQk9fYTFDUjk2VE1lNDgtVXRtSVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDNiNWI3MTMtYzU2Yy00YjcyLTljNGItNTU5YWYxYjI5MjBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDE5OSxcbiAgICAgIDEyMSxcbiAgICAgIDUyLFxuICAgICAgMTM3LFxuICAgICAgMjE1LFxuICAgICAgMjIyLFxuICAgICAgMTM2LFxuICAgICAgNDYsXG4gICAgICAxNTIsXG4gICAgICA0NyxcbiAgICAgIDIzNSxcbiAgICAgIDE0LFxuICAgICAgMTk1LFxuICAgICAgMjM3LFxuICAgICAgMTQyLFxuICAgICAgMTM0LFxuICAgICAgMTM3LFxuICAgICAgMzIsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgOTEsXG4gICAgICA4NCxcbiAgICAgIDI0NCxcbiAgICAgIDQ0LFxuICAgICAgNzQsXG4gICAgICAxMzMsXG4gICAgICAxNjYsXG4gICAgICAzMyxcbiAgICAgIDE5MCxcbiAgICAgIDksXG4gICAgICAyMDgsXG4gICAgICAxNTAsXG4gICAgICAyMjgsXG4gICAgICAyMTcsXG4gICAgICA2NixcbiAgICAgIDIzMCxcbiAgICAgIDEzMyxcbiAgICAgIDc5LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkUzNk0zTDE1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE2MDU0MDM5OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDM1NTQ5ODY5NjMwNjg6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSldFK2N3T0VNZlB4cm9HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzeEg1TFVPYmZZL002K1dwMnpHM3pCY05NZm1sUDRqTUllSTF3WmozNUV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkwwd05HWnNiOVRoZkVNUVNoT2JUQnpHM2hseUttbVpnMmZyeExKUU0veEJydUtxU1ZPYmV6TEpXRnZPREFMWS9MemJySnBKMlBHWWthQmR2QWtFK2h3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldpdWRmdnR1QmNZYUFncFRodlVxN3k2N2JIZkJzMnJlcHIvM2szVlNPaitiMExJcit1OVdMVnBiRHdCTjhUTkt6Vm8ySi9CZ0loMGw1bTJKeUthakJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTYwNTQwMzk6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0MDQ2MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDSU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNJTi5qc29uIjogIntcImtleURhdGFcIjpcIjRxWnprTkFJcXRRN21yNkJKTERwdk1MR0JzUlgyWW1YRGhBaS9VbGZrWGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzkxOTQ2MjkzMyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk1ODc1NjI4MzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
