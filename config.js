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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_36_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNixcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPTk1rWWxFSUZPYXptV2Q5TXQwQkNIcERVYUFjSjV2WXRkdHM1ekczL0EwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIMU1ya3FzZVJPZW8teFVxQnBEQnVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRlMGI1YzAxLTIyMGYtNGQ4OC1hYzdlLTViZTM5ODkwODZjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDIzLFxuICAgICAgNDgsXG4gICAgICAyOSxcbiAgICAgIDAsXG4gICAgICAxODMsXG4gICAgICAxMDQsXG4gICAgICAxNzQsXG4gICAgICAxNzksXG4gICAgICAyMjksXG4gICAgICAyMjAsXG4gICAgICAzOSxcbiAgICAgIDEyMCxcbiAgICAgIDE2MSxcbiAgICAgIDIyNyxcbiAgICAgIDg5LFxuICAgICAgMTYyLFxuICAgICAgMTI3LFxuICAgICAgMzksXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDI0MixcbiAgICAgIDExOCxcbiAgICAgIDEwMyxcbiAgICAgIDEzMCxcbiAgICAgIDExNixcbiAgICAgIDEsXG4gICAgICAyNDAsXG4gICAgICAyMDYsXG4gICAgICAxMTAsXG4gICAgICAxMDMsXG4gICAgICAxNjMsXG4gICAgICAyNDAsXG4gICAgICAxODMsXG4gICAgICAyMSxcbiAgICAgIDExMSxcbiAgICAgIDEzNCxcbiAgICAgIDE4NSxcbiAgICAgIDYyLFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVSNFcyTDNCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE2MDU0MDM5OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDM1NTQ5ODY5NjMwNjg6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5kOWJjRkVOckIxcm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzeEg1TFVPYmZZL002K1dwMnpHM3pCY05NZm1sUDRqTUllSTF3WmozNUV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJ6OXlZV1VVWUNFOWVIWi9LYWMwRXVtZUN2RFJpckl4NElURmdNczhoTUloV3RDbHdSa1FhaXJ5Z1c3Y1FIYlNOSGxObEVtTjF1ZzVvUGdSNEdvYWhBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhmcmdoMk4wa3ZjcU9MK0hRUWwrOGxDdGVHVVlGZ29UR2dWbVpwTWtQaCtLUmJGMXM4MFRaVHBEbFlheVNNWk1pVWxKb0Zya0xVL3c5UXh1TEkwaWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTYwNTQwMzk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2NjQ5OTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
