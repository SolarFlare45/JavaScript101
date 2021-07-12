# Introduction

A variable is simply a container for some data. JavaScript is a weakly typed language meaning there is no type associated with the variable.

The only names that are not allowed is:
fist Name
first-Name
@firstName
2firstName

Though this is allowed:
\_firstName
$firstName
firstName2

# Primitives vs Objects

Javascript has 5 primitive data types. String, Number, Boolean, Undefined and Null.

However in Javascript, the variable takes the type of whatever was passed into it.

## Strings

Strings are enclosed in " " or ' '. If you want quotes in String: "'John' eats".

## Number

Javascript has only one number type and it encloses both int and double.

## Boolean

This is used in the same way as all the other languages.

## Undefined

Undefined means that the variable was created but nothing was assigned to it. Not defined means that this memory space simply does not exist (variable was not created).

## Null

This means the variable was created but it was explicitly given no value at all.

# Operators

Operators will follow the same precedence as basic math.

## == vs ====

== does not check for types! So 5=='5' will be true unlike ====

## Type Coercion

This means that a value from one type can be converted to another type on the fly. So if a number is added to a string or some other operation is used, String concatanation is prioritized and the variable is set as string, but with the other operators, the variable is set as a number and the numeric operation is done.

5 + 10 + 'b' = 15b
'b' + 5 + 10 = b510
100-'30' = 70
100*'30'=300
