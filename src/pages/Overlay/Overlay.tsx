import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import styles from "./Overlay.module.css";
import { Link } from "react-router-dom";

export const Overlay = () => {
  const [overlayLink, setOverlayLink] = useState("");

  const [channel, setChannel] = useState("");

  const handleOnClick = () => {
    if (channel) {
      setOverlayLink(`http://localhost:5173/embed/${channel}`);
    }
  };

  return (
    <Layout>
      <h1 className={styles.title}>Crea tu Overlay</h1>
      <p>1. Ingresa el nombre de tu canal de Twitch</p>
      <input
        className={styles.channelInput}
        type="text"
        name="channelName"
        id="channelName"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        placeholder="Ej. condorcoders"
      />
      <Link
        className={styles.button}
        target="_blank"
        to={`http://localhost:5173/embed/${channel}`}
        onClick={handleOnClick}
      >
        Crear
      </Link>

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
