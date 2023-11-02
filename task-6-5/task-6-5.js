const circleClasses = document.querySelectorAll('div.circle');

circleClasses.forEach((circle) => {
    const dataAnim = circle.getAttribute('data-anim');
    circle.classList.add(dataAnim);

    if (circle.classList.contains(dataAnim)) {
        console.log(`Анімація "${dataAnim}" була застосована.`);
    }
});



/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/
