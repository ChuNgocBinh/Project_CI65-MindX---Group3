import { register, login, getCurrentUser, updateUser, logout } from "../models/user.js";

// ------------------chuyển đổi trang đăng nhập đăng ký-----------

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
function errorEmailSignIn(message) {
	return function (value) {
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(value)) {
			return message
		}
	}
}

function errorPasswordSignIn(message) {
	return function (value) {
		if (value.length < 6) {
			return message
		}
	}
}

function errorNameSignUp(message) {
	return function (value) {
		if (value == "") {
			return message
		}
	}
}

function errorEmailSignUp(message) {
	return function (value) {
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(value)) {
			return message
		}
	}
}

function errorPasswordSignUp(message) {
	return function (value) {
		if (value.length < 6) {
			return message
		}
	}
}

function errorConfirmSignUp(message) {
	let passwordSignUp = document.getElementById('passwordSignUp');
	return function (value) {
		if (value !== passwordSignUp.value || value == "") {
			return message
		}
	}
}

// ----------mảng input eror------------------

let myErrorSignUp = [
	errorNameSignUp('Vui lòng nhập tên của bạn'),
	errorEmailSignUp('Vui lòng nhập email'),
	errorPasswordSignUp('Vui lòng nhập mật khẩu'),
	errorConfirmSignUp('Vui lòng nhập xác nhận mật khẩu')
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

function validateSignUp(inputElement, index) {
	let errorMessageSignUp = myErrorSignUp[index](inputElement.value)
	if (errorMessageSignUp) {
		inputElement.parentElement.querySelector('.message--error').innerHTML = errorMessageSignUp;
		inputElement.classList.add('form-error')
		inputElement.classList.remove('form-success')
	}
	clearError(inputElement)
	return !errorMessageSignUp
}

//------------------ lặp qua từng phân tử và kiểm tra lỗi sign up-----------------------

let myInputSignUp = document.getElementsByClassName('formInputSignUp');
Array.from(myInputSignUp).forEach((inputElement, index) => {
	inputElement.onblur = function () {
		validateSignUp(inputElement, index)
	}
})

//-----------------------sự kiện submit form Sign Up---------------------

if ($formSignUp) {
	$formSignUp.addEventListener('submit', function (e) {
		let isValidSignUp = true;
		e.preventDefault()
		// --------lặp qua từng phần từ và kiểm tra lỗi khi submir form----------
		Array.from(myInputSignUp).forEach((inputElement, index) => {
			let isValidateSignUp = validateSignUp(inputElement, index);
			if (!isValidateSignUp) {
				isValidSignUp = false;
			} else {
				isValidSignUp = true;
			}
		});
		if (isValidSignUp == true) {
			let formValues = Array.from(myInputSignUp).reduce((values, inputElement) => {
				values[inputElement.name] = inputElement.value;
				return values
			}, {})
			try {
				register(formValues.name, formValues.email, formValues.password)

				// window.location.reload()
				
			} catch (err) {
				console.log(err.name)
			}
		}

	})
}

// ---------------------sự kiện submit form signin---------------------

let myErrorSignIn = [
	errorEmailSignIn('Vui lòng nhập email'),
	errorPasswordSignIn('Vui lòng nhập mật khẩu'),
]

function validateSignIn(inputElement, index) {
	let errorMessageSignIn = myErrorSignIn[index](inputElement.value)
	if (errorMessageSignIn) {
		inputElement.parentElement.querySelector('.message--error').innerHTML = errorMessageSignIn;
		inputElement.classList.add('form-error')
		inputElement.classList.remove('form-success')
	}
	clearError(inputElement)
	return !errorMessageSignIn
}

let myInputSignIn = document.getElementsByClassName('formInputSignIn');
Array.from(myInputSignIn).forEach((inputElement, index) => {
	inputElement.onblur = function () {
		validateSignIn(inputElement, index)
	}
})

if ($formSignIn) {
	$formSignIn.addEventListener('submit', function (e) {
		let isValidSignIn = true;
		e.preventDefault()
		// --------lặp qua từng phần từ và kiểm tra lỗi khi submir form----------
		Array.from(myInputSignIn).forEach((inputElement, index) => {
			let isValidateSignIn = validateSignIn(inputElement, index);
			if (!isValidateSignIn) {
				isValidSignIn = false;
			} else {
				isValidSignIn = true;
			}
		});
		if (isValidSignIn == true) {
			let formValuesSignIn = Array.from(myInputSignIn).reduce((values, inputElement) => {
				values[inputElement.name] = inputElement.value;
				return values
			}, {})
			login(formValuesSignIn.email, formValuesSignIn.passwordSignIn)
			console.log(formValuesSignIn)
			window.location.href = "./home.html"
			
		}

	})
}

// console.log(getCurrentUser())
// export {}