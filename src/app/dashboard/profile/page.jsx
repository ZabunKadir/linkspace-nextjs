import MessagesWidget from '@/components/Common/MessagesHeader'
import ProfileCrop from '@/components/Modal/ProfileCrop'
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
        <ProfileCrop />
        <MessagesWidget />

    </div>
  )
}

export default ProfilePage