/*******************************

脚本名称: windyVIP unlock
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.windyapp\.co\/apiV9\.php url script-response-body https://raw.githubusercontent.com/easonb-cloud/windyJs/refs/heads/main/windy.js

[mitm] 

hostname = %APPEND% api.windyapp.co

*******************************/
var body = 123

$done({ body });
