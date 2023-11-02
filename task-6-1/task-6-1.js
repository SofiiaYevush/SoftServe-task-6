const list = document.getElementById('list'); 
const listItems = list.querySelectorAll("li");
const order = [0, 4, 1, 3, 2];
let result = "";
for (let i = 0; i < order.length; ++i) {
    const index = order[i];
    result += listItems[index].textContent + " ";
}
alert(result);
