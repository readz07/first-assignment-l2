# What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?
Both of them are used to define custom types. Besides helping reusable and organized code they are easy to maintain in a large code based. Here are some example of use cases, features and differneces those are depicted below:

## 1. Interface

When developers need to define the structure of object then they use an Interface. It helps to specify properties and method of an object.

Here is an simplest version of an interface:
interface IUser {
    id: number;
    name: string;
    age: number;
}

Now here you will find some features of interface:
- It appropriate for reusable and defining object.
- It Supports inheritance using `extends` keyword.
- It allows merging.
- In classes we write `implements` to apply on class.


## 2. Type Alias

When you need to write a basic type in typeScript then usually you can use type. There are some varaition in type such as union, tuple etc.



Here are some example of type, simple version, union and tuple.
type User = {
    name: string;
    age: number;
};

type Status = "active" | "inactive";

type ID = string | number;

type locationInfo = [number, number, string];


Lets explore some features of type
- It supports primitive type aliases.
- It can be used for union types using `|`.
- It also supports intersection types using `&`.
- Tuple and function types are also allowed.
- Declaration merging is prohibited in type.


## 3. When to Choose one over another!?

- Interface: Incase of reusable object structures, class contracts you must prefer interface over type.
- Type: Developers around the world prefer or recommend it for unions, tuples, primitive aliases, and complex type combinations.



In terms of use cases of TypeScript both have importance and diffrent implication method. None of them are perfect for all scenario. The implementation depends on the requirements of the application. In production application, developers genaraly use both together to maitain their code for the future!