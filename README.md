# nMessage
Simple message storage in one JSON file and simple internationalization (Node JS module) using nconf as base.

## Installation
```
npm install nmessage
```

In the module directory find file **messages.json**. If you need to put them into another directory, just do it and set correct path in module directory **index.js** file.

Then add messages in **messages.json** file.

## Usage
```
var message = require("nmessage");

console.log(message.get("english:error:error_message"));
```

You can change structure of **messages.json** as you need but keep in mind to get necessary meesage use such string pattren:
**"1_level:2_level: ... :n_level"**