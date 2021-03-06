

export default async function setPosts(data) {
    let user = await auth.currentUser;
    console.log(user)
    if (user == null) {
        alert('Bạn chưa đăng nhập tài khoản của mình')
    } else {
        let displayName = await auth.currentUser.displayName;
        let displayEmail = await auth.currentUser.email;
        let date = new Date();
        data.author = displayName;
        data.emailUser = displayEmail;
        data.dateModifier = date.toLocaleDateString('en-GB');
        let dateInfo = data.dateModifier.split("/");
        data.dateSort = parseInt(dateInfo[2]+dateInfo[1]+dateInfo[0]);
        console.log(data.dateSort);
        data.comment = [];
        data.numberView = 0;
        data.numberLike = 0;
        data.memberLike = [];

        await db.collection('Post').add(data);
        // alert('Tạo mới thành công')
        window.location.href = './listPosts.html'
    }
}




// update một value mới

export async function updateInteract(collection,doc,data){
    await db.collection(`${collection}`).doc(doc).update(data)
}

export async function updateFood(collection,doc,data){
    await db.collection(`${collection}`).doc(doc).update(data)
    window.location.href = './listPosts.html'
}

export async function deletePost(collection,doc){
    await db.collection(collection).doc(doc).delete()
}



