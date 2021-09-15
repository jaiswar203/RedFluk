function AdminMovies(){

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

export default AdminMovies