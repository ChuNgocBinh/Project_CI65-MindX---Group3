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
        data.comment = [];
        data.interact = {
            numberLike: 0,
            numberComment:0,
            numberView:0
        }
        await db.collection('Post').add(data);
        await db.collection(`${displayName}`).add(data);
        alert('Tạo mới thành công')
        window.location.href = './home.html'
    }
}



// data.forEach(async (item) => {
//     await db.collection('Post').add(item);

// })