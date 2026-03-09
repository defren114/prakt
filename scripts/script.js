document.addEventListener('DOMContentLoaded', function() {
    const task1Container = document.getElementById('task1-container');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Список пользователей';
    task1Container.appendChild(h1);

    const ul = document.createElement('ul');
    ul.id = 'user-list';
    
    const users = ['Анна', 'Борис', 'Виктор'];
    users.forEach(function(name) {
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });
    task1Container.appendChild(ul);

    const btn = document.createElement('button');
    btn.textContent = 'Добавить пользователя';
    task1Container.appendChild(btn);

    btn.addEventListener('click', function() {
        const newLi = document.createElement('li');
        newLi.textContent = 'Новый пользователь';
        ul.appendChild(newLi);
    });

    const textElements = document.querySelectorAll('.text');
    console.log('Найдено элементов с классом text:', textElements.length);

    const specialElement = document.querySelector('.special');
    if (specialElement) {
        specialElement.classList.add('red-text');
    }

    if (textElements.length >= 3) {
        textElements[2].classList.add('bg-green');
    }

    const container = document.getElementById('container');
    if (container) {
        container.classList.add('border-container');
    }

    const items = document.querySelectorAll('.item');
    let totalPrice = 0;
    let maxPrice = 0;
    let maxPriceItemName = '';

    items.forEach(function(item) {
        const price = Number(item.dataset.price);
        totalPrice += price;

        if (item.classList.contains('active')) {
            item.classList.add('highlight');
        }

        if (price > maxPrice) {
            maxPrice = price;
            maxPriceItemName = item.textContent;
        }
    });

    const totalDisplay = document.getElementById('total-price');
    if (totalDisplay) {
        totalDisplay.textContent = 'Суммарная стоимость: ' + totalPrice;
    }

    console.log('Товар с максимальной ценой:', maxPriceItemName);
});