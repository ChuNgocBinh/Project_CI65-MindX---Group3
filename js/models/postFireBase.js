export default async function setPosts(data){
    let displayName = await auth.currentUser.displayName;
    let date = new Date();
    data.author = displayName;
    data.dateModifier = date.toISOString();
    await db.collection('Post').add(data);
    console.log('da them thanh cong')
}