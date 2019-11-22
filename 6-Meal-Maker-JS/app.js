const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(input) {
      this._courses.appetizers = input;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(input) {
      this._courses.mains = input;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(input) {
      this._courses.desserts = input;
    },
    get courses() {
      return this._courses;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      //return an object dishes[name, price] 
      return dishes[Math.floor(Math.random()* dishes.length)];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert  = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `The appetizer is ${appetizer.name} that costs ${appetizer.price} dollars. The main is ${main.name} that costs ${main.price} dollars. The dessert is ${dessert.name} that costs ${dessert.price} dollars. The total cost for the meal is ${totalPrice.toFixed(2)} dollars.`
    },
  };
  
  menu.addDishToCourse('appetizers', 'Wontons', 8.90);
  menu.addDishToCourse('appetizers', 'Beef Skewers', 4.90);
  menu.addDishToCourse('appetizers', 'Chicken Skewers', 3.90);
  menu.addDishToCourse('mains', 'Steak', 20.90);
  menu.addDishToCourse('mains', 'Pho', 11.90);
  menu.addDishToCourse('mains', 'Ramen', 14.90);
  menu.addDishToCourse('desserts', 'Icecream', 6.90);
  menu.addDishToCourse('desserts', 'Bubble Tea', 7.90);
  menu.addDishToCourse('desserts', 'Cake', 9.90);
  console.log(menu.courses)
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  