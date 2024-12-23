const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        const targetIndex = item.getAttribute('data-target');  
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents.forEach(content => {
            if (content.getAttribute('data-index') == targetIndex) {
                content.classList.add('show');
            }  
        });
        // contents[targetIndex].classList.add('show')

    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
} 