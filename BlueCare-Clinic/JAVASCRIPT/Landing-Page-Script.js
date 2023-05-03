let mybutton = document.getElementById("Back-To-Top");
window.onscroll = function() {topFunction};

function topFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }




  //Log In Btn
  function login_btn(){
    if (document.getElementById('Log-in')) {
  
        if (document.getElementById('Log-in').style.display == 'none') {
            document.getElementById('Log-in').style.display = 'block';
            document.getElementById('login-pin').style.display = 'none';
        }
        else {
            document.getElementById('Log-in').style.display = 'none';
            document.getElementById('login-pin').style.display = 'block';
        }
    }
  }
  //Register In Btn
function register_btn(){
  if (document.getElementById('Log-in')) {

      if (document.getElementById('Log-in').style.display == 'none') {
          document.getElementById('Log-in').style.display = 'block';
          document.getElementById('Regis-phone-num').style.display = 'none';
      }
      else {
          document.getElementById('Log-in').style.display = 'none';
          document.getElementById('Regis-phone-num').style.display = 'block';
      }
  }
}
//Enter Phone Number Btn
function get_OTP() {
  if (document.getElementById('Regis-phone-num')) {

      if (document.getElementById('Regis-phone-num').style.display == 'none') {
          document.getElementById('Regis-phone-num').style.display = 'block';
          document.getElementById('verify-form').style.display = 'none';
      }
      else {
          document.getElementById('Regis-phone-num').style.display = 'none';
          document.getElementById('verify-form').style.display = 'block';
      }
  }
}
//Verification Code Btn
function enter_PIN() {
  if (document.getElementById('verify-form')) {

      if (document.getElementById('verify-form').style.display == 'none') {
          document.getElementById('verify-form').style.display = 'block';
          document.getElementById('enter-pin').style.display = 'none';
      }
      else {
          document.getElementById('verify-form').style.display = 'none';
          document.getElementById('enter-pin').style.display = 'block';
      }
  }
}
//Enter 4 Digit Code In Btn
function back2_login() {
  if (document.getElementById('enter-pin')) {

      if (document.getElementById('enter-pin').style.display == 'none') {
          document.getElementById('enter-pin').style.display = 'block';
          document.getElementById('Log-in').style.display = 'none';
      }
      else {
          document.getElementById('enter-pin').style.display = 'none';
          document.getElementById('Log-in').style.display = 'block';
      }
  }
}