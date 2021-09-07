import { register } from "../models/user.js";

let $linkCreateAccount = document.querySelector('.link-createAccount');
let $linkSignIn = document.querySelector('.link-signIn');
let $formSignIn = document.querySelector('.form-signIn');
let $formSignUp = document.querySelector('.form-signUp');

$linkCreateAccount.addEventListener('click', function (e) {
	e.preventDefault();
	$formSignIn.classList.add('form-hiden');
	$formSignUp.classList.remove('form-hiden');
})

$linkSignIn.addEventListener('click', function (e) {
	e.preventDefault();
	$formSignIn.classList.remove('form-hiden');
	$formSignUp.classList.add('form-hiden');
})

// --------show/hide pass sign in-----------------

let $isShowPass = document.querySelectorAll('.isShowPass');
Array.from($isShowPass).forEach((inputElement) => {
	inputElement.onclick = function () {
		if (inputElement.checked) {
			inputElement.parentElement.querySelector('label').innerHTML = '<i class="far fa-eye"></i>';
			inputElement.closest('.form-group').querySelector('input[type=password]').type = "text";
		} else {
			inputElement.parentElement.querySelector('label').innerHTML = '<i class="far fa-eye-slash"></i>';
			inputElement.closest('.form-group').querySelector('input[type=text]').type = "password";
		}
	}
})

// ------error input----------------------------------------
function errorName(message) {
	return function (value) {
		if (value == "") {
			return message
		}
	}
}

function errorEmail(message) {
	return function (value) {
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(value)) {
			return message
		}
	}
}

function errorPassword(message) {
	return function (value) {
		if (value.length < 6) {
			return message
		}
	}
}

function errorConfirm(message) {
	let passwordSignUp = document.getElementById('passwordSignUp');
	return function (value) {
		if (value !== passwordSignUp.value || value == "") {
			return message
		}
	}
}

// ----------mảng input eror------------------

let myError = [
	errorName('Vui lòng nhập tên của bạn'),
	errorEmail('Vui lòng nhập email'),
	errorPassword('Vui lòng nhập mật khẩu'),
	errorConfirm('Vui lòng nhập xác nhận mật khẩu')
]

//----------------xoa loi khi oninput-----------

function clearError(inputElement) {
	inputElement.oninput = function () {
		inputElement.classList.add('form-success')
		inputElement.classList.remove('form-error')
		inputElement.parentElement.querySelector('.message--error').innerHTML = "";
	}
}

//---------------kiểm tra lỗi--------

function validate(inputElement, index) {
	let errorMessage = myError[index](inputElement.value)
	if (errorMessage) {
		inputElement.parentElement.querySelector('.message--error').innerHTML = errorMessage;
		inputElement.classList.add('form-error')
		inputElement.classList.remove('form-success')
	}
	clearError(inputElement)
	return !errorMessage
}

//------------------ lặp qua từng phân tử và kiểm tra lỗi-----------------------

let myInput = document.getElementsByClassName('formInput');
Array.from(myInput).forEach((inputElement, index) => {
	inputElement.onblur = function () {
		validate(inputElement, index)
	}
})

//-----------------------sự kiện submit form---------------------

if ($formSignUp) {
	$formSignUp.addEventListener('submit', function (e) {
		let isValid = true;
		e.preventDefault()
		// --------lặp qua từng phần từ và kiểm tra lỗi khi submir form----------
		Array.from(myInput).forEach((inputElement, index) => {
			let isValidate = validate(inputElement, index);
			if (!isValidate) {
				isValid = false;
				console.log(isValid)
			} else {
				isValid = true;
				console.log(isValid)
			}
		});
		if (isValid == true) {
			let formValues = Array.from(myInput).reduce((values, inputElement) => {
				values[inputElement.name] = inputElement.value;
				return values
			}, {})
			register(formValues.name, formValues.email, formValues.password)
			console.log(formValues.name)
			console.log(formValues.email)
			console.log(formValues.password)
		}

	})
}

