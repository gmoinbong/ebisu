import { User } from "../validation/validation";

app.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findone({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user })
      } else {
        res.send({ message: "wrong credentials" })
      }
    } else {
      res.send("not register")
    }
  })
});