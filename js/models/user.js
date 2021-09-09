export async function register(name, email, password) {
    await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
    console.log("Register successfully");
}

export async function login(email, password) {
    await auth.signInWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
    console.log("login successfully");

}

export function getCurrentUser() {

}

export function updateUser() {

}

export function logout() {

}