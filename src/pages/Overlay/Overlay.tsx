import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import styles from "./Overlay.module.css";

export const Overlay = () => {
  const [overlayLink, setOverlayLink] = useState("");

  const [channel, setChannel] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const channelName = formData.get("channelName");
    if (channelName) {
      setOverlayLink(
        `https://twitchhackoverlay.condorcoders.com/overlay/${channel}`
      );
    }
  };

  return (
    <Layout>
      <h1 className={styles.title}>Crea tu Overlay</h1>
      <p>1. Ingresa el nombre de tu canal de Twitch</p>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.channelInput}
          type="text"
          name="channelName"
          id="channelName"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          placeholder="Ej. condorcoders"
        />
        <button className={styles.button}>Crear</button>
      </form>

      {overlayLink && (
        <>
          <p>2. Copia el link</p>
          <p>{overlayLink}</p>
          <p>3. Anda a OBS y agrega un nuevo Source "Browser"</p>
          <img
            className={styles.sourceImage}
            src="./public/OBS_Source.png"
            alt="OBS source menu"
          />
          <p>4. Pega el link</p>
          <img
            className={styles.overlayImage}
            src="./public/OBS_Create.png"
            alt="OBS create overlay"
          />
        </>
      )}
    </Layout>
  );
};
