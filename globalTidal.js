/******************************
#!name=全球潮汐
#!desc=全球潮汐



#[Script]

^https?:\/\/g\.catches\.com\/v1\/(user|user\/registerOrLogin) url script-response-body https://raw.githubusercontent.com/easonb-cloud/windyJs/refs/heads/main/globalTidal.js


#[MITM] 
hostname = %APPEND% g.catches.com

*******************************/


var body = $response.body.replace(/isVip":\d+/g,'isVip":1').
  replace(/vipExpireTime":\w+/g,'vipExpireTime":2518015174000')
$done({ body });
