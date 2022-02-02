// faranezz

function showVerticalMessage (message) {
    let firstLetter = message[0].toUpperCase();
    let fullMessage = firstLetter + message.slice(1,10);
    
    for(let key of fullMessage) {
        console.log(key);
    };
};
showVerticalMessage('Марафон');