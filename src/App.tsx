import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Hacker, UserType } from "./components/Hacker/Hacker";
import { ChatClient } from "@twurple/chat";
import { ApiClient } from "@twurple/api";
import { RefreshingAuthProvider } from "@twurple/auth";

const authProvider = new RefreshingAuthProvider({
  clientId: import.meta.env.VITE_TWTICH_CLIENT_ID,
  clientSecret: import.meta.env.VITE_TWITCH_CLIENT_SECRET,
});

const chatClient = new ChatClient({
  channels: ["condorcoders"],
});

const apiClient = new ApiClient({ authProvider });

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUser = users[activeIndex];

  useEffect(() => {
    chatClient.connect();
    const connectChat = async () =>
      chatClient.onMessage(async (channel, user, text, message) => {
        const [command] = text.split(" ");

        if (command === "!hack") {
          const user = await apiClient.users.getUserById(
            message.userInfo.userId
          );
          const profilePicture = user?.profilePictureUrl;
          setUsers((prev) => {
            const userExist = prev.find(
              (user) => user.id === message.userInfo.userId
            );
            if (userExist) return prev;

            return [
              ...prev,
              {
                id: message.userInfo.userId,
                username: message.userInfo.userName,
                profilePicture,
              },
            ];
          });
        }
      });

    connectChat();

    return () => {
      chatClient.quit();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= users.length - 1) return 0;
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex, users]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.noise}></div>
      <h1 className={styles.channel}>CondorCoders</h1>
      <p className={styles.hack}>!hack</p>
      <div className={styles.computer}>
        <div className={styles.monitor}>
          <div className={styles.screen}>
            <div className={styles.innerScreen}>
              {activeUser && <Hacker {...activeUser} />}
            </div>
          </div>
          <div className={styles.buttons}>
            <span className={styles.fan}></span>
            <span className={styles.fan}></span>
            <span className={styles.fan}></span>
            <span className={styles.fan}></span>
            <span className={styles.fan}></span>
            <span className={styles.fan}></span>

            <span className={styles.power}></span>
          </div>
        </div>
      </div>
      <p className={styles.username}>Downloading {activeUser?.username} ...</p>
    </div>
  );
}

export default App;
