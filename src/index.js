//const title1 = document.getElementById("title");
//console.log(title1);
//const container1 = document.querySelector(".container");
//console.log(container1);
const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;
walk();
