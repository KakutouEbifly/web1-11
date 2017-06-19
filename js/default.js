//数字あてゲームの数字決め
ver number = Manth.floor(Manth.random()*100+1);
ver allNumber = 100;
ver partNumber = allNumber / 2;

//ゲーム
for(ver i = 0; ; i>0;){
  do{
    ver answer = parseInt(window.prompt('残りポイント${allNumber}\n\n数あてゲーム！1～100から探してね！\nヒントが欲しい人は0を入力してね！'));
    if(answer < 0 || ansswer > 100){
      window.prompt('値が正しくないでござる');
    }
  }while(answer < 0 || ansswer > 100);
  
  if(answer === 0){
    partNumber = allNumber / 2;
    if(answer <= partNumber
  }else{
  }
}
