let obj1 = {
  prop1: 1,
  show: function () {
    return `prop1:${this.prop1}`;
  },
};
let obj10 = {
  prop1: 10,
  prop2: 20,
  show: function () {
    return `prop1:${this.prop1}  prop2:${this.prop2}`;
  },
};
let assignObj = Object.assign({}, obj1, obj10, { prop3: 3, prop4: 4 });
console.log(assignObj);
console.log(assignObj.show());
