/******************************
#!name=全球潮汐
#!desc=全球潮汐
#!homepage=https://github.com/deezertidal
#!author=yqc007
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/adguard.png


[Script]
globalTidal=type=http-response,pattern=^https?:\/\/g\.catches\.com\/v1\/user,requires-body=1,script-path=https://raw.githubusercontent.com/easonb-cloud/windyJs/refs/heads/main/globalTidal.js



[MITM] 
hostname = %APPEND% g.catches.com

*******************************/


var body = $response.body.replace(/isVip":\d+/g,'isVip":1').
  replace(/vipExpireTime":\w+/g,'vipExpireTime":2518015174000')
$done({ body });
