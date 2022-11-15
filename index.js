const ham = document.querySelector('.ham')
const showmenu = document.querySelector('.mobile-nav-items')
const ex = document.querySelector('.burger')


ham.addEventListener('click', function(){
  showmenu.classList.toggle('hide')
//   if(showmenu.classList.contains('burger')){
//     ex.src='images/icon-close.svg'
//   }else{
//     ex.src='images/icon-hamburger.svg'
//   }
  //es 6
  showmenu.classList.contains('hide')
  ? (ex.src='images/icon-hamburger.svg')
  : (ex.src='images/icon-close.svg')

})
