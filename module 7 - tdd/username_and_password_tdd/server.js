let assert = require("chai").assert;


const validatePassword = require('./validatePassword')

app.post('/users', (req, res) => {
  const { username, password } = req.body


  const validPassword = validatePassword(password)

  if (validPassword) {
    res.send({message: "Valid User"})
  } else {
    res.send({error: "Invalid Password"})
  }
})


app.listen(8080, () => console.log("listening on port 8080"))