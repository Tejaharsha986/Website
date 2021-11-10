//sign up function
function signup(e){
  //event.preventDefault();
  var email = document.getElementById('email').value;
  var username = document.getElementById('usernme').value;
  var password = document.getElementById('pass').value;

  var user = {
    email: email,
    username: username,
    pass: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log('user added');

}
