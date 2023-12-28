//--------------------------------------------------|Composition Exercise|-----------------------------------------------------

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItems = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    return `<select>
      ${this.items.map((item) => `<option>${item}</option>`).join("")}
      </select>`;
  };
}

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

HtmlSelectElement.prototype = new HtmlElement();

const e = new HtmlSelectElement();
console.log(e);
const s = new HtmlSelectElement();
console.log(s);

function HtmlImageElement() {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
