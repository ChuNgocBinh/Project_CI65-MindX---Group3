export async function register(name, email, password) {
    try {
        await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
        await auth.currentUser.updateProfile({ displayName: `${name}` });
        alert('đăng ký thành công');
        window.location.reload();
    } catch (error) {
        if (error.message == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
            alert('Tài khoản này đã được sử dụng')
        }
    }

}

export async function login(email, password) {
    try {
        await auth.signInWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
        window.location.href = './index.html'
    } catch (error) {
        // alert(error.message)
        if (error.message == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') {
            alert('Tài khoản không tồn tại.')
        } else if (error.message == 'Firebase: We have blocked all requests from this device due to unusual activity. Try again later. (auth/too-many-requests).') {
            alert('Tài khoản đã bị vô hiệu hóa, vui lòng liên hệ admin để kiểm tra lại.')
        } else if(error.message == 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'){
            alert('Mật khẩu không đúng, vui lòng kiểm tra lại.')
        }
    }
}

export async function getCurrentUser() {
    const user = await auth.currentUser;
    if (user !== null) {
        let name = user.displayName;
        return name
    }
}

export function updateUser() {

}

export function logout() {

}