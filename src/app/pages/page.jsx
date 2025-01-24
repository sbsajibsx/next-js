// "use client"
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    redirect("/api/auth/login");
  }
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-3xl font-semibold mt-6">
        Welcome to your profile!
      </h1>
    </div>
  );
};

export default page;
