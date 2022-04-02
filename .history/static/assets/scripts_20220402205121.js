let btns = document.querySelectorAll("[topic]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mouseover', function(){
    btns[i].style.backgroundColor = 'gray';
  });
  btns[i].addEventListener('hover', function () {
    btns[i].style.backgroundColor = 'gray';
  });

  btns[i].addEventListener('mouseout', function (){
    btns[i].style.backgroundColor = 'salmon';
    });
    
}