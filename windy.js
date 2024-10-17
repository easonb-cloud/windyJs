/******************************
#!name=windy
#!desc=windy vip unlock



[Script]
windy=type=http-response,pattern=^https?:\/\/api\.windyapp\.co\/apiV9\.php(\?method=syncUserData&userID=\w+)?,requires-body=1,script-path=https://raw.githubusercontent.com/easonb-cloud/windyJs/refs/heads/main/windy.js


[MITM] 
hostname = %APPEND% api.windyapp.co

*******************************/


var body = $response.body; // 獲取響應的主體

// 假設這是要修改的 JSON 結構
body = body.replace(/"isPro":\d+/g, '"isPro":1')
           .replace(/"becameProTimestamp":\w+/g, '"becameProTimestamp":1728431359')
           .replace(/"proType":\w+/g, '"proType":1');

$done({ body }); // 返回修改後的響應
