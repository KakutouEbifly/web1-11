//数字あてゲームの数字決め
var number = Math.floor(Math.random()*100+1);
var allNumber = 100;
var partNumber = allNumber / 2;
var message;
var goal = 0;

//ゲーム
for(var point = 10;point - 1; point <= 0 || goal === 0){
  do{
    var answer = parseInt(window.prompt('残りポイント${allNumber}\n\n数あてゲーム！1～100から探してね！\nヒントが欲しい人は0を入力してね！'));
    if(answer < 0 || ansswer > 100){
      window.prompt('値が正しくないでござる');
    }
  }while(answer < 0 || ansswer > 100);
  
  if(answer === 0){
    partNumber = allNumber / 2;
    if(answer <= partNumber){
      
    }
    
    point -= 1;
  }else{
    if(answer === number){
      message = 'あたりでーーーーーーーす！';
      goal = 1;
    }else{
      message = '残念がんば！';
    }
    
    document.getEle,emmtById('choice').textContect = message;
  }
}
