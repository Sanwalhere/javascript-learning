//--------------------------------------------------|String Methods|----------------------------------------------------------

let text = '  Hello my name is Sanwal, and I\'m "Photoshop Artist"  ';
let text2 = "Hello,my name is;Sanwal, and-Im_Photoshop,Artist";
let txt = "sanwal sanwal";
console.log(txt.lastIndexOf("sanwal"));
console.log(text);
console.log(text.includes("Sanwal"));
console.log(text.startsWith(" "));
console.log(text.endsWith(" "));
console.log(text.indexOf("Sanwal"));
console.log(text.replace("Sanwal", "Ali"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.length);
console.log(text.split(" "));
console.log(text2.split(/[,;_-]/));

const str = "Hello World";
console.log(str);

const length = str.length;
console.log(length);

const newStr = str.concat(" Welcome");
console.log(newStr);

const substr = str.substr(7, 5);
console.log(substr);

const indexOfW = str.indexOf("W");
console.log(indexOfW);

const lastIndexOfl = str.lastIndexOf("l");
console.log(lastIndexOfl);

const replacedStr = str.replace("World", "Universe");
console.log(replacedStr);

const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr);

const trimmedStr = "   Some whitespace   ";
const trimmedResult = trimmedStr.trim();
console.log(trimmedResult);

const splitStr = "apple,orange,banana";
const splitArr = str.split(" ");
console.log(splitArr);

const charAt3 = str.charAt(3);
console.log(charAt3);

const charCodeAt3 = str.charCodeAt(3);
console.log(charCodeAt3);

const includesWorld = str.includes(" World");
console.log(includesWorld);

const startsWithHello = str.startsWith("Hellow");
console.log(startsWithHello);

const endsWithWorld = str.endsWith("World");
console.log(endsWithWorld);

const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

const text1 = "Hello my name is Sanwal, I'm doing Experiment, on string";
let modified = text.replaceAll(" ", "");
let modified2 = modified.replaceAll(",", "");
console.log(modified);
console.log(modified2);
