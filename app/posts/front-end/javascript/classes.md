# Classes

## Static Data

Static data is shared between all the instances. It can be declared in static scope inside the class - it's added just after initialization or after adding it to a prototype object.

```
class A{
    static{
        A.prototype.alphabet = "latin";
    }
}
```

```
class A{

}

A.prototype.alphabet = "latin";
```
