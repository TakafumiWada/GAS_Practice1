function sendToSlack(body, channel) {
  var url = "https://hooks.slack.com/services/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";
  var data = { "channel" : channel, 
              "username" : "自己紹介！",
              "text" : body,
              "icon_emoji" : ":hissattu:",
               "color": "#7fffd4"  // 3: 左線の色
             };
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(url, options);
}

function test() {
  sendToSlack("テスト通知確認です", "#gas練習場2");
}

function onFormSubmit(e){
  
  var itemResponse = e.response.getItemResponses();
  for (var j = 0; j < itemResponse.length; j++){    
    var formData = itemResponse[j];
    var title = formData.getItem().getTitle();
    var response = formData.getResponse();
    
    var name;
    var hobby;
    var gender;
    
    switch (title) {
     case "名前は？":
        name = response;
        break;
     case "趣味は？":
        hobby = response;
        break;
     case "性別は？":
        gender = response;
        break;
    }
  }
       
  var content="回答があったよ！"+"\n\n"+"```名前："+name+"\n"+"趣味:"+hobby+"\n"+"性別:"+gender+"```"
  
  
  sendToSlack(content, "#gas練習場2");
}