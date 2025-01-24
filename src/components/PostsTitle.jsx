import Link from "next/link";
import getAllPosts from "../../lib/getAllPosts";

const PostsTitle = async () => {
  const postsTitle = await getAllPosts();
  
  return (
    <div className="w-11/12 mx-auto mt-4">
      <h1 className="text-3xl font-semibold text-center">All Posts</h1>
      <div>
        {postsTitle.map((title) => (
          <ul key={title.id}>
            <li className="border-green-400 border-2 my-4 px-4 py-2 flex justify-between items-center">
              <p>{title.title}</p>
              <Link href={`/blog/${title.id}`} className="bg-red-400 px-4 py-2 rounded-md">Details</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PostsTitle;
