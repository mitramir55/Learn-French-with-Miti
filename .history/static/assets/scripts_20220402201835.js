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
  btns[i].addEventListener('hover', function () {
    btns[i].style.backgroundColor = 'salmon';
    btns[i].style.color = 'white';
  });
  btns[i].addEventListener('mouseout', function (){
    btns[i].style.backgroundColor = 'gray';
  });
  btns[i].addEventListener('mouseover', function(){
    btns[i].style.backgroundColor = 'rgb(170,240,209)';
  });
}