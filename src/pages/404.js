/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

 useEffect(() => {
  setTimeout(() => {
    router.push("/");
  }, 2000);
 },[])
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-5xl text-violet-900">Page Not Found..............</h1>
    </div>
  );
};

export default NotFound;
