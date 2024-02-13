const buttonYes = document.querySelector('#yes');
const buttonNo = document.querySelector('#no');
const text = document.querySelector('#text');


console.log(buttonYes);
console.log(buttonNo);
console.log(text);






const whenTheySayNo = () => {
    const answers = [ 'Are you sure?' , 'You have not changed your mind?', 'This is your last chance!', `Well, stop showing off and press "YES"`];
    const update = text.innerText;
    const indexUpdate = answers.indexOf(update);
    const nextText = (indexUpdate + 1) % answers.length;
    text.innerText = answers[nextText];
}

const whenTheySayYes = () => {
    text.innerHTML = 'WOOOOOOOOOOHHHHHHOOOOOOOOOOOOOO I love you💝'
}


