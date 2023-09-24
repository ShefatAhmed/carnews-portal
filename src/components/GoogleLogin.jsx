import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ from }) => {
  const { googleLogin } = useAuth();
  const { replace, refresh } = useRouter();

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
    } catch (error) {
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn px-8 py-2 rounded-lg bg-purple-50 mt-5 mx-auto flex "
    >
      <FcGoogle className="text-xl mr-3" /> Continue with Google
    </button>
  );
};

export default GoogleLogin;