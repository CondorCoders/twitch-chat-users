import { Link, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import styles from "./App.module.css";
import { Computer } from "./components/Computer/Computer";

function App() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const channelName = formData.get("channelName");

    if (channelName) {
      navigate(`/${channelName}`);
    }
  };

  return (
    <Layout>
      <Computer className={styles.computer} />
      <h1 className={styles.title}>
        Twitch <span className={styles.accent}>!hack</span> Chat
      </h1>
      <p className={styles.description}>
        Mira los usuarios de tu chat de twitch aparecer en la computadora cuando
        usan el comando <span className={styles.accent}>!hack</span>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.channelInput}
          type="text"
          name="channelName"
          id="channelName"
          placeholder="Ej. condorcoders"
        />
        <button className={styles.button}>Crear</button>
      </form>
      <p>¿Quieres usarlo como un overlay de OBS?</p>
      <Link to={"/overlay"} className={styles.button}>
        Crear mi overlay
      </Link>
    </Layout>
  );
}

export default App;
