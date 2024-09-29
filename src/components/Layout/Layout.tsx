import { PropsWithChildren } from "react";
import styles from "./Layout.module.css";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.noise}></div>
      {children}
    </div>
  );
};
