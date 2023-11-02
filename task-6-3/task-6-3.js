const head = document.head;

const body = document.createElement('body');
head.after(body);

const main = document.createElement('main');
main.classList = 'mainClass check item';
body.append(main);

const div = document.createElement('div');
div.id = 'myDiv';
main.appendChild(div);

const paragraph = div.innerHTML += '<p>First paragraph</p>';
