# package.json
- Must use "SET" before "NODE_ENV" to set the node_env variable (kinda self explanatory)
- Must use "&&" after whatever value you give to "NODE_ENV"
  - e.g. `SET NODE_ENV=development&& nodemon index.js`
  - if you write `SET NODE_ENV=development && nodemon index.js` then the `NODE_ENV` value will be "development " with the extra space at the end.

# ./src/auth/models/index.js
- Needed to `require(dotenv).config()`
- Line 7, add `OR` conditional operator and include 'NODE_ENV = development' as a desired condition

# index.js
- Needed to `require(dotenv).config()` at the top of the module
- Needed to `require('./src/server')` at the top of the module
  - Was previously trying to require the server inside of the `db.sync` promise chain and then chain the `.startup` method off of the require (e.g. `require('./src/server').start()`)
  - Was also using the wrong method name; Method is `.startup()` NOT `.start()`

# ./src/models/auth/users.js
- Needed to add the SECRET as the second argument to the `jwt.sign()` method
- Needed to `require(dotenv).config()` at the top of the module
- Needed to require `jwt`

# ./src/auth/middleware/bearer.js
- Needed to invoke `next()` at the end of the `try{}` block
- The `bearer` function was being declared & exported improperly
  - Originally, the function was being declared/exported on the same line; 
  - E.g. 
  ```
  module.exports = async () => {
    try {
      // next was not invoked here at all
    } catch (e) {

    }
    }
  ```