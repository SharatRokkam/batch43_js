let regex = /common/g;
// g - global
let text = "Hello world is common program, common used everywhere common";

// console.log(text.replaceAll("common", "rare"));
console.log(text.replace(regex, "rare"));
