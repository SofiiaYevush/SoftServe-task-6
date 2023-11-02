const colorElements = document.querySelectorAll('.color');
const priceElement = document.getElementById('outprice');
const shoeElements = document.querySelectorAll('.shoe');
const gradientElements = document.querySelectorAll('.gradient');

colorElements.forEach((color) => {
    color.addEventListener('click', () => {
        // Зміна ціни товару при кліку на колір
        const price = color.getAttribute('data-price');
        priceElement.textContent = price;

        colorElements.forEach((c) => {
            c.classList.remove('active');
        });
        color.classList.add('active');

        // Зміна картинки товару при кліку на колір
        selectedColor = color.getAttribute('color');
        const selectedShoeImage = document.querySelector(`.shoe[color="${selectedColor}`);
        shoeElements.forEach((sh) => {
            sh.classList.remove('show');
        });
        selectedShoeImage.classList.add('show');

        // Зміна градієнту при кліку на колір
        const selectedGradient = document.querySelector(`.gradient[color="${selectedColor}`);
        gradientElements.forEach((g) => {
            g.classList.remove('second');
        });
        selectedGradient.classList.add('second');

    });
});


 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.
