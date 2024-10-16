/*******************************

脚本名称: windyVIP unlock
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

******************************


[Script]

windyVIP=type=http-response,pattern=https:\/\/api\.windyapp\.co\/apiV9\.php,requires-body=1,script-path=https://raw.githubusercontent.com/easonb-cloud/windyJs/refs/heads/main/windy.js

[MITM]

hostname = %APPEND% api.windyapp.co


*******************************/
var body = $response.body.replace(/isPro":\d/g,'isPro":1')
.replace(/becameProTimestamp":\w+/g,'becameProTimestamp":1728431359')
.replace(/proType":\w+/g,'proType":1')
$done({ body });
