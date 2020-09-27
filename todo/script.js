var form = document.createElement('form');
document.body.appendChild(form);

var input = document.createElement('input');
input.type = 'text';
input.name = 'valuer';
input.placeholder = 'what u gona do?';
form.prepend(input);

var button = document.createElement('button');
button.type = 'submit';
button.textContent = 'add to';
button.onclick = send;
form.append(button);

var list = document.createElement('ul');
list.type = 'disc';
form.after(list);


function send(e) {
    e.preventDefault();
    
    var deal = document.createElement('li');
    deal.innerText = input.value;
    list.append(deal);
    
    this.form.reset();
}

