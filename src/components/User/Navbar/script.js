function Navbar() {
  const menubtn = document.querySelector(".menu-btn");
  const hamburger = document.querySelector(".menu-btn_burger");

  const nav = document.querySelector(".nav");
  const menuNav = document.querySelector(".menu-nav");

  const navItem = document.querySelectorAll(".menu-nav_item");
  const navItems = document.querySelectorAll(".menu-nav_item-links");

  navItems.forEach(item=> item.addEventListener('click',collapse))

  function collapse(){
    menuNav.classList.remove('open')
    hamburger.classList.remove('open')
    searchbtn.classList.remove('hide')
  }

  const searchbtn=document.querySelector('.search-btn')
  const cancelbtn=document.querySelector('.cancel-btn')
  const form=document.querySelector('form')
  
  let showMenu = false;
  let showSearch=false

  menubtn.addEventListener("click", toggleMenu);
  searchbtn.addEventListener('click',toggleSearch)
  cancelbtn.addEventListener('click',toggleSearch)

  function toggleMenu() {
    if (!showMenu) {
      hamburger.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      navItem.forEach(item=> item.classList.add('open'))
      searchbtn.classList.add('hide')

      showMenu=true
    } else {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      menuNav.classList.remove("open");
      navItem.forEach(item=> item.classList.remove('open'))
      searchbtn.classList.remove('hide')

      showMenu=false
    }
  }

  function toggleSearch(){
      if(!showSearch){
          searchbtn.classList.add('hide')
          cancelbtn.classList.add('show')
          form.classList.add('active')

          showSearch=true
      }else{
          searchbtn.classList.remove('hide')
          cancelbtn.classList.remove('show')
          form.classList.remove('active')

          showSearch=false
      }
  }
  window.addEventListener('scroll',function(){
    const windowPos=window.scrollY
    const nav=document.querySelector('header')

    if(windowPos > 0){
      nav.classList.add('scroll')
    }else{
      nav.classList.remove('scroll')
    }
  })
};


export default Navbar