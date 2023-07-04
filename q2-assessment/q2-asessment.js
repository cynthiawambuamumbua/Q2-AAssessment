// **Ancestral Stories:** In many African cultures, 
//  the art of storytelling is passed
//  down from generation to generation. Imagine you're 
// #creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.


//  input=length,moral-lessons,age-group,story
//  output=story_objects,story-teller_objects,translator_objects
// process=create a class Story,storyteller and translator;pass in the attributes that inherits from the class
class Story {
  constructor(story_length, moral_lessons, age_group, title) {
    this.story_length = story_length;
    this.moral_lessons = moral_lessons;
    this.age_group = age_group;
    this.title = title;
    if (this.age_group >= 7) {
      this.origin_language = "English";
    } else {
      this.origin_language = "French";
    }
    if (this.moral_lessons == 2) {
      this.new_language = "Swahili";
    } else {
      this.new_language = "Zulu";
    }
  }
  display_details() {
    console.log(`${this.title} is a story for children who are ${this.age_group} years old. It is ${this.story_length} pages long and has ${this.moral_lessons} moral lessons. It was originally written in ${this.origin_language} and has been translated to ${this.new_language}.`);
  }
}

class StoryTeller extends Story {
  constructor(community_origin, storyteller_name, story_length, moral_lessons, age_group, title, story_limit) {
    super(story_length, moral_lessons, age_group, title);
    this.community_origin = community_origin;
    this.storyteller_name = storyteller_name;
    this.story_limit = story_limit;
    if (this.story_length < 10) {
      this.language = "English";
    } else {
      this.language = "Swahili";
    }
  }
  display_details() {
    console.log(`${this.storyteller_name} from ${this.community_origin} tells the story of ${this.title} in ${this.language} and the story limit is ${this.story_limit}.`);
  }
}

class Translator extends Story {
  constructor(title, story_length, moral_lessons, age_group, origin_language, new_language) {
    super(story_length, moral_lessons, age_group, title);
    this.origin_language = origin_language;
    this.new_language = new_language;
    if (this.age_group < 10) {
      this.language_level = "Beginner";
    } else {
      this.language_level = "Intermediate";
    }
  }
  display_details() {
    console.log(`The story '${this.title}' which is ${this.story_length} pages long and has ${this.moral_lessons} moral lessons was originally written in ${this.origin_language} and translated to ${this.new_language}`)

  }
}
const story1 = new Story(10, "hare is clever", 10, "hare and hyena")
story1.display_details()
// q2
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

// input=ingredients,preparation time,cooking method,nutritional information
// output=different types of recipes(moroccanRecipe,EthiopianRecipe,NigerianRecipe)
//  process=create a class Recipe,create subclasses,pass in the attributes,create methods and their subclasses
class Recipe {
  constructor(country) {
    this.country = country;
  }
   prepare_recipe() {
    if (this.country === "Morocco") {
      this.moroccan_recipe();
    } else if (this.country === "Ethiopia") {
      this.ethiopian_recipe();
    } else if (this.country === "Nigeria") {
      this.nigerian_recipe();
    } else {
      console.log("Recipe not available.");
    }
  }
  moroccan_recipe() {
    console.log("Make a Moroccan recipe.");
  }
   ethiopian_recipe() {
    console.log("Make an Ethiopian recipe.");
  }
   nigerian_recipe() {
    console.log("Make a Nigerian recipe.");
  }
}
 const country = prompt("Enter a country: ");
const recipe = new Recipe(country);
recipe.prepare_recipe();
 if (country === "Nigeria") {
    console.log("The Nigerian recipe is:");
    console.log("Step 1: Gather ingredients");
    console.log("Step 2: Season the chicken with spices and let it marinate.");
    console.log("Step 3:  Add onions, garlic, and peppers in a pot.");
    console.log("Step 4: Add the chicken");
    console.log("Step 5: Stir");
    console.log("Step 6: Serve.");
    console.log("It takes 60 mins.");
}
else if(country === "Ethiopia"){
    console.log("The Ethiopian recipe is:");
    console.log("Step 1: Gather ingredients");
    console.log("Step 2: Season the chicken with spices and let it marinate.");
    console.log("Step 3:  Add onions, garlic, and peppers in a pot.");
    console.log("Step 4: Add the chicken");
    console.log("Step 5: Stir");
    console.log("Step 6: Serve.");
    console.log("It takes 60 mins.");
}
else if(country === "Moroccan"){
    console.log("The Ethiopian recipe is:");
    console.log("Step 1: Gather ingredients");
    console.log("Step 2: Season the chicken with spices and let it marinate.");
    console.log("Step 3:  Add onions, garlic, and peppers in a pot.");
    console.log("Step 4: Add the chicken");
    console.log("Step 5: Stir");
    console.log("Step 6: Serve.");
     console.log("It takes 60 mins.");
 }
 else{
     console.log("Recipe is unavailable");
 }

//  **Wildlife Preservation:** You're a wildlife conservationist working on a
//  program to track different species in a national park. Each species has its own
//  characteristics and behaviors, such as its diet, typical lifespan, migration
//  patterns, etc. Some species might be predators, others prey. You'll need to
 
//  create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//  these classes might relate to each other through inheritance.
class Species {
  constructor(name, diet, lifespan) {
      this.name = name;
      this.diet = diet;
      this.lifespan = lifespan;
  }

  getName() {
      return this.name;
  }

  getDiet() {
      return this.diet;
  }

