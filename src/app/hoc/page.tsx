import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const isAdmin = localStorage.getItem("isAdmin");
      if (!isAdmin) {
        router.push("/login"); // Redirect if not logged in
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withAuth;
