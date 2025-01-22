"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (Component: React.FC) => {
  const WrappedComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const isAdmin = localStorage.getItem("isAdmin");
      if (!isAdmin) {
        router.push("/login"); // Redirect if not logged in
      }
    }, []);

    return <Component {...props} />;
  };

  // Set the display name for the wrapped component
  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name})`;

  return WrappedComponent;
};

export default withAuth;
