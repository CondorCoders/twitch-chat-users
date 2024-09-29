import { Computer } from "../../components/Computer/Computer";
import { Layout } from "../../components/Layout/Layout";
import styles from "./TwitchComputer.module.css";
import { useParams } from "react-router-dom";
import { useTwitchChat } from "../../hooks/useTwitchChat";

export const TwitchComputer = () => {
  const { channel } = useParams();
  const { activeUser } = useTwitchChat(channel);

  return (
    <Layout>
      <h1 className={styles.channel}>{channel}</h1>
      <p className={styles.hack}>!hack</p>
      <Computer user={activeUser} />
      <p className={styles.username}>Downloading {activeUser?.username} ...</p>
    </Layout>
  );
};
