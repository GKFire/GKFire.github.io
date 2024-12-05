(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function validateEmail(email) {
  let emailEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/;
  return emailEx.test(email);
}

function addFormHandler(formObject) {
  formObject.addEventListener("submit", (event) => {
    let email = document.getElementById("email");
    let whyText = document.getElementById("whyInput");

    if (!validateEmail(email.value) || whyText.value.length > 100 || whyText.value.length <= 0 ) {
      event.preventDefault();
    }
  });
}

function addTextHandler(textObject) {
  textObject.addEventListener("input", (event) => {
    let limit = document.getElementById("whyInput-limit");
    limit.innerText = textObject.value.length + "/100";
  });
}

addFormHandler(document.getElementById("interestedForm"));
addTextHandler(document.getElementById("whyInput"));
console.log("Hello");