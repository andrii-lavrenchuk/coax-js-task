// The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.
// But it leads to an error. Why?
// Fix the highlighted line for everything to start working right (other lines are not to be changed).

function checkPassword(password, ok, fail) {
  if (password == "password") ok();
  else fail();
}

const user = {
  name: "Tim",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

const binded = checkPassword(
  "password",
  user.loginOk.bind(user),
  user.loginFail.bind(user)
);
