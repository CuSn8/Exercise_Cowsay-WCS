const presentation = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Hello I'm ${presentation.firstName}, from ${presentation.campus}`,
    e: "$$",
    T: "U",
}));