function AdminHome(){
    const dropbtn=document.querySelector('.dropbtn')
    dropbtn.addEventListener('click',function(){
        document.getElementById("myDropdown").classList.toggle("show");
    })
    
    window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
      
      const toggle=document.querySelector('.toggle-btn')
      const toggleActive=document.querySelector('.toggle-btn.active')
      let showToggle=false
      toggle.addEventListener('click',function(){
          toggle.classList.add('active')
      })
      toggleActive?.addEventListener('click',function(){
          toggle.classList.remove('active')
      })
}

export default AdminHome