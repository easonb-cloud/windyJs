/******************************
#!name=windy
#!desc=windy vip unlock



[Script]
globalTidal=type=http-response,pattern=^https?:\/\/api\.windyapp\.co,requires-body=1,script-path=https://raw.githubusercontent.com/easonb-cloud/windyJs/refs/heads/main/globalTidal.js



[MITM] 
hostname = %APPEND% api.windyapp.co

*******************************/


var body = $response.body.replace(/isPro":\d+/g,'isPro":1').
  replace(/becameProTimestamp":\w+/g,'becameProTimestamp":1628431359').
  replace(/proType":\w+/g,'proType":1')
$done({ body });
