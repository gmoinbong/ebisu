import { User } from "../validation/validation";

app.post("/", (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" })
    } else {
      const user = new User({ name, email, password })
      user.save(err => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: "sucessfull" })
        }
      })
    }
  })
}) 