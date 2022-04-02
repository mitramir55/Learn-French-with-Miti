let btns = document.getElementsByClassName(".btn btn-light inlinebutton");
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


btns.forEach(btn => {

});
*/


// adding the event listener by looping

for (let i = 0; i < btns.length; i++) {
  //console.log(elements[i].innerHTML);
  btns.addEventListener('hover', function () {
    btns.style.backgroundColor = 'salmon';
    btns.style.color = 'white';
  });
  btns.addEventListener('mouseout', function (){
    btns.style.backgroundColor = 'gray';
  });
  btns.addEventListener('mouseover', function(){
    btn.style.backgroundColor = 'rgb(170,240,209)';
  });
}