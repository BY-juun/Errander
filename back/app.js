const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const db = require("./models");
const orderRouter = require("./routes/order");
const userRouter = require("./routes/user");
const passportConfig = require("./passport");
dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

passportConfig();
app.use(morgan("dev"));

app.use(
  cors({
    origin: true,
    credentials: true, //이걸 해줘야 cookie도 같이 보낼 수 있다.
  })
);

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    proxy: true,
    cookie: {
      httpOnly: true, //cookie는 javascript로 조작할 수 없도록.
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.set("trust proxy", 1);

app.use("/order", orderRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("ㅎㅇ");
});

app.listen(80, () => {
  console.log("서버 실행 중");
});
