"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadStoredAuth } from "@/store/auth/slice";

export default function AuthLoader() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadStoredAuth());
  // }, [dispatch]);

  return null;
}
