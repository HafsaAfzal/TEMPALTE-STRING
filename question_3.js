// template string
// Write a function that takes a tag name and some text and returns an HTML element
// with that tag and text using template strings.
function element(a,b){
    return(`<${a}>${b}</${a}>`)
}

let tag_name=prompt("Enter tag name : ");
let text = prompt("Enter text : ");
let result=element(tag_name,text);
console.log(result);

