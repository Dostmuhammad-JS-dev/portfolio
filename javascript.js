window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll',function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0)
    })
    const menuBtn = document.querySelector('.menyu-btn')
    const navigation = document.querySelector('.navigation')

    menuBtn.addEventListener('click',() => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
})