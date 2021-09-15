export async function register(name, email, password) {
    try {
        await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
        await auth.currentUser.updateProfile({displayName: `${name}`});
        alert('đăng ký thành công');
        window.location.reload()
    } catch (error) {
        alert(error.message)
    }

}

export async function login(email, password) {
    try {
    await auth.signInWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
        alert('đăng nhập thành công');
        window.location.href ='./home.html'
    } catch (error) {
        alert(error.message)
    }
}

export  async function getCurrentUser(name) {
    const user = await firebase.auth().currentUser;
    if (user !== null) {
       name = user.displayName;
    }
}

export function updateUser() {

}

export function logout() {

}