const showMoreStyles = (trigger, selector) => {
    const btn = document.querySelector(trigger),
          cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp')
    })
    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg','hidden-md','hidden-sm', 'hidden-xs')
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
        })
    })
}

export default showMoreStyles