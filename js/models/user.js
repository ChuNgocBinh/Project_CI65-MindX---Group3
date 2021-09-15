export async function register(name, email, password) {
    try {
        await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
        console.log('đăng ký thành công');
    } catch (error) {
        console.log(error.message)
    }

}

export async function login(email, password) {
    await auth.signInWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
}

export async function getCurrentUser() {
    await auth.currentUser.displayName
}

export function updateUser() {

}

export function logout() {

}