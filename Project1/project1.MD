# Variables

A variable is simply a container for some data. JavaScript is a weakly typed language meaning there is no type associated with the variable.

Best practice for variable names is always camelCase. It is a bad practice to use snake-case: user_name. 

It is not necessary to 'end' code with semicolon but it is reccomended. 

The only names that are not allowed is:
fist Name
first-Name
@firstName
2firstName

Though this is allowed:
\_firstName
$firstName
firstName2

A small disctinction: const, var and let are not data types. They are different types of definitions. Different data types refer to numbers and strings and the like. 

Despite being a weakly typed language, data types STILL exist in Javascript. Note that '30' and 30 are not the same despite the equality operator stating that it may be true. 

## Global vs Local Scope

Global variables are present outside functions or code blocks. 

It is considered bad practice to involve global variables inside the function itself. This is because functions should be self contained units. This is known as a pure function.

However functions can access other functions and global variables if needed. In fact it can be used quite well as long as things dont get too complicated. Try not to mix these things up though. 

## Const, Var and Let

### Const

Variables cannot be changed. They should be used as much as possible and only switch to let if you want to change it. It is used to make the code easier to understand. 

Note that const variables cannot be set to anything else after declaration even if they are set to the same thing. 

const max=30;
max=30;

Is still an illegal operation!

Also they HAVE to be declared upon initialization. You cannot initialize and re-assign later. This is not like final classes that can be declared but not initialized. 

### Let

Variables can be changed.

## Primitives vs Objects

Javascript has 5 primitive data types. String, Number, Boolean, Undefined and Null.

However in Javascript, the variable takes the type of whatever was passed into it.

### Strings

Strings are enclosed in " " or ' '. If you want quotes in String: "'John' eats".

Escape characters are usually placed with the backslash: "\". \n to go to a new line. \'' allows to insert a single quote. The backslash allows us to escape text meanings in syntax. Just put it before anything you dont want syntantically understood by JavaScript.

### Number

Javascript has only one number type and it encloses both int and double. Floats are also covered in this category.

### Boolean

This is used in the same way as all the other languages.

### Objects

Independent data type for grouping and relating data. Introduces key/value pairs and the like. 

### Arrays

Important for list data. Unlike other languages, unknown amounts of data are allowed for JavaScript!

### Undefined

Undefined means that the variable was created but nothing was assigned to it. Not defined means that this memory space simply does not exist (variable was not created).

### Null

This means the variable was created but it was explicitly given no value at all.

## Operators

Operators will follow the same precedence as basic math.

### == vs ====

== does not check for types! So 5=='5' will be true unlike ====

### Type Coercion

This means that a value from one type can be converted to another type on the fly. So if a number is added to a string or some other operation is used, String concatanation is prioritized and the variable is set as string, but with the other operators, the variable is set as a number and the numeric operation is done.

5 + 10 + 'b' = 15b
'b' + 5 + 10 = b510
100-'30' = 70
100*'30'=300

### Data Type Conversion

Usually when data is retrieved from user inputs, it gets them as strings instead of numbers. As such it can be hard to do numerical operations. 

Casting would help if this were a strongly typed language however in this case we need to use parseInt. This will extract out the integer.  This can be complicated if actual text characters are attempted to be converted though.

<script>
//convert string to integer
parseInt(value);
//convert integer to string
value.toString();
</script>

# Functions

Functions are essentially blocks of code. It can have parameters and return values but does need to have them. Every function execution is independent from other function executions. 

If you are using functions imported from another script, make sure to import that script first! This is why GTM containers are usually placed as high in the head as possible. 

This applies for variables in script imports as well. You can reference these variables correctly as long as the script imports are in the right order. 

## Hoisting

Functions are hoisted by Javascript so function DEFINITIONS can be declared after they are used/called. 

However function EXPRESSIONS(functions that use let and const) do not have this utility. 

Hoisting also works with variables somewhat. However it should be noted that there is no need to initialize variables. 

## Shadowing

This refers to making a locally scoped variable with the same name as a globally scoped one. It creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - both co-exist. 

<script>
let userName="Max"
function display(){
    let userName="Manu";
    alert("Manu");
}
display();
</script>

This will not generate an error. Note that the function prioritizes the local scope before moving on to the global scope. 


## Return

Nothing after the return statement will be returned. There are some instances of "return-less" functions but they are mainly for HTTP requests. 

## Event Listeners

Functions can be added as event listeners. However parantheses should be avoided because that will immediately call the function!



## Splitting Code

