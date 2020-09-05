
Course Title: JavaScript: Classes


Description: The release of ECMAScript 2015 brought class syntax to JavaScript, providing developers used to class inheritance with some familiar tools. If you're new to the language—or just unsure how classes work in ECMAScript 6 (ES6)—then this course is for you. Join instructor Emmanuel Henri as he explains how classes work in ES6. He starts with the foundations of classes and how they interact with other JavaScript features. He then goes over constructors, mixins, and extends, explaining how they work and sharing code examples.



-----------------------------------------------
Chapter: 1. Defining Classes
-----------------------------------------------
-----------------------------------------------
Video: Introduction to classes
-----------------------------------------------

0:57		Changes to a class or it's properties are passed to all its instances

1:05		Classes aren't hoisted (put on top of the file the way function do when JavaScript compiles the file). Therefore Classes MUST be defined BEFORE any use

1:38		Class Declaration: class Example () {...}<br />Class Expression var Example = class {...}

***********************************************
-----------------------------------------------
Video: Differences between functions and classes
-----------------------------------------------

0:43		Classes AND their properties CANNOT be overwritten (while finctions can)

***********************************************
-----------------------------------------------
Video: Strict mode with classes explained
-----------------------------------------------

0:13		Classes are always in STRICT MODE automatically

***********************************************
-----------------------------------------------
Video: Static methods and usage
-----------------------------------------------

3:08		static methods are class methods -- functions attached to classes, but they can only be called via the class itself, and not by its instances, becuse static methods don't go down via prototype (e.g. static carStats (...) {} )

***********************************************-----------------------------------------------
Chapter: 2. Constructors
-----------------------------------------------
-----------------------------------------------
Video: Constructor and super usage
-----------------------------------------------

2:34		The video is WRONG about passing down METHODS. My tests show that all methods (except static ones) pass down automatically -- no need to list those in child's constructor or super.

2:57		JS Classes may be child classes for others. Child classes are more specific -- have more properties and/or methods. props and methods of the parent Class are passed to the child via the latter's super() inside constructor() {...}

***********************************************-----------------------------------------------
Chapter: 3. Extends and Mixins
-----------------------------------------------
-----------------------------------------------
Video: Mixins intro and usage
-----------------------------------------------

3:47		funfact -- JS has mixins (^^ sass) BUT I never want to learn it

***********************************************