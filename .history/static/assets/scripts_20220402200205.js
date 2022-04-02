let btn = document.getElementsByClassName("btn btn-light inlinebutton");

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

let btns = document.querySelectorAll("form input");

btns.forEach(function(btn) {
  deleteUser(btn);
});
