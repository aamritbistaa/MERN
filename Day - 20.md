# Backend

# Api



## Package
- body-parser
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- multer
- nodemon

models - field to be defined in database
controller - get post 
routes - path define. Eg: todolist/list

api are defined inside routes. data response are inside controller. fields inside response are defined in models.


TODOlist fetch:
path in get 





```js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/list", (req, res) =>
  res.json({
    message: "test message",
  })
);
const PORT = 8000;
app.listen(PORT, () => console.log("successfully connected", PORT));
```
localhost:8000/list constaines response


```js 
//index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todolist from "./routes/todolist.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/todolist", todolist);
const PORT = 8000;

app.listen(PORT, () => console.log("successfully connected", PORT));
```

```js
//routes/todolist.js
import express from "express";

const route = express.Router();
route.get("/todolist", (req, res) =>
  res.json({
    message: "todo message",
  })
);

export default route;
```
localhost:8000/todolist/todolist containes response message

```js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todolist from "./routes/todolist.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", todolist);

const PORT = 8000;

app.listen(PORT, () => console.log("successfully connected", PORT));
```
this means localhost:8000 ko root ma todolist vanne cha aaba tesko bhitra ko message ko afno afno route ni huna payo.

```js
//routes/todolist.js
import express from "express";
const route = express.Router();

route.get("/todolist", (req, res) =>
  res.json({
    message: "todo message",
  })
);

route.get("/todolist2", (req, res) =>
  res.json({
    message: "todo message2 ",
  })
);

export default route;
```
![[Pasted image 20230127132741.png]] ![[Pasted image 20230127132718.png]]

---
**Simplification of code**
index- path
routes - route(get,post,delete)
controller- 'k garne?'/ task
```js
//index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todolist from "./routes/todolist.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/todolist", todolist);

const PORT = 8000;
app.listen(PORT, () => console.log("successfully connected", PORT));
```

```js
//routes/todolist.js
import express from "express";
import { getTodo } from "../controller/todolist.js";

const route = express.Router();

route.get("/", getTodo);

export default route;
```

```js
//controller/todolist.js
export const getTodo = (req, res) =>
  res.json({
    message: "todo message ",
  });
```
---
dbconnection
```js
//db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

const connection = () => {
  const mongoose_Url = "mongodb+srv://aamritbistaa:J8wlrE7Nn5jancab@cluster0.a15ztnt.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(mongoose_Url, { useNewUrlParser: true });
  console.log(mongoose_Url);
  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("db disconnected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("db error", err.message);
  });
};
export default connection;
```