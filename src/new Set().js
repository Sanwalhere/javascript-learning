//--------------------------------------------------|new Set() in JavaScript|-----------------------------------------------

//--- It contains only unique values, the duplicate values will not be appeared:

let array = [1, 2, 3, 4, 5];

let object = new Set(array);
object.add({ 1: "a" });
object.add(6);
object.add("Hi");
object.add("Bhai");
object.delete(6);
console.log(object.has("Bhai"));
console.log(object);

object.forEach((element) => {
  if (typeof element === "object") {
    console.log(element);
  }
});

object.clear();
console.log(object);
