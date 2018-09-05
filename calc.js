let output='';
let saved_output='';
let operator='';
let textarea=document.querySelector('textarea')
console.log(textarea)

function handleInput(text) {
  switch(text) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      output+=text;
      textarea.innerText=output;
      break;
    case 'C':
      output=''
      textarea.innerText=output;
      break;
    case '<-':
      output=output.substr(0,output.length-1);
      textarea.innerText=output;
      break;
    case '+':
    case '-':
    case '/':
    case 'x':
      saved_output=output;
      output=''
      textarea.innerText=output;
      operator=text;
      console.log(saved_output+operator);
      break;
    case '=':
      console.log(saved_output + operator + output);

      switch (operator) {
        case '+':
          output=parseInt(output) + parseInt(saved_output);
          break;
        case '-':
          output=parseInt(output) - parseInt(saved_output);
          break;
        case 'x':
          output=parseInt(output) * parseInt(saved_output);
          break;
        case '/':
          output=parseInt(saved_output) / parseInt(output);
          break;
      }
      textarea.innerText=output;
      output='';
      break;
    default :
      console.log(`unrecognized text ${text}`)
  }
}

let button = document.querySelectorAll('button');
console.log(button)
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click',function(event){
//  alert(event.target.innerText);
  console.log(event.target.innerText);
  handleInput(event.target.innerText);
})}
