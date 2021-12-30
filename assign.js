//1.Declare two variables: firstName and lastName. 1

//2.Assign the value "Kehinde" to firstName     2
let firstName = "Kehinde";
//3.Assign the value "Odetola" to   lastName   2
let lastName = "Odetola";

//4.Copy the value from firstName AND lastName to boss. i.e variable  boss should be equal to Kehinde Odetola  3
let boss = "Kehinde Odetola";
//5.Show the value of boss using alert .  2
alert(boss);
//6.Create a variable with the name of our planet. How would you name such a variable?  2
let earth = {
  numberOfContinets: 9,
  mostPopulatedContinent: "Asia",
};

//7.Create a variable to store the name of a current visitor to a website. How would you name that variable? 2

//8.create an array arr of 20 items in it 3
let statesInNigeria = [
  "Abia",
  "Anambra",
  "Bayelsa",
  "Benue",
  "Delta",
  "Edo",
  "Ekiti",
  "Enugu",
  "Ebonyi",
  "Gombe",
  "Imo",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
];

//9.output the items with positions in a  multiple of 5  in  array  arr      4
console.log(statesInNigeria[4]);
console.log(statesInNigeria[9]);
console.log(statesInNigeria[14]);
console.log(statesInNigeria[19]);

//10.create an dog Object with 4 properties.  2
let dog = {
  breed: "Siberian Husky",
  howOld: "8 months",
  hobby: "Barks",
  height: "2.5 feet",
};
//11.create an array of objects of 8  different animals and output 1 of each animal's properties 5
let collectionOfAnimals = [
  { name: "Goat", breed: "Alpine", howOld: "24 months", height: "2.5feet" },

  {
    name: "Dog",
    breed: "Siberian Husky",
    howOld: "9 months",
    hobby: "Barking",
    height: "2feet",
  },

  {
    name: "Cat",
    breed: "Ragdoll",
    howOld: "12 months",
    hobby: "hunting rats",
    height: "0.5foot",
  },

  { name: "Wolf", specie: "Red Wolf", howOld: "14 months" },

  {
    name: "Lion",
    weight: "220kg",
    height: "4.3feet",
  },

  { name: "Tigger", weight: "225kg", height: "4.3feet" },

  {
    name: "Pig",
    weight: "120kg",
    height: "2.1feet",
    interestingFact: "Can not Sweat",
  },

  { name: "Sheep", weight: "40kg", height: "1.5feet" },
];
console.log(collectionOfAnimals[0].breed);
console.log(collectionOfAnimals[1].breed);
console.log(collectionOfAnimals[2].hobby);
console.log(collectionOfAnimals[3].specie);
console.log(collectionOfAnimals[4].height);
console.log(collectionOfAnimals[5].weight);
console.log(collectionOfAnimals[6].interestingFact);
console.log(collectionOfAnimals[7].weight);

//12 Create a variable for ptpAmount and write a conditional statement using if and else for different cases of the PTP Amount; Have an output for any possible amount. (be creative here for the possible scenarios of PTP). 5

//13. Bonus question.. At Bfree Mentorship Programme Which team stands out as the best ? and why? 1
const Team = "frontend";
