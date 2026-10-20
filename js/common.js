/* gnb */
const gnbList = document.querySelectorAll('.gnb-list li a');

gnbList.forEach((gnb) => {
    gnb.addEventListener('click', () => {
        gnbList.forEach((item) => {
            item.classList.remove('on')
        })

        gnb.classList.add('on')
    })
})