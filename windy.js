/*******************************

脚本名称: windyVIP unlock
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.windyapp\.co\/apiV9\.php url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sjthly.js

[mitm] 

hostname = %APPEND% api.windyapp.co

*******************************/
var body = $response.body.replace(/isPro":\d/g,'isPro":1')

$done({ body });
