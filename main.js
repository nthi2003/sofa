
  
  const topMenu = document.getElementById('qt-top-menu')
  const toggleTopMenuIcon = document.getElementById('qt-toggle-top-menu-icon')
  
  document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {

      topMenu.classList.toggle('qt-topmenu-expanded')
      topMenu.classList.toggle('hidden')
    } else {
      // Click Outside from Toggle top menu icon
      if (topMenu.classList.contains('qt-topmenu-expanded')) {
        topMenu.classList.remove('qt-topmenu-expanded')
        topMenu.classList.add('hidden')
      }
    }
  })