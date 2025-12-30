## Typescript
- Typescript(TS) is a programming language created by MS and is based on JS in a type safe manner. While creating the program U will be clear of the kinds/types of data that we are using in the application. 
- Is an extension of JS with more typesafety. 
- Here the data types are explicitly declared before use and shall use the same types of what JS provides. 
- TS is not supported in any browser. U need a transpiler(Compiler for TS) to convert the TS code into JS code and use in the Browser. 
- TS compiler is available from the MS website and can be used to transpile the TS code and generate the JS files based on the configuration. The config can specify the version of JS code that U want to develop.(Old JS, ES5, ES6 and so forth...)
- tsconfig.json is the config file that contains the settings required to compile the TS code and generate the output as JS files. The generated JS files are used by the browser(Apps) to create Dynamic content in the HTML pages. 
- Almost all JS Frameworks and libraries that are used for developing real time robust Web Apps use typescript. Angular(UI Framework by Google), React(UI Library developed by Meta), Protractor(Open source Automation Testing framework) and many more.

### Software requirements
1. Install Nodejs. 
2. Install Typescript either from MS website or use npm. Its case senstive, npm uses only smaller case.
```
npm install -g typescript
```
3. Use the tsc command to execute the TS Compiler. If tsc is not recognized as a command, U should set the Environment variable PATH with the path of the npm folder. %AppData%/Roaming/npm. 
4. U need admin rights to execute the npm packages. 

### How to Create and use Tyepscript.
1. Create a folder called Typescript and develop your code and save it with extension .ts. 
2. U shall configure your TSC  to run from the terminal. 
3. From the Terminal, run the command tsc fileName.ts. 
```
tsc filename.ts
``` 
4. Optionally, U can create tsconfig.json file and provide the required options to define the location of the src files and a folder for generating the output directory and other JS settings like the version of the JS std U want the TSC to generate. 
5. Using tsconfig.json, U need not specify the filename as all ts files that included in the config shall be compiled and generate the appropriate Js files. 

### Why TS?
1. TS is a Typesafe language which can make JS code more powerful. U dont have to worry on type mismatches as the compiler shall throw an Error if there is any without a need to wait till the code is executed. 
2. JS being a Dynamic language evaluates the variables only at runtime. If a property is not available and you use/refer it, the js simply gives the output as undefined. debugging becomes tougher. With TS, the variables are defined with type safety, you dont get undefined errors and apps run faster. 
3. The Compilers of TS ensures to generate more powerfull, optimized JS code than what you develop manually.
4. Popular Frameworks like Angular, React, Vue extensively use TS for their coding purposes. 
5. Typescript is supported by MS and has a large community base where U can get support and documentation. The TS is reliable and can be used for developing Apps that can last longer. 

### Data types
TS provides Strict data type checks for its variables. 
- All data types supported in JS is supported in TS also
    - string, number, boolean, object. 
- TS was developed by Anders Hejlsberg, the creator of C#. TS looks very similar to C# and maintains a balancing act of making it look like JS. TS tries to acheive as much Object orientedness as possible. 
