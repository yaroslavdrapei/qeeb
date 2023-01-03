document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('active')
  })

  const breakpoint = window.matchMedia('(max-width: 830px)')
  // function move(e, ...rest) {
  //   const [sel, bp, action1, action2] = rest
  //   const el = document.querySelector(sel);
  //   if (e.matches) {
  //     action1()
  //   } else {
  //     action2()
  //   }
  // }
  function move(e) {
    const btn = document.querySelector('.header__btn'),
          title = document.querySelector('.insights__title'),
          icons = document.querySelectorAll('.post__btn')
    if (e.matches) {
      document.querySelector('.menu').append(btn.cloneNode(true));
      btn.remove()
      title.textContent = 'Blog'
      icons.forEach(icon => {
        icon.classList.remove('_icon-readmorearrow')
        icon.classList.add('_icon-readmore')
      })
    } else {
      document.querySelector('.header__action').append(btn.cloneNode(true));
      btn.remove()
      title.textContent = 'Insights'
      icons.forEach(icon => {
        icon.classList.remove('_icon-readmore')
        icon.classList.add('_icon-readmorearrow')
      })
    }
  }
  breakpoint.addListener(move)

  move(breakpoint)
})