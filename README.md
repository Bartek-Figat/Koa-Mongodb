<h1 align="center"> Koa-Mongodb </h1> <br>

## Installation

```javascript
$ npm i -S
```

```javascript
$ npm run watch:server
```

### Built With

- [x] node.js
- [x] koa.js
- [x] mongodb

### Application will run by default on port:`8080`

<br>
<h3 align=""> API </h3> <br>

| Function name | Description |
| ------------- | ----------- |
| `get()`       | "/"         |
| `post()`      | "/post"     |

<br>

# Folder Structure

```javascript

app
├── config
│   └── config.js               # Environment Specific Variables (local/dev/production)
│
├── controllers                 # Controllers (functions)
│   └── db.controllers.js
│   └── user.controllers.js
│
├── middleware                  # Middleware  (functions that have access to object (req), object (res), and the next middleware function )
│   └── index.middleware.js
│
├── models                      # Models (usually database models)
│   └── models.schema.js
│
├── .env                        # Env (The process.env property returns an object containing the user environment)
│
│
├── .gitignore                  # Gitignore (specifies intentionally untracked files to ignore)
│
├──  package.json               # Project Description & Dependencies
│
│
├──  server.js                  # Index (your server starts here)

```
