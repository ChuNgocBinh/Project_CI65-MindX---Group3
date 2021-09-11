export async function register(name, email, password) {
    await auth.createUserWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
    await auth.currentUser.updateProfile({displayName:`${name}`})
}

export async function login(email, password) {
    await auth.signInWithEmailAndPassword(email, password); // xảy ra hiện tượng bất đồng bộ
}

export async function getCurrentUser() {
    // await auth.currentUser(displayName)
}

export function updateUser() {

}

export function logout() {

}