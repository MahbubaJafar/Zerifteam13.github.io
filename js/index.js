const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
for(var i = 1; i < 400; i++){
  banner.innerHTML+="<div class='blocks'></div>";
  const duration = Math.random() * 5;
  blocks[i].style.animationDuration = duration+'s';
  // blocks[i].style.animationDuration = 2+duration+'s';

}
