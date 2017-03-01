// regex patter for email check
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

window.onload = function(){
  //get elements
  var InputName = document.getElementById("InputName");
  var InputNameValidator = document.getElementById('InputNameValidator');
  var InputEmail = document.getElementById("InputEmail");
  var InputEmailValidator = document.getElementById('InputEmailValidator');
  var InputMessage = document.getElementById("InputMessage");
  var InputMessageValidator = document.getElementById('InputMessageValidator');

  //input changed event
  InputName.oninput = function(){
    if(this.value != ''){
     InputNameValidator.style.background = 'rgb(48, 194, 165)';
    }
  };

  InputEmail.oninput = function(){
    if(this.value != '' && this.value.indexOf(' ') < 0 && pattern.test(this.value)){
     InputEmailValidator.style.background = 'rgb(48, 194, 165)';
    }
  };

  InputMessage.oninput = function(){
    if(this.value.length > 10){
     InputMessageValidator.style.background = 'rgb(48, 194, 165)';
    }
  };
};
