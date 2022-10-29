exports.profile = (id) => {
  return { id, name: "Mr X", email: "x@abc.xyz" }
}

exports.register = (fullName, email, password) => {
  // Verify that email does not exist
  // ...
  // Create user with bcrypt(password)
  // ...
  return {user: fullName, email: email, password : password}
}