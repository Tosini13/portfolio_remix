# Webpack

Webpack is library to bundle files into smaller pieces. It can use as well other libraries for certain compilations.

## configuration

### properties

- entry - path to the file that has to compiled
- output - path to place where the file(s) should be compiled to
- rules - indicate which files should be compiled with certain tools. It's described with **test** - tests file's extension if should be compiles; **use** - indicates what loader should be used; **include** - indicate path from where files should be taken to compile
- resolve - indicate what files (extensions) are imported in the compiled files
- source-map - allow for better debugging in compiled (built) files. It allows to show the code of original files and set breakpoints. There are different types of source maps.
