let btns = document.getElementsByClassName("input.btn.btn-light inlinebutton");
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


// adding the event listener by looping
btns.forEach(btn => {
  btn.addEventListener('hover', function () {
    btn.style.backgroundColor = 'salmon';
    btn.style.color = 'white';
  });
  btn.addEventListener('mouseout', function (){
    btn.style.backgroundColor = 'gray';
  });
  btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor = 'rgb(170,240,209)';
  });
});
