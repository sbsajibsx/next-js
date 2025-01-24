import getPost from "../../../../lib/getPost";

const page = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div className="mt-5 w-11/12 mx-auto space-y-4">
      <h1 className="text-center text-2xl font-semibold">{post.title}</h1>
      <p className="border-2 border-green-400 p-4">{post.body}</p>
    </div>
  );
};

export default page;
