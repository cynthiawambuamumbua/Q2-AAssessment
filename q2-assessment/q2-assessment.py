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
    def __init__(self, story_length, moral_lessons, age_group, title):
        self.story_length = story_length
        self.moral_lessons = moral_lessons
        self.age_group = age_group
        self.title = title
        if self.age_group >= 7:
            self.origin_language = "English"
        else:
            self.origin_language = "French"
        if self.moral_lessons == 2:
            self.new_language = "Swahili"
        else:
            self.new_language = "Zulu"

    def display_details(self):
        print(f"{self.title} is a story for children who are {self.age_group} years old. It is {self.story_length} pages long and has {self.moral_lessons} moral lessons. It was originally written in {self.origin_language} and has been translated to {self.new_language}.")

class StoryTeller(Story):
    def __init__(self, community_origin, storyteller_name, story_length, moral_lessons, age_group, title, story_limit):
        super().__init__(story_length, moral_lessons, age_group, title)
        self.community_origin = community_origin
        self.storyteller_name = storyteller_name
        self.story_limit = story_limit
        if self.story_length < 10:
            self.language = "English"
        else:
            self.language = "Swahili"
    def display_details(self):
        print(f"{self.storyteller_name} from {self.community_origin} tells the story of {self.title} in {self.language} and the story limit is {self.story_limit}.")

class Translator(Story):
    def __init__(self, title, story_length, moral_lessons, age_group, origin_language, new_language):
        super().__init__(story_length, moral_lessons, age_group, title)
        self.origin_language = origin_language
        self.new_language = new_language
        if self.age_group < 10:
            self.language_level = "Beginner"
        else:
            self.language_level = "Intermediate"

    def display_details(self):
        print(f"The story '{self.title}' which is {self.story_length} pages long and has {self.moral_lessons} moral lessons was originally written in {self.origin_language} and translated to {self.new_language} for {self.age_group}")

story1 = Story(10, "hare is clever", 10, "hare and hyena")
story1.display_details()

# q2
# **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.

#  input=unique_ingredients,preparation time,cooking method,nutritional information,country,name
# output=different types of recipes
# process=create a class Recipe,pass in the attributes,create methods and their subclasses

class Recipe:
   def __init__(self, country):
       self.country = country
   def recipe_preparation(self):
       if self.country == "Nigeria":
           self.prepare_nigerian()
       elif self.country == "Ethiopia":
           self.prepare_ethiopian()
       elif self.country == "Morocco":
           self.prepare_moroccan()
       else:
           print("Recipe is unavailable.")
          
   def prepare_nigerian(self):
       print("The Nigerian recipe is:")
       print("Step 1: Gather ingredients")
       print("Step 2: Season the chicken with spices and let it marinate.")
       print("Step 3:  Add onions, garlic, and peppers in a pot.")
       print("Step 4: Add the chicken")
       print("Step 5: Stir")
       print("Step 6: Serve.")
   def prepare_ethiopian(self):
       print("The Ethiopian recipe is:")
       print("Step 1: Gather ingredients")
       print("Step 2: Season the chicken with spices and let it marinate.")
       print("Step 3:  Add onions, garlic, and peppers in a pot.")
       print("Step 4: Add the chicken")
       print("Step 5: Stir")
       print("Step 6: Serve.")
      
   def prepare_moroccan(self):
       print("The Moroccan recipe is:")
       print("Step 1: Gather ingredients")
       print("Step 2: Season the chicken with spices and let it marinate.")
       print("Step 3:  Add onions, garlic, and peppers in a pot.")
       print("Step 4: Add the chicken")
       print("Step 5: Stir")
       print("Step 6: Serve.")      
country = input("Enter a country: ")
recipe = Recipe(country)
recipe.recipe_preparation()

# **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to
# 
# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.


# input=species_characteristics,species_diet
# output=
# process=create class Animals,create constructor,create methods
class Species:
   def __init__(self, name, diet, lifespan):
       self.name = name
       self.diet = diet
       self.lifespan = lifespan
  
   def get_name(self):
       return self.name
  
   def get_diet(self):
       return self.diet
  
   def get_lifespan(self):
       return self.lifespan
class Predator(Species):
   def __init__(self, name, diet, lifespan, prey_list):
       super().__init__(name, diet, lifespan)
       self.prey_list = prey_list
  
   def get_prey_list(self):
       return self.prey_list
class Prey(Species):
   def __init__(self, name, diet, lifespan, predator_list):
       super().__init__(name, diet, lifespan)
       self.predator_list = predator_list
  
   def get_predator_list(self):
       return self.predator_list

cheetah = Predator("cheetah", "Carnivore", 15, ["Antelope", "Gazelle"])
antelope = Prey("antelope", "Herbivore", 20, ["leopard", "Hyena"])


print(cheetah.get_name())               
print(cheetah.get_diet())               
print(cheetah.get_lifespan())           
print(cheetah.get_prey_list())          


print(antelope.get_name())              
print(antelope.get_diet())              
print(antelope.get_lifespan())         
print(antelope.get_predator_list())

# **African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or
# stages.
class Artist:
    def __init__(self,name,music_style,country):
      self.name=name
      self. country=country
      self.music_style=music_style
      self.music_perfomance=[]
         
