// let str1 = "HelloWorld";
// let str2 = "Hello World 2";

//string interpolation is used to inject the value
// let str3 = console.log(`Hi, ${str1}`);

// let str4 = String("Javascript");
// console.log(str4);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// let num1, num2, num3; //declaration
// num1 = num2 = num3 = 4 + 4; //assign
// console.log(num1);

// String Methods
// console.log(Object.getOwnPropertyNames(String.prototype));

// let myString = "Hello World";
// let string2 =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quo et laborum expedita modi ut saepe nostrum vitae possimus asperiores?";

// length : to check the length of the string
// console.log(myString.length);

// charAt : returns the character at the specified index(only positive)
// console.log(myString.charAt(100)); //""
// console.log(string2.charAt(20));

// At(-ve and +ve) - ES2022
// console.log(myString.at(-1));
// console.log(myString.at(100)); //undefined

//toUpperCase and toLowerCase

// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());

// 1 to 10, you name
//                        Sharat

// prompt("enter your name");

// let wordsWithSpace = "        Hello";
// trim - removes unwanted space
// console.log(wordsWithSpace.trim());
// console.log(wordsWithSpace);

// let text = "javascript";

// let editedText = text.slice(4, 6);
// let editedText2 = text.slice(-5);
// let editedText3 = text.substring(7, 0);

// console.log(editedText);
// console.log(editedText3);
// console.log(text);

// const text = "Hello World Hello World Hello World";

// console.log(text.replaceAll("World", "Earth"));

// let text = "javascript ljlfjalje ljauawoejlj  oaorll";

// let includedText = text.includes("z");
// console.log(includedText);

// console.log(text.startsWith("afljaljf"))
// console.log(text.endsWith("t"))

// const myText =
//   "Shivani is good girl| She is good in Studies| She is very innocent girl.";

// console.log(myText.split("|"));

// reverse

// const newText = "Abhinav";

// console.log(newText.reverse());

// concat
// const text1 = "Hello";
// const text2 = " World";

// console.log(text1 + text2);
// console.log(text1.concat(text2));

// Shiva ->> S-h-i-v-a
// let hisName = "Shiva";

// let edited = hisName.split("");
// console.log(edited);
// console.log(edited.reverse());
// console.log(edited.join(""));
// console.log(edited);

const MaskedNumber = (str) => {
  str = str.trim();
  let strLength = str.length;

  if (strLength <= 4) {
    return str;
  }
  const maskValue = "*".repeat(strLength - 4);
  const slicedValue = str.slice(0, 4);

  //   return maskValue + slicedValue;
  //   return maskValue.concat(slicedValue);
  return slicedValue.concat(maskValue);
};

console.log(MaskedNumber("        9779797     "));
console.log(MaskedNumber("  javascript     "));
console.log(MaskedNumber("    r     "));
