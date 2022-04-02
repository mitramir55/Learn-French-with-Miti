let btns = document.querySelectorAll(".btn.btn-light.inlinebutton");
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

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i].innerHTML);
}