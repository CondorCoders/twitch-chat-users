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
        <div className={styles.screen}>
          <div className={styles.innerScreen}>
            {user && <Hacker {...user} />}
            {!user && <div className={styles.noise} />}
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
  );
};
