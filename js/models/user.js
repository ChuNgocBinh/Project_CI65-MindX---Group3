export async function register(name, email, password) {
    let response = await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
    console.log(response);
    console.log("Register successfully");
    console.log(auth.currentUser);
}

export function login(email, password) {

}

export function getCurrentUser() {

}

export function updateUser() {

}

export function logout() {

}