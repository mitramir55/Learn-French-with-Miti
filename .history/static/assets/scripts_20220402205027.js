let btns = document.querySelectorAll("input[data-foo]");
/*
btn.addEventListener('hover', function () {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
});
btn.addEventListener('mouseover', function(){
  btn.style.backgroundColor = 'rgb(170,240,209)';
});
btn.addEventListener('mouseout', function (){
  btn.style.backgroundColor = 'gray';
});
*/


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