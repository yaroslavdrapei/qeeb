document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
      document.querySelector('.menu').style.top = `${window.scrollY}px`
    } else {
      document.querySelector('.menu').style.top = ''
    }
    document.body.classList.toggle('lock')
  })

  const breakpoint = window.matchMedia('(max-width: 830px)')
  function move(e) {
    const btn = document.querySelector('.header__btn'),
          title = document.querySelector('.insights__title'),
          icons = document.querySelectorAll('.post__btn'),
          footer__copyright = document.querySelector('.footer__rights span')
    if (e.matches) {
      document.querySelector('.menu').append(btn.cloneNode(true));
      btn.remove()
      title.textContent = 'Blog'
      icons.forEach(icon => {
        icon.classList.remove('_icon-readmorearrow')
        icon.classList.add('_icon-readmore')
      })
      footer__copyright.textContent = 'Copyright'
    } else {
      document.querySelector('.header__action').append(btn.cloneNode(true));
      btn.remove()
      title.textContent = 'Insights'
      icons.forEach(icon => {
        icon.classList.remove('_icon-readmore')
        icon.classList.add('_icon-readmorearrow')
      })
      footer__copyright.textContent = 'Qeeb'
    }
  }
  breakpoint.addListener(move)

  move(breakpoint)

  const collectionsBtn = document.querySelector('#showAll')

  collectionsBtn.addEventListener('click', () => {
    const collections = document.querySelector('.collections'),
          collectionsTitle = document.querySelector('.collections__title')
    collections.classList.toggle('onerow')

    if (collections.classList.contains('onerow')) {
      collectionsTitle.scrollIntoView()
    }
  })


  new Swiper('.categories__inner', {
    pagination: {
      el: '.categories__pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.categories__next',
      prevEl: '.categories__prev',
    },

    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    autoHeight: true,
    breakpoints: {
      830: {
        centeredSlides: false,
      }
    }
  })

  new Swiper('.trending__inner', {
    pagination: {
      el: '.trending__pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.trending__next',
      prevEl: '.trending__prev',
    },

    slidesPerView: 'auto',
    spaceBetween: 29,
    centeredSlides: true,
    autoHeight: true,
    breakpoints: {
      830: {
        centeredSlides: false,
      }
    }
  })
})