/* 
nome repo: js-pwdgen-wannabe
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


//INPUT
const userName = prompt("Qual'è il tuo nome?");
console.log(userName, typeof(userName));

const userSurname = prompt("Qual'è il tuo cognome?");
console.log(userSurname, typeof(userSurname));

const favColor = prompt("Qual'è il tuo colore preferito?");
console.log(favColor, typeof(favColor));


//PROCESSING
//transform in lowercase
const userNameLower = userName.toLowerCase();
const userSurnameLower = userSurname.toLowerCase();
const favColorLower = favColor.toLowerCase();
console.log(favColorLower, userNameLower, userSurnameLower);

//combine 
const userPasswordLower = `${userNameLower}${userSurnameLower}${favColorLower}21`;
console.log(userPasswordLower, typeof(userPasswordLower));


//OUTPUT
document.getElementById("user-password").innerHTML = `Questa è la tua password: ${userPasswordLower}`