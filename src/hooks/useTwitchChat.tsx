import { ChatClient } from "@twurple/chat";
import { useEffect, useState } from "react";
import { UserType } from "../components/Hacker/Hacker";
import { RefreshingAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";

const authProvider = new RefreshingAuthProvider({
  clientId: import.meta.env.VITE_TWTICH_CLIENT_ID,
  clientSecret: import.meta.env.VITE_TWITCH_CLIENT_SECRET,
});

const apiClient = new ApiClient({ authProvider });

export const useTwitchChat = (channel?: string) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeUser = users[activeIndex];

  const chatClient = new ChatClient({
    channels: channel ? [channel.toLowerCase()] : [],
  });

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

  return { activeUser };
};
