export default async function getAllPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    return res.json()
}