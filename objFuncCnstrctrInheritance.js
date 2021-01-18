// creating object using function constructor with inheritance
var Person = function (name, job, dateOfBirth) {
  this.name = name;
  this.job = job;
  this.yearOfBirth = dateOfBirth;
}; // 1) creating object using function constructor

var calcAge = function () {
  var age = 2021 - this.yearOfBirth;
  return age;
};
Person.prototype.calcAge = calcAge; // 2) here we are using the above function. Here we use prototype property for inheritance, now Person can inherit calcAge and we don't need to write calcAge funcition if we have more than one object like Person

var vikas = new Person("Vikas", "Soldier", 1995);
var topi = new Person("Topi", "Engineer", 1992);

console.log(vikas.calcAge());
console.log(topi.calcAge());

var Friends = function (name, dateOfBirth, hobby) {
  this.Name = name;
  this.yearOfBirth = dateOfBirth;
  this.Hobby = hobby;
};

var savvy = new Friends("Savvy", 1995, "Badminton");
var abhi = new Friends("Abhi", 1985, "Music");

Friends.prototype.calcAge = calcAge; // 3) New object is using the above calAge function.

console.log(savvy.calcAge());
console.log(abhi.calcAge());
console.log(savvy.Name, savvy.Hobby);
