import { useEffect, useState } from "react";
import tmi from "tmi.js";
import styles from "./App.module.css";
import { Sticker, UserType } from "./components/Sticker/Sticker";

const client = new tmi.Client({
  channels: ["condorcoders"],
});

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    client.connect();

    client.on("message", (_, userstate, message) => {
      const [command] = message.split(" ");

      if (command === "!sticker" && !!userstate["user-id"]) {
        setUsers((prev) => {
          const userExist = prev.find(
            (user) => user.id === userstate["user-id"]
          );
          if (userExist) return prev;

          return [
            ...prev,
            {
              id: userstate["user-id"],
              username: userstate["display-name"],
            },
          ];
        });
      }
    });

    return () => {
      client.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Stickers</h1>
      <div className={styles.album}>
        {users.map((user) => (
          <Sticker key={user.id} id={user.id} username={user.username} />
        ))}
      </div>
    </>
  );
}

export default App;
