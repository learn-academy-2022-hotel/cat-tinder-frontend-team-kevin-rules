## CAT TINDER FRONTEND NOTES

### Set up

move trello card to Doing
-$ cd desktop
-$ yarn create react-app cat-tinder-frontend
-$ cd into cat-tinder

now connect remote app ==> go to your github classroom repo, copy
```git remote add ...```

Change master to main:
- $ git checkout -b main
- $ git branch -d master
- $ git status
- $ git add .
- $ git commit -m 'initial commit'
- $ git push origin main
- $ yarn start
- $ code .

slack instructors request for Branch protections 

### Folders and Files
1. Add folders to `src` folder 
2. Add files to components folder
3. Add files to pages folder

### For Styling:

  - $ yarn add bootstrap
  - $ yarn add reactstrap
  add import to index.js

### Routing

- $ yarn add react-router-dom

import BrowserRouter to index.js and wrap around App component call
  
import Routes and Route into App.js and set up in the return of App.js


## Cat Tinder Testing 2/1/23

- Testing helps you have more confidence that your application will respond correctly, discovers bugs before production, and helps you maintain DRY code.

  - static 
  - unit
  - integration
  - end-to-end

- Jest: javascript testing framework
- React Testing Library: provides methods to write the test scripts, work with the DOM nodes

- "The more your tests resemble the way your software is used, the more confidence they can give you."

https://testing-library.com/docs/react-testing-library/intro/

## RTL methods
- getByText(): finds an element by its text value
- getByRole(): finds an element by its attributes
   
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role

## RTL test
- Failing test
```bash
 FAIL  src/App.test.js
  <App />
    ✕ renders a greeting (25 ms)

  ● <App /> › renders a greeting

    TestingLibraryElementError: Unable to find an element with the text: Welcome to Kevin Tails. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.
```

- Passing test
```bash
 PASS  src/App.test.js
  <App />
    ✓ renders a greeting (23 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.326 s, estimated 1 s
```

## Debugging tools
- screen.debug()
    - shows the html document that is displayed on the DOM
- screen.logTestingPlaygroundURL()
    - provides a link to a webpage that you can see testing examples of the DOM elements

## Process
- create testing file with extension `.test.js`
- imports and setup test
- use the debugging tools to help setup test
- see good failure
- update the applicable component
- see valid pass

## Resources for styling
- https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=navbar-with-logo
- https://www.fontspace.com/category/cat


## Resources for testing
- https://claritydev.net/blog/improving-react-testing-library-tests/


## FETCH

controller  ----> CRUD action
index ---> read
create ---> create
update ---> update
destroy ---> delete

## Read Fetch Request Process
- create a function named as the crud action on App.js
- create a state variable to store the data using useState react hook
- add fetch request to the code block of the function
- for read fetch request, we will need to perform the function call using the useEffect react hook
- import the useEffect from react

useEffect(() => {readCats}, []) will trigger the readCats()
 - the action to execute () => { readCats() }
 - dependency value []

basic fetch structure
```javascript
fetch("url")
  // handle the response by converting it to json
  .then(response => response.json())
  // handle the data by printing to the console
  .then(json => console.log(json))
  // handle the error
  .catch(error => console.log("Request failed", error))
```

Fetch returns a promise
  - fulfilled: successful request
  - rejected: failed request
  - pending: waiting on response

.then() allows us to handle the response
.catch() allows us to handle the errors

## Create Fetch Request Process
```javascript
  // create a function named as the crud action on App.js
  //  the create function will need the new data entry to send in the request ---> parameter
  const createNewCat = (newCatObject) => {
    // add fetch request to the code block of the function
    // fetch request will need url and a second argument to properly configure the data as json
    fetch("http://localhost:3000/cats", {
      // that argument will be an object that includes body, headers, and method
      body: JSON.stringify(newCatObject),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      // then tell it how to handle the response
      .then(response => response.json())
      // using the `payload` to trigger the readCat() so all the cats including this new data entry are displayed
      .then(payload => readCats())
      .catch(errors => console.log("cat create errors:", errors))
  }
```
- createNewCat() is triggered by the button on the NewCat.js