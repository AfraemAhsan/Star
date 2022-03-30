//question 1
document.write("Star It Ltd <br/>".repeat(10));
//question 2

let data = { b: 5, d: 6, f: 3, 1: 4, 2: 2 };
let keys = [];
let values = [];
Object.entries(data).forEach(([key, value]) => {
  if (key != value) {
    document.write(keys + "<br/>");
    document.write(values + "<br/>");

    document.write(keys.push(key));

    document.write(values.push(value));
  }
});
console.log(keys, values);
