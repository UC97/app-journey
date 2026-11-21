DATE: 20-NOV-2026

Started with the basic setup required for learning web and mobile development. 

1. Installed vs code.
2. Created Github account.
3. Installed GIT and done with 1st commit.
4. Bookmarked Study resources.


<!-- Date: 21-NOV-2026  -->

Today, Have learned Basics.

1. What is javaScript?

It is a language invented to make pages live. Earlier it was called LiveScript but later changed the name.

It can run in browser or any other device given there is a javaScript Engine.

Different browsers use different engine.
a. V8 engine in Chrome, Opera, Edge.
b. Nitro, SquirrelFish in Safari.
c. SpiderMonkey in Firefox

2. Variables

In javscript, variable is used to store data. It may be a string, number or anything within defined constraints.

Variables are defined using keywords such as let or var (old style), const.

a. let vs const

let is used to declare a variable which can change at any point of time.

Eg: let name = "umesh";
alert(name);
If we run now it will show name printed as umesh.

let name = "umesh";
name = "chandra";
alert(name);
This prints chandra

On the other hand, if we know a value does not change, such as birthday of a person. We can declare it as const BIRTHDAY. If we try to change const values, it throws Uncaught TypeError: Assignment to constant variable.

3. Datatypes

In javascript we have 8 datatypes, 7 primitive (single value type) and 1 non-primitive (collection of key value pair)

7 Primitive:

a. Number
b. BigInt   
c. String
d. Boolean
e. null
f. undefined
g. Symbol

1 Non-primitive

a. Object

Note:
typeof null is more than "an error." It is a bug from the first version of JavaScript. It was never fixed because changing it would break existing websites. The safe way to check for null is value === null. Add that to your log.