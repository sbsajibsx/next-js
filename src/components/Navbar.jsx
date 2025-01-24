
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div className="bg-purple-300 py-2">
      <div className="flex justify-between items-center p-3 w-11/12 mx-auto">
        <h1>Sajib</h1>
        <ul className="flex space-x-3 items-center">
          <li className="outline outline-black px-2 rounded-md">
            <Link href="/">Home</Link>
          </li>
          <li className="outline outline-black px-2 rounded-md">
            <Link href="/profile">Profile</Link>
          </li>
          {user ? (
            <li className="outline outline-black px-2 rounded-md">
              <Link href={"/api/auth/logout"}>logout</Link>
            </li>
          ) : (
            <li className="outline outline-black px-2 rounded-md">
              <Link href={"/api/auth/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
