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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349016054039";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_19_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgMjUsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRUZjYWlZOWloZkJ4L1NCNE1xejBORnhRKy94WW9tSUljd3F1YlNPcm5Ndz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1RBTFZQUEVUakd5RXlKd2puMnA0UVwiLFxuICBcInBob25lSWRcIjogXCJlNGUzYWNiYy05NWQxLTRhZWYtOWQxZC1kYzhiNzIyNTM1YzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgODIsXG4gICAgICAyOCxcbiAgICAgIDkwLFxuICAgICAgODcsXG4gICAgICA2NyxcbiAgICAgIDU5LFxuICAgICAgMjQ3LFxuICAgICAgNjMsXG4gICAgICAyNDQsXG4gICAgICAxMzEsXG4gICAgICAyNTMsXG4gICAgICAxNTEsXG4gICAgICAxODMsXG4gICAgICA2MyxcbiAgICAgIDIxMyxcbiAgICAgIDIxMCxcbiAgICAgIDE3NSxcbiAgICAgIDIwOCxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDc0LFxuICAgICAgMjA4LFxuICAgICAgODUsXG4gICAgICAxNzUsXG4gICAgICAxMzAsXG4gICAgICAxNDIsXG4gICAgICAxNjksXG4gICAgICAyOCxcbiAgICAgIDI0NSxcbiAgICAgIDEwOCxcbiAgICAgIDE3MSxcbiAgICAgIDIxMCxcbiAgICAgIDE3OSxcbiAgICAgIDkwLFxuICAgICAgMjUsXG4gICAgICAyMzAsXG4gICAgICAxMDIsXG4gICAgICAxODcsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkY1M1k2SDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTYwNTQwMzk6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MzU1NDk4Njk2MzA2ODoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV0UrY3dPRUpPSng3b0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInN4SDVMVU9iZlkvTTYrV3AyekczekJjTk1mbWxQNGpNSWVJMXdaajM1RXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZjhsVmtLVkdDSjIyMzZBODRJMWQrTFQySXp0MHY0MTg5c29QQVJIODM5cG05T01ZVmEreDFRRlpPOU05bnlaNVIzTzYzQ3d1NVZsWlBKTFNlazN0aWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY09WWitkaVBSeXd5YTVvK09LYW1wdGgvcy9Yb3NJTkpQQzFRWHZHU2JlaFJtcnQ0TnJFNmZuM3N2SVVRcytIdWVTRFpvaWFIaytQMTZVSFFLdktFQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNjA1NDAzOToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQxMTk5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNJV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0lXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3FnU3dwWlpUUXpqQzVndVY4Si9pZFBkK0d1eHVnTzZDSlR1WGtZM2tLbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozOTE5NDYyOTMzLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMywwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM0MDY2MTEyNTBcIn0iCn0="  // PUT your SESSION_ID 


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
