const input = document.querySelector('input');
const btn = document.querySelector('button');
const h1 = document.createElement('h1');
document.body.appendChild(h1);

const randomMessageArr = ['You are a great person ', 'Continue looking forward ', 'May the stars watch over you ', 'Always look to improve ', 'You are the protagonist of your own life ', 'Be you ', 'Never give up on your dreams ', 'Life has its ups and downs ', 'Enjoy the little detours in life ', 'Opportunities work out best for those who are prepared ', 'Welcome ', 'Hope you are having a great day ', 'Be tranquil like the clouds on a good day ', 'Don\'t hide behind a mask, instead be yourself ', 'Your work should speak for itself '];

btn.addEventListener('click', generateMessage);

function generateMessage() {
    const index = Math.floor(Math.random() * randomMessageArr.length);
    const message = randomMessageArr[index];
    console.log(message);
    const generateHex = random();
    h1.innerText = message + input.value;
    h1.style.textAlign = "center";
    h1.style.color = generateHex;
}

function random() {
    return "#" + Math.random().toString().substr(-6);
}