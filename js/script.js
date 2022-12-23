document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('active')
  })

  const breakpoint = window.matchMedia('(max-width: 830px)')
  function move(e) {
    const btn = document.querySelector('.header__btn');
    if (e.matches) {
      document.querySelector('.menu').append(btn.cloneNode(true));
      btn.remove()
    } else {
      document.querySelector('.header__action').append(btn.cloneNode(true));
      btn.remove()
    }
  }
  breakpoint.addListener(move)

  move(breakpoint)
})