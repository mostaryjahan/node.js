const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on('ring', () =>{
    console.log('end the classes')
})

schoolBell.on('ring', () =>{
    console.log('one more class')
})

schoolBell.on('broken', () =>{
    console.log('Oh no! class is not ended')
})

 schoolBell.emit("ring")
schoolBell.emit("broken")