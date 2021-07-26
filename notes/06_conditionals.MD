# Operators

## == vs ===

The latter checks for value AND type equality! It is what is most reccomended as one should care about what type is being compared. 

=== true is not really necessary and neither is the check for false as they can be use implcitly.

## else if

Else ifs allow for other conditions to be checked for.  What is the difference between this and a series of if statements?

The difference is that the else ifs are all related to the other prepending conditions. If one of the first conditions is met, the else if will never execute. 

However if one of the first conditions is met, the seperate if may also execute! There is no reliance on the first condition failing. 

## Comparing objects and arrays

Two objects and arrays that are identical will not pass the conditional check with == OR ===. HOWEVER, directly comparing the identical elements inside will pass the conditional. 

Unless of course the identical elements inside are also objects/arrays. 
