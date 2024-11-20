// // Code your solutions in this file
let writeCards = ( array, event ) => {
    let count = 0;
    let newArray = []
    for (var i = 0; i < array.length; i++ ){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        count += 1;
    };
    return newArray;

};

let countDown = (number) => {
    while ( number >= 0 ) {
        console.log(number);
        number -= 1;
        
    }
};
countDown(10)


