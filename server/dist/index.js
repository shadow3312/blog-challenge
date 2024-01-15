"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _routes = require("./routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();
const port = process.env.PORT || 3001;
app.use(_express.default.json());
app.use("/posts", _routes.postRouter);
app.listen(port, () => {
  console.log(`App is listenning to ${port}`);
});