class Perfomance(Artist):
   def __init__(self,name,country,music_style,schedule):
       super().__init__(name,country,music_style)
       self.time_limit=30
       self.schedule=schedule
   def __init__(self,name,country,music_style):
       self.name=name
       self. country=country
       self.music_style=music_style
       self.music_perfomance=[]
   def display_details(self): 
       return f'The Artist name   is:{self.name},Country:{self.country},Music_style:{self.music_style},Music to be performed:{self.music_perfomance}'   

def timer(self,minutes):
       if self.time_limit==minutes:
          return f'The {self.name} has finished on time.'
       elif self.time_limit >minutes:
           return f'The {self.name} has exceeded the time limit .'
       else:
             return f'The {self.name} has taken less time.'
class Stage:
    def __init__(self, name, country, music_style):
        self.name = name
        self.country = country
        self.music_style = music_style
        self.performances = []

    def add_performance(self, performance):
        self.performances.append(performance)

    def display_details(self):
        details = f"Stage name: {self.name}\nLocation: {self.country}\nMusic style: {self.music_style}\n"
        if len(self.performances) == 0:
            details += "No performances scheduled."
        else:
            details += "Performances:\n"
            for i, performance in enumerate(self.performances):
                details += f"Performance {i+1}:\n"
                details += performance.display_details() + "\n"
        return details
# artist1 = Artist("Adele", "Pop", "United Kingdom","yog")
# artist1.music_perfomance = ["Someone Like You", "Rolling in the Deep", "Hello"]
# performance1 =Artist("Adele", "United Kingdom", "Pop", "9:00 AM")
# performance1.time_limit = 40
# stage1 = Stage("Main Stage", "United States", "Pop")
# stage1.add_performance(performance1)
# print(stage1.display_details())

# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.
class Product:
   def __init__(self, name, price, quantity):
       self.name = name
       self.price = price
       self.quantity = quantity

   def calculate_total_price(self):
       total_price = self.price * self.quantity
       return f"The total price for the products is {total_price}"
books = Product("books", 80.00, 10)
rulers = Product("ruler",30.00,5)
sharpeners = Product("sharpener",15,10)
print (books.calculate_total_price())
print (rulers.calculate_total_price())
print (sharpeners.calculate_total_price())

#  Implement a class called Student with attributes for name, age, and grades (a list of integers). 
# Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these Methods.
class Student :
   def __init__ (self,name,age,grades):
       self.name = name
       self.age = age
       self.grades = grades
   def display_info(self):
       return f"Hello, I am {self.name} and I am {self.age} years old."
   def calculate_grade(self):
       total_grades = 0
       for grade in self.grades:
           total_grades += grade
           ave_grade = total_grades/len(self.grades)
       return ave_grade
   def pass_mark(self):
       ave_grade = calculate_grade()
       if ave_grade >= 60:
           return f"Congratulations, {self.name}!You have passed."
       else:
           return f"{self.name} you have not attained the passmark, work harder!"

njeri = Student("Njeri",24,[40,50,80,72,48,90])
print(njeri.display_info())
print (njeri.calculate_grade())
print (njeri.pass_mark())
# Create a FlightBooking class that represents a flight booking system. Implement
# methods to search for available flights based on destination and date, reserve
# seats for customers, manage passenger information, and generate booking
#  confirmations



class FlightBooking:
       def __init__(self, flights):
        self.flights = flights
def search_flights(self, destination, date):
         for flight in self.flights:
            if flight.destination == destination and flight.date == date:
                return flight
            return None

def reserve_seat(self, flight, passenger_name, passenger_email):
        if flight not in self.flights:
            raise ValueError("Flight not found")
        if flight.is_full():
            raise ValueError("Flight is full")
        flight.passengers.append({
            "name": passenger_name,
            "email": passenger_email
        })

def manage_passenger_information(self, flight, passenger_name, field, new_value):
          for passenger in flight.passengers:
            if passenger["name"] == passenger_name:
                if field == "name":
                    passenger["name"] = new_value
                elif field == "email":
                    passenger["email"] = new_value
                else:
                    raise ValueError("Invalid field")

def generate_booking_confirmation(self, flight):
        return f"Your booking for flight {flight.id} has been confirmed.\n" \
               f"Departure: {flight.departure_airport}\n" \
               f"Arrival: {flight.arrival_airport}\n" \
               f"Date: {flight.date}\n" \
               f"Passengers:\n" \
               "\n".join([f"{passenger['name']} ({passenger['email']})" for passenger in flight.passengers])

flight_booking = FlightBooking([
    Flight("12345", "New York", "Los Angeles", "2023-07-08", 100),
    flight("67890", "Los Angeles", "New York", "2023-07-10", 100)
])

flight = flight_booking.search_flights("New York", "Los Angeles", "2023-07-08")

if flight:
    flight_booking.reserve_seat(flight, "John Doe", "johndoe@example.com")
    flight_booking.manage_passenger_information(flight, "John Doe", "name", "Jane Doe")

booking_confirmation = flight_booking.generate_booking_confirmation(flight)

print(booking_confirmation)
