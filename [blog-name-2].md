# Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.
As we know there are some lackings in JS what TS successfully approach this issue introducing access modifiers. Access modifiers are some reserve keywords than can control class properties and methods access in TypeScript. Because of access modifier we have can aplly some important part of Object-Oriented Programming (OOP) as it allow us to support encapsulation and protect data.


There are three types of access modfiers in TypeScript named as public, private and protected. Below we are going to explore each one by one:

1. Public
By default each class member is considered as public modifier if any modifier is not specified at the front. Public modifier allows properties and methods access from any where, either it can be inside or outside of a class. We usally use it when privacy, security, visibility and modfication is not a part of concern.

2. Private
If you need to apply restriction of a class members you can use private modifier. It is only accesible within the class where they are declared. It prohibits direct access from outside the class or its subclasses. It helps us to protect sensitive data.

3. Protected
If you use protected modifier it will allow you to get access of its properties and methods to from their own class and its subclasses. Though  they cannot be accessed directly from outside the class but inherit way it can be accessible. It is useful when working with inheritance.

4. Readonly
When you need to protect data from being reassigned then you can use readonly access modifier. But it can be accessible from outside class and subclass. When you need to use fixed value then it will be helpful.

Conclusion: Access modifiers allows access controlling to class members. It vastly improve the concept of encapsulation, security, inheritance, and code maintainability. But before using the appropriate modifier in TypeScript applications is mandatory whihch you can achieve by practicing.