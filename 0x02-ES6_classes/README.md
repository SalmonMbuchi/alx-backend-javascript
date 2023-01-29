# ES6 Classes

In this project, I learnt about ES6 classes; how to define a class, how to add methods, static methods, inheritance, metaprogramming and symbols.

## Tasks

**0. You used to attend a place like this at some point**

Implement a class named `ClassRoom`:

Prototype: `export default class ClassRoom`
It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

**File**: [0-classroom.js](./0-classroom.js)

**1. Let's make some classrooms**

Import the `ClassRoom` class from *0-classroom.js*.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

**File**: [1-make_classrooms.js](./1-make_classrooms.js)

**2. A Course, Getters, and Setters**

Implement a class named `HolbertonCourse`:

- Constructor attributes:
  - `name` (String)
  - `length` (Number)
  - `students` (array of Strings)
- Make sure to verify the type of attributes during object creation
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in _name)
- Implement a getter and setter for each attribute.

**File**: [2-hbtn_course.js](./2-hbtn_course.js)

**3. Methods, static methods, computed methods names..... MONEY**

Implement a class named `Currency`:

- Constructor attributes:
  - `code` (String)
  - `name` (String)

Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
Implement a getter and setter for each attribute.
Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`

**File**: [3-currency.js](./3-currency.js)

**4. Pricing**

Import the class `Currency` from 3-currency.js

Implement a class named `Pricing`:

- Constructor attributes:
  - `amount` (Number)
  - `currency` (Currency)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in`_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
- Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

**5. A Building**

Implement a class named `Building`:

- Constructor attributes:
  - `sqft` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage.`
- If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message Class extending Building must override `evacuationWarningMessage`

**File**: [5-building.js](./5-building.js)

**6. Inheritance**

Import `Building` from 5-building.js.

Implement a class named `SkyHighBuilding` that extends from `Building`:

- Constructor attributes:
  - `sqft` (Number) (must be assigned to the parent class `Building`)
  - `floors` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

**File**: [6-sky_high.js](./6-sky_high.js)

**7. Airport**

Implement a class named `Airport`:

- Constructor attributes:
  - `name` (String)
  - `code` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- The default string description of the class should return the airport `code` (example below).

**File**: [7-airport.js](./7-airport.js)

**8. Primitive-Holberton Class**

Implement a class named `HolbertonClass`:

- Constructor attributes:
  - `size` (Number)
  - `location` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- When the class is cast into a `Number`, it should return the size.
- When the class is cast into a `String`, it should return the location

**File**: [8-hbtn_class.js](./8-hbtn_class.js)

**9. Hoisting**

Fix the code and make it work. 

**File**: [9-hoisting.js](./9-hoisting.js)

**10. Vroom**

Implement a class named  `Car`:

- Constructor attributes:
  - `brand` (String)
  - `motor` (String)
  - `color` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Add a method named `cloneCar`. This method should return a new object of the class.

Hint: Symbols in ES6

**File**: [10-car.js](./10-car.js)

**11. EVCar**

Import `Car` from *10-car.js*.

Implement a class named `EVCar` that extends the `Car` class:

- Constructor attributes:
  - `brand` (String)
  - `motor` (String)
  - `color` (String)
  - `range` (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- For privacy reasons, when `cloneCar` is called on a EVCar object, the object returned should be an instance of `Ca` instead of `EVCar`.

**File**: [100-evcar.js](./100-evcar.js)
