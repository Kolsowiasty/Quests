const myObject = {
  numberClass: 5,
  booleanClass: true,
  arrayClass: [2, 4, 6],
  stringClass: "In string",


  displayClass(thing: string) {

    const self = this;

    setTimeout(function () {
      console.log(`ClassQuantity ${thing}: ${self[thing]}`);
    },
  },
};

myObject.displayClass("numberClass");
