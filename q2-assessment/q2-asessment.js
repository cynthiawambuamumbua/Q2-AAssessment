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

// class StoryTeller extends Story {
//     constructor(title, moral_lesson, age_group, community_origin, storyteller_name, story_length) {
//       super(title, moral_lesson, age_group, story_length);
//       this.community_origin = community_origin;
//       this.storyteller_name = storyteller_name;
//     }
//   }
//   class Translator extends Story {
//     constructor(title, moral_lesson, age_group, story_length, origin_language, new_language) {
//       super(title, moral_lesson, age_group, story_length);
//       this.origin_language = origin_language;
//       this.new_language = new_language;
//     }
//   }
//   const story = new Story("The cat and the mouse", "Greediness", 5, "10 pages");
//   console.log(story.display_details());
//   const storyteller = new StoryTeller("The tortoise and the rabbit", "Friendship", 8, "English", "Lilian", 200);
//   console.log(storyteller.display_details());
//   console.log(`Storyteller Name: ${storyteller.storyteller_name}`);
//   console.log(`Community Origin: ${storyteller.community_origin}`);
//   const translator = new Translator("Africana", "diversity", 6, "20 pages", "swahili", "English");
//   console.log(translator.display_details());
//   console.log(`Origin Language: ${translator.origin_language}`);
//   console.log(`New Language: ${translator.new_language}`);


  class Story {
    constructor(story_length, moral_lessons, age_group, title) {
      this.story_length = story_length;
      this.moral_lessons = moral_lessons;
      this.age_group = age_group;
      this.title = title;
    }
    
    display_details() {
      console.log(`${this.title} is a story for children who are ${this.age_group} years old. It is ${this.story_length} long and has ${this.moral_lessons} moral lessons.`);
    }
  }
  
  class StoryTeller extends Story {
    constructor(community_origin, storyteller_name, story_length, moral_lessons, age_group, title) {
      super(story_length, moral_lessons, age_group, title);
      this.community_origin = community_origin;
      this.storyteller_name = storyteller_name;
    }
  }
  
  class Translator extends Story {
    constructor(title, story_length, moral_lessons, age_group, origin_language, new_language) {
      super(story_length, moral_lessons, age_group, title);
      this.origin_language = origin_language;
      this.new_language = new_language;
    }
  }
  
  const story = new Story(10, 3, 7, "The hare and elephant");
  story.display_details();
  
  const storyteller = new StoryTeller("Kamba", "Cynthia Mumbua", 12, 4, 10, "How the hare was clever than elephant");
  console.log(`${storyteller.storyteller_name} from ${storyteller.community_origin} tells the story of ${storyteller.title}.`);
  storyteller.display_details();
  
  const translator = new Translator("Clever", 8, 2, 12, "Swahili", "English");
  console.log(`The story '${translator.title}' which is ${translator.story_length} long and has ${translator.moral_lessons} moral lessons originally in ${translator.origin_language} has been translated to ${translator.new_language}.`);
  translator.display_details();
  
// q2
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

// input=recipes(ingredients,preparation time,cooking method,nutritional information)
// output=types of recipes
//  process=create a class Recipe,pass in the attributes,create methods and their subclasses


// class Recipe{
//     constructor(ingredients,preparation_time,cooking_method,nutritional_information ){
//         this.ingredients=ingredients
//         this.nutritional_information=nutritional_information
//        this.cooking_method=cooking_method
//         this.self.preparation_time=preparation_time
//     }
//     recipes(){
//         if (this.ingredients=="chillie" && this.cooking_method=="boiling" && this.nutritional_information=="healthy" && this.preparation_time=="morning"){
//             console.log("the food is moroccanRecipe")
//         }
//          else if( this.cooking_method=="roasting" && this.ingredients=="meat" && this.nutritional_information=="healthier" && this.preparation_time=="late"){
//             console.log("the food was ethiopianRecipe")
//          }
         
//             else{
//                 console.log("the food was nigerianRecipe")
//     }
    
// }
    
// }
//  const recipe1=new Recipe("any","noon","boiling","healthy")
//  console.log(recipe1)

//  **Wildlife Preservation:** You're a wildlife conservationist working on a
//  program to track different species in a national park. Each species has its own
//  characteristics and behaviors, such as its diet, typical lifespan, migration
//  patterns, etc. Some species might be predators, others prey. You'll need to
 
//  create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//  these classes might relate to each other through inheritance.
// class Animals{
//     constructor(species,characteristics,behaviours){
//         this.species=species
//         this.characteristics=characteristics
//         this.behaviours=behaviours
//     }
//     different_species(){
//         if (this.species=="predators" && this.behaviours=="migration"){
//             console.log(`the ${self.species} will ${self.behaviours} from one point to another`)
//         }
//     else if(this.species=="preys"&&this.characteristics=="stay"){
//         console.log(`the {self.species} will{self.characteristics}`)
//     }
//     else{
//         console.log("no predators nor preys")
     
//         }
//     }
//     predators(){
//         if (this.species=="predators" && this.behaviours=="migration"){
//             console.log(`the ${self.species} will ${self.behaviours} from one point to another`)
//         }
//     else if(this.species=="preys"&&this.characteristics=="stay"){
//         console.log(`the {self.species} will{self.characteristics}`)
//     }
//     else{
//         console.log("no predators nor preys")
     
//         }
//     }
//     prey(){
//         if (this.species=="predators" && this.behaviours=="migration"){
//             console.log(`the ${self.species} will ${self.behaviours} from one point to another`)
//         }
//     else if(this.species=="preys"&&this.characteristics=="stay"){
//         console.log(`the {self.species} will{self.characteristics}`)
//     }
//     else{
//         console.log("no predators nor preys")
     
//         }
//     }
// }
// prey1=new Animals()
// console.log({prey1})