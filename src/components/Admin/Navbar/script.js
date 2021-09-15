function AdminNav() {
    const menubtn = document.querySelector(".admin-menu-btn");
    const hamburger = document.querySelector(".admin-menu-btn_burger");

    const nav=document.querySelector('.mob-admin')
    const menuNav=document.querySelector('.mob-admin-nav')

    const navItems=document.querySelectorAll('.mob-admin-nav-item')
    const navLinks=document.querySelectorAll('.mob-admin-nav-item-links')

    navLinks.forEach(item=>item.addEventListener('click',function(){
        hamburger.classList.remove('open')
            nav.classList.remove('open')
            menuNav.classList.remove('open')
            navItems.forEach(item=> item.classList.remove('open'))
    }))

    let showMenu= false
    menubtn.addEventListener('click',function(){
        if(!showMenu){
            hamburger.classList.add('open')
            nav.classList.add('open')
            menuNav.classList.add('open')
            navItems.forEach(item=> item.classList.add('open'))

            showMenu=true
        }else{
            hamburger.classList.remove('open')
            nav.classList.remove('open')
            menuNav.classList.remove('open')
            navItems.forEach(item=> item.classList.remove('open'))

            showMenu=false
        }
    })

    const links = document.querySelectorAll(".admin-SideNav-link");
    links.forEach((item) =>
      item.addEventListener("click", function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("admin-main").style.marginLeft = "0";
      })
    );
}

export default AdminNav;
