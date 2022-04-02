let btns = document.querySelectorAll(".inputbtn.btn-light.inlinebutton");
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
    btns[i].style.backgroundColor = 'rgb(170,240,209)';
  });
}
// adding the event listener by looping
btns.forEach(btn => {
  btn.addEventListener('hover', function () {
    btn.style.backgroundColor = 'salmon';
    btn.style.color = 'white';
  });
});

btns.forEach(btn => {
  btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor = 'rgb(170,240,209)';
  });
});

btns.forEach(btn => {

  btn.addEventListener('mouseout', function (){
    btn.style.backgroundColor = 'gray';
  });
});
