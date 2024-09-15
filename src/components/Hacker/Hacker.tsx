import styles from "./Hacker.module.css";

export interface UserType {
  id?: string;
  username?: string;
  profilePicture?: string;
}

export const Hacker = ({ username, profilePicture }: UserType) => {
  return (
    <img
      className={styles.hackerImage}
      src={profilePicture || ""}
      alt={`${username} Profile Picture`}
    />
  );
};
