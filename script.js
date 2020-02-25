const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const passwords= document.getElementById('password');
const password2= document.getElementById('password2');

function showError(input, message){
	const formControl=input.parentElement;
	formControl.className= 'form-control error';
	const small= formControl.querySelector('small');
	small.innerText= message;
	window.location="fail.html"
}

function showSuccess(input){
	const formControl= input.parentElement;
	formControl.className= 'form-control success'
	window.location="buyfromrwanda.html"
}

function checkEmail(input){
	const re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value.trim())){
	   showSuccess(input);
   }else{
	   showError(input, `Email is not valid`)
   }
}
function checkPasswordMatch(input1, input2){
	if(input1.value!==input2.value){
		showError(input2, 'Passwords do not match')
	}else{
		showSuccess(input)
	}
}
function checkRequired(inputArr){
	inputArr.map(function(input){
		if(input.value.trim()===''){
		showError(input, `${getFieldName(input)} is Required`);
		}else{
			showSuccess(input);
		};
	})
}
function checkLength(input, min, max){
	if(input.value.length<min){
		showError(input, `${getFieldName(input)} must be ${min} or higher`)
	}else if(input.value.lenght>max){
		showError(input, `${getFieldName(input)} must be higher than ${max}`)
	}else{
		showSuccess(input)
	}
}

function getFieldName(input){
	return input.id.charAt(0). toUpperCase()+input.id.slice(1);
}

form.addEventListener('submit', function(e){
	e.preventDefault();
	checkRequired([username, email, passwords, password2])
	checkLength(username, 5, 25)
	checkLength(passwords, 4, 15)
	checkEmail(email);
	checkPasswordMatch(passwords, password2);
});