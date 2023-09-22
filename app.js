function getAllBooks(...note){
    let result = [];
    let another = [];
    for(let book of note){
        if (book.match('y')){
            result.push(book)
        }else{
            another.push(book)
        }
    }
    console.log(result)
    console.log(another)
}
getAllBooks('Robbin Good', 'Garry Potter', 'Hobbits','Romeo and Julieta','Lolly','Sherlock Holm','Gone with the Wind','The Great Gatsby','The Odyssey by Homer')

const calculate = document.querySelector('#calculate')
calculate.addEventListener('click',() => {
    calculator()
})
function calculator() {
    const firstNum = Number(document.querySelector('#first_num').value)
    const secondNum = Number(document.querySelector('#second_num').value)
    const operators = document.querySelector('#operators').value
    let result;
    if (operators === '/' && secondNum === 0) {
        document.getElementById('result').innerHTML = '<span class="error">Error</span>';
        document.getElementById('result').style.color ='red'
        return;
    }

    switch(operators) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '=':
            result = firstNum === secondNum;
            break;
        default:
            result = 'Ошибка';
            break;
    }
    document.getElementById('result').textContent = result;
}
