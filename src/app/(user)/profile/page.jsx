"use client";
import MessagesWidget from "@/components/Common/MessagesHeader";
import ProfileCrop from "@/components/Modal/ProfileCrop";
import { useGetProfileDataQuery } from "@/store/user/profile/service";
import React from "react";

const ProfilePage = () => {
  const { data } = useGetProfileDataQuery({
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="w-full">
      <ProfileCrop />
    </div>
  );
};

export default ProfilePage;
