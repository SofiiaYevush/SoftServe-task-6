const body = document.createElement('body');
document.documentElement.appendChild(body);

const main = document.createElement('main');
main.classList = 'mainClass check item';
body.appendChild(main);

const div = document.createElement('div');
div.id = 'myDiv';
main.appendChild(div);

const paragraph = div.innerHTML += '<p>First paragraph</p>';
