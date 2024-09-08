import { useEffect, useState } from "react";
import styles from "./Sticker.module.css";

export interface UserType {
  id?: string;
  username?: string;
}

const getUserProfilePic = async (userId: string) => {
  const response = await fetch(
    `https://api.twitch.tv/helix/users?id=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
        "Client-ID": import.meta.env.VITE_TWTICH_CLIENT_ID,
      },
    }
  );

  const data = await response.json();

  return data.data[0].profile_image_url;
};

export const Sticker = ({ id, username }: UserType) => {
  const [profilePic, setProfilePic] = useState<string | null>();

  useEffect(() => {
    if (!id) return;

    const getUserPic = async () => {
      const pic = await getUserProfilePic(id);
      setProfilePic(pic);
    };

    getUserPic();
  }, [id]);

  return (
    <div>
      {username}
      <img
        className={styles.stickerImage}
        src={profilePic || ""}
        alt={`${username} Profile Picture`}
      />
    </div>
  );
};
