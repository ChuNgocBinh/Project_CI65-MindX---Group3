import data from "../data/data.js";

export default async function setPosts(data) {
    let user = await auth.currentUser;
    console.log(user)
    if (user == null) {
        alert('Bạn chưa đăng nhập tài khoản của mình')
    } else {
        let displayName = await auth.currentUser.displayName;
        let date = new Date();
        data.author = displayName;
        data.dateModifier = date.toISOString();
        await db.collection('Post').add(data);
        await db.collection(`${displayName}`).add(data);
        alert('da them thanh cong')
    }
}



// data.forEach(async (item) => {
//     await db.collection('Post').add(item);

// })