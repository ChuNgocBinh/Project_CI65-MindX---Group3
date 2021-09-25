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
        data.numberView = 0;
        data.numberLike = 0;
        data.memberLike = [];

        await db.collection('Post').add(data);
        await db.collection(`${displayName}`).add(data);
        alert('Tạo mới thành công')
        window.location.href = './home.html'
    }
}


// update một value mới

export async function updateInteract(collection,doc,data){
    await db.collection(`${collection}`).doc(doc).update(data)
}




// data.forEach(async (item) => {
//     await db.collection('Post').add(item);

// })