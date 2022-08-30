// function scope

let subject = "create video"

function createThink(subject) {
    /*
    if you do not have a paramentro defined
    the end result would be "study" because
    would disregard the variable -> subject
    that's global
    */
    
    subject = "study"
    return subject
}


console.log(createThink(subject)) 
console.log(subject)