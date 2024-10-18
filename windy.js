/******************************
#!name=windy
#!desc=windy vip unlock


#[rewrite_local]
^https?:\/\/api\.windyapp\.co\/apiV9\.php(\?method=syncUserData&userID=\w+)? url script-response-body https://raw.githubusercontent.com/easonb-cloud/windyJs/refs/heads/main/windy.js

#[mitm]

hostname = api.windyapp.co
*******************************/


var body = $response.body; // 獲取響應的主體

// 假設這是要修改的 JSON 結構
body = body.replace(/"isPro":\d+/g, '"isPro":1')
           .replace(/"becameProTimestamp":\w+/g, '"becameProTimestamp":1728431359')
           .replace(/"proType":\w+/g, '"proType":1');

$done({ body }); // 返回修改後的響應
