const message = (["Bob", "Charles", "Joe"], "Thank You");

function writeCards(message, string) {
    let newArray=[]
    for (let i = 0; i < message.length; i++) {
    newArray.push(`Thank you, ${message[i]}, for the wonderful ${string} gift!`);
    debugger;
  }
    return newArray ;
}

function countDown(number){
    while (number >= 0) {
console.log(number)
--number 
    }
} 
