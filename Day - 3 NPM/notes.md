### Table of contents
1. NPM understanding
2. Installing and uninstalling anything basics & advanced
3. understanding node_modules
4. dependencies
5. devdependencies
6. scripts - understanding default scripts PATH and custom scripts


**1. NPM understanding**
NPM(Node Package Manager)
- NPM is a platform where multiple packages and modules are placed.
- Initially here only the packages related to node modules but later other packages are also listed there so NPM means NOT a Node Package Manager but this become famous so officially there is no any full form but unficially we can say anything Node Package Manager too.
- Those are installed in the core of nodeJS is said to be ***module***
- But anything we download from the NPM is said to ***packages***

**2. Installing and uninstalling anything basics & advanced**
- npm install accessibility (Install `accessibility` named package)
- npm install accessibility@3.0.9 (If i have to install any particular version)
- For uninstall : npm uninstall accessibility@3.0.9

**4. dependencies**

List of packages and their dependencies.

**4. devdependencies**
Thode packages which are only used at the time of development when the code goes for the production then we dont use devdependencies.
 ***for ex*** : nodemon : we use this after production.
 - for install : npm install packageName -D/--save-dev

 **6. scripts - understanding default scripts PATH and custom scripts**
 we can define own keyword to run the anything
 this is like a custom script.
 - npm start/test
 - npm run dev
 - npm run concurrent
