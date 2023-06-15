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
# output=story,story-teller,translator
# process=create a class;create the constructor,pass in the attributes,
# create methods and pass in the conditions
class ancestralStrories:
    def __init__(self,length,moral_lessons,age_group):
        self.length=length
        self.moral_lessons=moral_lessons
        self.age_group=age_group
        self.story=[]
    def Story(self):
        if self.story=="oral" and self.story_teller=="old":
            return f"the story was given to childern aged {self.age_group}"
        elif self.story=="written" and self.story_teller=="teenage":
            return f"the story was written for children aged {self.age_group}"
        else :return f" no story"
    def storyTeller(self):
        if self.story.teller=="youth" and self.length=="short":
            return f"the story was {self.length}"
        elif self.story_teller=="old" and self.length=="long":
            return f"the story was {self.length} "
        else: return f" no story teller"
    def Translator(self):
        if self.age_group=="children" and self.story_teller=="learnt":
            return f"the translator was for {self.age_group}"
        else :return f"no translator"
    ancestralStrories=Story("oral")
    print(ancestralStrories)

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

class Recipe:
    def __init__(self,ingredients,preparation_time,cooking_method,nutritional_information):
        self.ingredients=ingredients
        self.nutritional_information=nutritional_information
        self.cooking_method=cooking_method
        self.preparation_time=preparation_time
    def recipes(self):
            if self.ingredients=="chillie" and self.cooking_method=="boiling" and self.nutritional_information=="healthy" and self.preparation_time=="morning":
                print({f"the food was moroccanRecipe"})
            elif self.cooking_method=="roasting" and self.ingredients=="meat" and self.nutritional_information=="healthier" and self.preparation_time=="late":
                print({f"the food was ethiopianRecipe"})
            else:
                self.cooking_method=="mix" and self.ingredients=="floor" and self.nutritional_information=="low" and self.preparation_time=="evening"
            print({f"the food was nigerianRecipe"})
    recipes1=recipes()
    print(recipes1)

# **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to
# 
# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.