const user = {
    username:'Tarun',
    price: 400,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
    }
}
user.welcomeMessage();
user.username = 'sam';
user.welcomeMessage();
console.log(this)

// function myName(){
//     console.log(this)
// }
// myName();

const addtwoName = (num1, num2) => {
return num1 + num2
}
console.log(addtwoName(3,9))

// const myArray = [100,200,300,500]
// myArray.forEach(()=>{})