const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<>.?/';

let passwordButton = document.querySelector(".password-btn");
let passcodeExhibit0ne = document.querySelector(".passcode-1");
let passcodeExhibitTwo = document.querySelector(".passcode-2");
let password = "";
let passwordTwo = "";



function generatePasswords() {
    setPasswordLength();
    getRandomNumberOne(15);
    
    getRandomNumberTwo(15);
}
function getRandomNumberOne(num){
    let characterLength = characters.length
    for(let i = 0; i < num ; i++){
        password += characters.charAt(Math.floor(Math.random() * characterLength))
        
    }
return passcodeExhibit0ne.textContent = password;
    
    
}
//result += characters.charAt(Math.floor(Math.random() * charactersLength));



function getRandomNumberTwo(num2) {
    let characterLength = characters.length;
    for(let j = 0; j < num2; j ++ ) {
        passwordTwo += characters.charAt(Math.floor(Math.random() * characterLength ));
        
    }
    return passcodeExhibitTwo.textContent = passwordTwo;
    
}


function copyTextOne (){
    
    passcodeExhibit0ne.value = password;
   
    
    navigator.clipboard.writeText(password);
    alert("Password is copied");
}

function copyTextTwo() {
    passcodeExhibitTwo.value = passwordTwo;
    navigator.clipboard.writeText(passwordTwo);
    alert("Password is copied");
}

function setPasswordLength(){
   if (password.length == 15) {
    generatePasswords() = null;
   }
}