  getLifespan() {
      return this.lifespan;
  }
}
class Predator extends Species {
  constructor(name, diet, lifespan, preyList) {
      super(name, diet, lifespan);
      this.preyList = preyList;
  }

  getPreyList() {
      return this.preyList;
  }
}
class Prey extends Species {
  constructor(name, diet, lifespan, predatorList) {
      super(name, diet, lifespan);
      this.predatorList = predatorList;
  }

  getPredatorList() {
      return this.predatorList;
  }
}
const cheetah = new Predator("cheetah", "Carnivore", 15, ["Antelope", "Gazelle"]);
const antelope = new Prey("antelope", "Herbivore", 20, ["leopard", "Hyena"]);
console.log(cheetah.getName());
console.log(cheetah.getDiet());
console.log(cheetah.getLifespan());
console.log(cheetah.getPreyList());
console.log(antelope.getName());
console.log(antelope.getDiet());
console.log(antelope.getLifespan());
console.log(antelope.getPredatorList());

// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.

// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
class Product{
  constructor(name,price,quantity){
    this.name = name
    this.price = price
    this.quantity = quantity
  }
  calculateTotalPrice(){
    let totalPrice = this.quantity * this.price;
    return `The total amount for the products is ${totalPrice}`
  }
 }
 let books= new Product("books",80.00,10)
 let rulers= new Product("rulers",30.00,5)
 let sharpeners= new Product("sharpeners",15.00,10)
 console.log(books.calculateTotalPrice());
 console.log(rulers.calculateTotalPrice());
 console.log(sharpeners.calculateTotalPrice());

//  Implement a class called Student with attributes for name, age, and grades (a
  // list of integers). Include methods to calculate the average grade, display the
  // student information, and determine if the student has passed (average grade >=
  // 60). Create objects for the Student class and demonstrate the usage of these
  // Methods.
  class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
 
    display_info() {
      return "Hello, I am ${this.name} and I am ${this.age} years old.";
    }
    calculate_grade() {
      let total_grades = 0;
      for (let grade of this.grades) {
        total_grades += grade;
      }
      const ave_grade = total_grades / this.grades.length;
      return ave_grade;
    }
    pass_mark() {
      const ave_grade = this.calculate_grade();
      if (ave_grade >= 60) {
        return `Congratulations, ${this.name}! You have passed.`;
      } else {
        return `${this.name}, you have not attained the passmark. Work harder! `;
      }
    }
  }   

njeri =new Student("Njeri",24,[40,50,80,72,48,90])
console.log(njeri.display_info())
console.log(njeri.calculate_grade())
console.log(njeri.pass_mark())

// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations
class FlightBooking {

    constructor(flights) {
        this.flights = flights;
    }

    searchFlights(destination, date) {
        for (let flight of this.flights) {
            if (flight.destination === destination && flight.date === date) {
                return flight;
            }
        }
        return null;
    }

    reserveSeat(flight, passengerName, passengerEmail) {
        if (!this.flights.includes(flight)) {
            throw new Error("Flight not found");
        }
        if (flight.isFull()) {
            throw new Error("Flight is full");
        }
        flight.passengers.push({
            "name": passengerName,
            "email": passengerEmail
        });
    }

    managePassengerInformation(flight, passengerName, field, newValue) {
        for (let passenger of flight.passengers) {
            if (passenger.name === passengerName) {
                if (field === "name") {
                    passenger.name = newValue;
                } else if (field === "email") {
                    passenger.email = newValue;
                } else {
                    throw new Error("Invalid field");
                }
            }
        }
    }

    // generateBookingConfirmation(flight) {
    //     return `Your booking for flight ${flight.id} has been confirmed.\n` +
    //         `Departure: ${flight.departureAirport}\n` +
    //         `Arrival: ${flight.arrivalAirport}\n` +
    //         `Date: ${flight.date}\n` +
    //         `Passengers:\n` +
    //         "\n".join([`${passenger.name} (${passenger.email})` for (passenger in flight.passengers]));
    // }

}


// Create a LibraryCatalog class that handles the cataloguing and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.
class Book {
  constructor(title, author, copies) {
    this.title = title;
    this.author = author;
    this.copies = copies;
  }

  displayDetails() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Copies Available: ${this.copies}`);
  }
}

class LibraryCatalog {
  constructor() {
    this.books = [];
  }

  addBook(title, author, copies) {
    let book = new Book(title, author, copies);
    this.books.push(book);
  }

  searchByTitle(title) {
    for (let book of this.books) {
      if (book.title.toLowerCase() === title.toLowerCase()) {
        return book;
      }
    }
    return null;
  }

  searchByAuthor(author) {
    for (let book of this.books) {
      if (book.author.toLowerCase() === author.toLowerCase()) {
        return book;
      }
    }
    return null;
  }

  displayAllBooks() {
    for (let book of this.books) {
      book.displayDetails();
    }
  }
}

let catalog = new LibraryCatalog();

catalog.addBook("To Kill a Mockingbird", "Harper Lee", 2);
catalog.addBook("1984", "George Orwell", 3);
catalog.addBook("Pride and Prejudice", "Jane Austen", 1);


let book = catalog.searchByTitle("To Kill a Mockingbird");
if (book) {
  book.displayDetails();
} else {
  console.log("Book not found");
}

book = catalog.searchByAuthor("George Orwell");
if (book) {
  book.displayDetails();
} else {
  console.log("Book not found");
}

catalog.displayAllBooks();

