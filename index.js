var cowsay = require("cowsay");
const userInfo = require('./userInformation');


console.log(cowsay.say({
    text: `Hello I m ${userInfo.name} from ${userInfo.campus}!`,
    e: "oO",
    T: "U "
}));




// const cowsay = require('./userInformation');

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));
// cowsay()