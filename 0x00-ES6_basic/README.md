# ES6 Basics

In this project, I learnt about ES6 features such as:

1. let
2. const
3. var
4. Arrow functions
5. Rest and spread function parameters
6. String templating
7. Iterators and iterables.

## Tasks

**0. Const or let?**

Modify

- function `taskFirst` to instantiate variables using *const*
- function `taskNext` to instantiate variables using *let*

**File**: [0-constants.js](./0-constants.js)

**1. Block scope**

Given what you’ve read about *var* and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

**File**: [1-block-scoped.js](./1-block-scoped.js)

**2. Arrow functions**

Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

**File**: [2-arrow.js](./2-arrow.js)

**3. Parameter defaults**

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

**File**: [3-default-parameter.js](./3-default-parameter.js)

**4. Rest parameter syntax for functions**

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

**File**: [4-rest-parameter.js](./4-rest-parameter.js)

**5. The wonders of spread syntax**

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

**File**: [5-spread-operator.js](./5-spread-operator.js)

**6. Take advantage of template literals**

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

**File**: [6-string-interpolation.js](./6-string-interpolation.js)

**7. Object property value shorthand syntax**

Modify the following function’s budget object to simply use the keyname instead.

**File**: [7-getBudgetObject.js](./7-getBudgetObject.js)

**8. No need to create empty objects before adding in properties**

Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object

**File**: [8-getBudgetForCurrentYear.js](./8-getBudgetCurrentYear.js)

**9. ES6 method properties**

Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

**File**: [9-getFullBudget.js](./9-getFullBudget.js)

**10. For..of Loops**

Rewrite the function `appendToEachArrayValue` to use ES6’s *for...of* operator. And don’t forget that *var* is not ES6-friendly.

**File**: [10-loops.js](./10-loops.js)

**11. Iterator**

Write a function named `createEmployeesObject` that will receive two arguments:

- `departmentName` (String)
- `employees` (Array of Strings)

The function should return an object with the following format:

`{
     $departmentName: [
          $employees,
     ],
}`

**File**: [11-createEmployeesObject.js](./11-createEmployeesObject.js)

**12. Let's create a report object**

Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

**File**: [12-createReportObject.js](./12-createReportObject.js)

**13. Iterating through report objects**

Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`. This function will return an iterator to go through every employee in every department.

**File**: [100-createIteratorObject.js](./100-createIteratorObject.js)

**14. Iterate through object**

Finally, write a function named `iterateThroughObject`. The function’s parameter `eportWithIterator` is the return value from `createIteratorObject.` It should return every employee name in a string, separated by |

**File**: [101-iterateThroughObject.js](./101-iterateThroughObject.js)
