// **Ancestral Stories:** In many African cultures, 
//  the art of storytelling is passed
//  down from generation to generation. Imagine you're 
// #creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// input=length,moral-lessons,age-group
// output=story,story-teller,translator
// process=create a class;create the constructor,pass in the attributes,
//  create methods and pass in the conditions
class ancestralStories{
    constructor(length,moralLessons,ageGroup){
        this.length=length
        this.moralLessons=moralLessons
        this.ageGroup=ageGroup
    }
    Story(){
        if(this.story==="short" && this.moralLessons==="many"){
            return "the story was given by the aged"
        }
        else{
            if(this.story==="long" && this.moralLessons==="little"){
                return "the story was given by the youth"
            }
        }
    }
    storyTeller(){
        if(this.ageGroup==="children" && this.length==="short"){
            return "the story was given by the aged"
        }
        else{
            if(this.ageGroup==="youth" && this.moralLessons==="long"){
                return "the story was given by the youth"
            }
        }
    }
    Translator(){
    if(this.ageGroup==="children" && this.length==="short"){
        return "the story was given by the aged"
    }
    else{
        if(this.ageGroup==="youth" && this.moralLessons==="long"){
            return "the story was given by the youth"
        }
    }
}
}
 const story1=new ancestralStories("long","many",12)
console.log(story1)


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


class Recipe{
    constructor(ingredients,preparation_time,cooking_method,nutritional_information ){
        this.ingredients=ingredients
        this.nutritional_information=nutritional_information
       this.cooking_method=cooking_method
        this.self.preparation_time=preparation_time
    }
    recipes(){
        if (this.ingredients=="chillie" && this.cooking_method=="boiling" && this.nutritional_information=="healthy" && this.preparation_time=="morning"){
            console.log("the food is moroccanRecipe")
        }
         else if( this.cooking_method=="roasting" && this.ingredients=="meat" && this.nutritional_information=="healthier" && this.preparation_time=="late"){
            console.log("the food was ethiopianRecipe")
         }
         
            else{
                console.log("the food was nigerianRecipe")
    }
    
}
    
}
 const recipe1=new Recipe("any","noon","boiling","healthy")
 console.log(recipe1)

//  **Wildlife Preservation:** You're a wildlife conservationist working on a
//  program to track different species in a national park. Each species has its own
//  characteristics and behaviors, such as its diet, typical lifespan, migration
//  patterns, etc. Some species might be predators, others prey. You'll need to
 
//  create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//  these classes might relate to each other through inheritance.
class Animals{
    constructor(species,characteristics,behaviours){
        this.species=species
        this.characteristics=characteristics
        this.behaviours=behaviours
    }
    different_species(){
        if (this.species=="predators" && this.behaviours=="migration"){
            console.log(`the ${self.species} will ${self.behaviours} from one point to another`)
        }
    else if(this.species=="preys"&&this.characteristics=="stay"){
        console.log(`the {self.species} will{self.characteristics}`)
    }
    else{
        console.log("no predators nor preys")
     
        }
    }
    predators(){
        if (this.species=="predators" && this.behaviours=="migration"){
            console.log(`the ${self.species} will ${self.behaviours} from one point to another`)
        }
    else if(this.species=="preys"&&this.characteristics=="stay"){
        console.log(`the {self.species} will{self.characteristics}`)
    }
    else{
        console.log("no predators nor preys")
     
        }
    }
    prey(){
        if (this.species=="predators" && this.behaviours=="migration"){
            console.log(`the ${self.species} will ${self.behaviours} from one point to another`)
        }
    else if(this.species=="preys"&&this.characteristics=="stay"){
        console.log(`the {self.species} will{self.characteristics}`)
    }
    else{
        console.log("no predators nor preys")
     
        }
    }
}
prey1=new Animals()
console.log({prey1})