let tabs = [
    { name: 'Tab 1', content: 'I am Best' },
    { name: 'Tab 2', content: 'World is mine' },
    { name: 'Tab 3', content: 'No one Cares' }
]


let content = document.querySelector('.content');
let tabContainer = document.querySelector('.tabs');


tabs.forEach(tab => {
    let button = document.createElement('button');
    button.classList.add('button');
    button.textContent = tab.name;
    tabContainer.appendChild(button);
})



let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {

    button.addEventListener('click', function () {

        buttons.forEach(btn => {
            btn.classList.remove('active');
        })

        button.classList.add('active');

        const selectedButton = tabs.find(tab => tab.name === button.textContent);
        content.innerHTML = selectedButton.content;
    })
})