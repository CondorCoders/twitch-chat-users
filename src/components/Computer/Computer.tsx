import { Hacker, UserType } from "../Hacker/Hacker";
import styles from "./Computer.module.css";

interface ComputerProps {
  user?: UserType;
  className?: string;
}

export const Computer = ({ user, className }: ComputerProps) => {
  return (
    <div className={`${styles.computer} ${className}`}>
      <div className={styles.monitor}>
        <div className={styles.inner_screen}>
          <div className={styles.screen}>
            {user && <Hacker {...user} />}
            {!user && <div className={styles.noise} />}
          </div>
          <div className={styles.buttons}>
            <div className={styles.button_top}></div>
            <div className={styles.button_bottom}></div>
            <div className={styles.button_bottom}></div>
          </div>
        </div>
      </div>
      <div className={styles.cpu}>
        <div className={styles.vent}>
          <div className={styles.power_button}></div>
          <div className={styles.vent_lines}>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
            <div className={styles.vent_line}></div>
          </div>
        </div>
        <div className={styles.drives}>
          <div className={styles.drive}></div>
          <div className={styles.drive}></div>
        </div>
      </div>
    </div>
  );
};
