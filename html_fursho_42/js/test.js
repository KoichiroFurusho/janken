// jsを記述する際はここに記載していく
console.log("はじめてのジャバスクリプト");

console.log(23+5);
console.log(2000-1800);
console.log("18+5");

var name = "古庄　孝一朗";
console.log(name);

var name2 = "古庄　孝一朗";
if (name2 == "古庄　孝一朗"){
　　console.log("正解");
}else{
　　console.log("不正解");
}

var janken ="グー";



var point = 90;
if (point >= 80) {
    console.log("素晴らしい！おめでとう！");
}else{
    console.log("もっと頑張りましょう！");
}



// 0 ~ 4までの数字が出ます
var random = Math.floor(Math.random() * 5);
console.log(random, "便利な機能を使ってランダムな数字が出ます");
if(random == 0){
  // 0の時に実行したいことをかく
  console.log("凶");

}else if(random == 1){
  // 1の時に実行したいことをかく
  console.log("小吉");

}else if(random == 2){
  // 2の時に実行したいことをかく
  console.log("中吉");

}else if(random == 3){
  // 1の時に実行したいことをかく
  console.log("吉");

}else if(random == 4){
    console.log("大吉");
}




$(function () {
  // この中に書いていく

  $(".button").on("click", function () {
　// $(".button").css("color", "red");
　// $(".kekka").html("押されましたよ");

var random = Math.floor(Math.random() * 5);
  console.log(random, "便利な機能を使ってランダムな数字が出ます");
  if(random == 0){
    // 0の時に実行したいことをかく
    console.log("凶");
    $(".kekka").html("凶");
  
  }else if(random == 1){
    // 1の時に実行したいことをかく
    console.log("小吉");
    $(".kekka").html("小吉");

  
  }else if(random == 2){
    // 2の時に実行したいことをかく
    console.log("中吉");
    $(".kekka").html("中吉");
  
  }else if(random == 3){
    // 1の時に実行したいことをかく
    console.log("吉");
    $(".kekka").html("吉");

  
  }else if(random == 4){
      console.log("大吉");
      $(".kekka").html("大吉");

  }

    // この下は消さない
  });

　//消しちゃダメ
});


//ここからじゃんけんグー
$(function () {
    // この中に書いていく
  
    $(".button").on("click", function () {
  
  var random = Math.floor(Math.random() * 3);
    console.log(random, "便利な機能を使ってランダムな数字が出ます");
    if(random == 0){
      // 0の時に実行したいことをかく
      console.log("グー");
　　　$(".jibunnote").html("グー");
      console.log("グー");
      $(".aitenote").html("グー");
      console.log("あいこ");
      $(".kekka").html("あいこ");
    
    }else if(random == 1){
      // 1の時に実行したいことをかく
      console.log("グー");
　　　$(".jibunnote").html("グー");
      console.log("チョキ");
      $(".aitenote").html("チョキ");
      console.log("あなたの勝ち");
      $(".kekka").html("あなたの勝ち");
  
    
    }else if(random == 2){
      // 2の時に実行したいことをかく
      console.log("グー");
　　　$(".jibunnote").html("グー");
      console.log("パー");
      $(".aitenote").html("パー");
      console.log("あなたの負け");
      $(".kekka").html("あなたの負け");
    
  
    }
  
      // この下は消さない
    });
  


//ここからじゃんけんチョキ

    // この中に書いていく
  
    $(".button2").on("click", function () {
  
  var random = Math.floor(Math.random() * 3);
    console.log(random, "便利な機能を使ってランダムな数字が出ます");
    if(random == 0){
      // 0の時に実行したいことをかく
      console.log("チョキ");
　　　$(".jibunnote").html("チョキ");
      console.log("グー");
      $(".aitenote").html("グー");
      console.log("あなたの負け");
      $(".kekka").html("あなたの負け");
    
    }else if(random == 1){
      // 1の時に実行したいことをかく
      console.log("チョキ");
　　　$(".jibunnote").html("チョキ");
      console.log("チョキ");
      $(".aitenote").html("チョキ");
      console.log("あいこ");
      $(".kekka").html("あいこ");
  
    
    }else if(random == 2){
      // 2の時に実行したいことをかく
      console.log("チョキ");
　　　$(".jibunnote").html("チョキ");
      console.log("パー");
      $(".aitenote").html("パー");
      console.log("あなたの勝ち");
      $(".kekka").html("あなたの勝ち");
    
  
    }
  
      // この下は消さない
    });
  
//ここからじゃんけんパー

    // この中に書いていく
  
    $(".button3").on("click", function () {
  
        var random = Math.floor(Math.random() * 3);
          console.log(random, "便利な機能を使ってランダムな数字が出ます");
          if(random == 0){
            // 0の時に実行したいことをかく
            console.log("パー");
          　$(".jibunnote").html("パー");
            console.log("グー");
            $(".aitenote").html("グー");
            console.log("あなたの勝ち");
            $(".kekka").html("あなたの勝ち");
          
          }else if(random == 1){
            // 1の時に実行したいことをかく
            console.log("パー");
          　$(".jibunnote").html("パー");
            console.log("チョキ");
            $(".aitenote").html("チョキ");
            console.log("あなたの負け");
            $(".kekka").html("あなたの負け");
        
          
          }else if(random == 2){
            // 2の時に実行したいことをかく
            console.log("パー");
          　$(".jibunnote").html("パー");
            console.log("パー");
            $(".aitenote").html("パー");
            console.log("あいこ");
            $(".kekka").html("あいこ");
          
        
          }
        
            // この下は消さない
          });
      


  　//消しちゃダメ
  });


  

