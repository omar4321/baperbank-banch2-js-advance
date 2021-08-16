document.getElementById('login-btn').addEventListener('click', function () {
  const emailfield = document.getElementById('userMail');
  const userEmail = emailfield.value;
  console.log(emailfield);
  /*user password*/
  const passwordfield = document.getElementById('userPass');
  const userPassword = passwordfield.value;
  if (userEmail == 'omarfaruk@gmail.com' && userPassword == 'birikha') {
    window.location.href = '../bank.html';
  }
});
// update deposit total
