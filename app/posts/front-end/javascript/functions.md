# Functions

## Keywords

- **first-class object** - object that can be passed to function, returned from function and assigned to a variable or prop of a object.
- **IIFE** - Immediately Invoked Function Expression

## Definition

Function is a _first-class object_ that can have properties and methods just like object. The difference is that function can be called.

### function declaration

```
function name(){
    /* body */
}
```

### function expression

It is anonymous function and can be used as IIFE - runs as soon as is declared

```
const name = function(){
    /* body */
}
```

**IIFE:**

```
(function(){
    /* body */
})()
```

### arrow function expression

```
const name = () => {
    /* body */
}
```

**IIFE:**

```
(() => {
    /* body */
})()
```

## methods

- bind - creates new function and sets its context of "this" to the provided one as argument
- call - sets context of this of the function to the provided one as argument and invokes function with next arguments
- apply - is the same as _call_, but arguments to invoke are provided in array

## Links

[bind, call, apply](https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb)
[IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
[IIFE - why](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife)
