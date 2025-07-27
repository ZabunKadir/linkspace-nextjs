"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const [checked, setChecked] = useState(false);

  // useEffect(()=>{
  //   const timer=setTimeout(()=>{
  //       if(!token) {
  //         router.push("/login");
  //       }
  //       setChecked(true);
  //   },100);
  //   return()=>clearTimeout(timer);
  // },[token, router]);

  if (!checked) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return null;
  }

  return <div>Dashboard içeriği buraya</div>;
}
