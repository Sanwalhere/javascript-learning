//--------------------------------------------------|Mixin Pattern|------------------------------------------------------------

const canWalk = { walk: () => console.log("walk") };
const canSwim = { swim: () => console.log("swim") };
const canEat = { eat: () => console.log("eat") };

function Person() {}
function GoldFish() {}

function mixin(target, ...args) {
  Object.assign(target.prototype, ...args);
}
mixin(Person, canEat, canWalk);
mixin(GoldFish, canEat, canSwim);

const ali = new Person();
const fishu = new GoldFish();
console.log(ali, fishu);
