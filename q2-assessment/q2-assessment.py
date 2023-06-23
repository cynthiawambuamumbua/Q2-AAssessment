# **Ancestral Stories:** In many African cultures, 
# the art of storytelling is passed
# down from generation to generation. Imagine you're 
# creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.

# input=length,moral-lessons,age-group,story
# output=story_objects,story-teller_objects,translator_objects
# process=create a class Story,storyteller and translator;pass in the attributes that inherits from the class
class Story:
    def __init__(self,story_length,moral_lessons,age_group,title):
        self.story_length=story_length
        self.moral_lessons=moral_lessons
        self.age_group=age_group
        self.title = title
    def display_details(self):
        print(f"{self.title}is a story for childern who are {self.age_group} years old.It is {self.story_length} long and has {self.moral_lessons} moral lessons")
        
class StoryTeller(Story):
    def __init__(self,community_origin,storyteller_name,story_length,moral_lessons,age_group,tittle):
        super().__init__(story_length,moral_lessons,age_group,tittle)
        self.community_origin = community_origin
        self.storyteller_name = storyteller_name

class Translator(Story):
    def __init__(self, title,story_length, moral_lessons, age_group,origin_language,new_language):
        super().__init__(story_length, moral_lessons, age_group, title)
        self.origin_language=origin_language
        self.new_language=new_language


story = Story(10, 3, 7, "The hare and elephant")
story.display_details()

storyteller = StoryTeller("Kamba", "Cynthia Mumbua", 12, 4, 10, "How the hare was clever than elephant")
print(f"{storyteller.storyteller_name} from {storyteller.community_origin} tells the story of {storyteller.title}.")
storyteller.display_details()

translator = Translator("Clever ", "Swahili", "The Hare and the elephant", 8, 2, 12)
print(f"The story {translator.title} which is {translator.story_length} long and has {translator.moral_lessons} moral lessons originally in {translator.origin_language} has been translated to {translator.new_language}.")
translator.display_details()
        
    
# q2
# **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.
#  input=recipes(ingredients,preparation time,cooking method,nutritional information)
# output=types of recipes
# process=create a class Recipe,pass in the attributes,create methods and their subclasses

# class Recipe:
#     def __init__(self,ingredients,preparation_time,cooking_method,nutritional_information):
#         self.ingredients=ingredients
#         self.nutritional_information=nutritional_information
#         self.cooking_method=cooking_method
#         self.preparation_time=preparation_time
#     def recipes(self):
#             if self.ingredients=="chillie" and self.cooking_method=="boiling" and self.nutritional_information=="healthy" and self.preparation_time=="morning":
#                 print({f"the food was moroccanRecipe"})
#             elif self.cooking_method=="roasting" and self.ingredients=="meat" and self.nutritional_information=="healthier" and self.preparation_time=="late":
#                 print({f"the food was ethiopianRecipe"})
#             else:
#                 self.cooking_method=="mix" and self.ingredients=="floor" and self.nutritional_information=="low" and self.preparation_time=="evening"
#             print({f"the food was nigerianRecipe"})
#     recipes1=recipes()
#     print(recipes1)

# **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to
# 
# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.


# input=species,characteristics,behaviours
# output=different species,different behaviours
# process=create class Animals,create constructor,create methods
# class Animals:
#     def __init__(self,species,characteristics,behaviours):
#         self.species=species
#         self.characteristics=characteristics
#         self.behaviours=behaviours
#     def different_species(self):
#         if self.species=="predators" and self.behaviours=="migration":
#             print({f"the {self.species} will {self.behaviours} from one point to another"})
#         elif self.species=="preys" and self.characteristics=="stay":
#             print({f"the {self.species} will{self.characteristics}"})
#         else:print({"no predators nor preys"})

#     def predators(self):
#         if self.species=="predators" and self.behaviours=="migration":
#             print({f"the {self.species} will {self.behaviours} from one point to another"})
#         elif self.species=="preys" and self.characteristics=="stay":
#             print({f"the {self.species} will{self.characteristics}"})
#         else:print({"no predators nor preys"})
#     def preys(self):
#         if self.species=="predators" and self.behaviours=="migration":
#             print({f"the {self.species} will {self.behaviours} from one point to another"})
#         elif self.species=="preys" and self.characteristics=="stay":
#             print({f"the {self.species} will{self.characteristics}"})
#         else:print({"no predators nor preys"})
#     preys1=different_species("zebras")
#     print(preys1)
