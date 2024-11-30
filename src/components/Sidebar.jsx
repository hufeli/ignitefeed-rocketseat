import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const imgCover =
    "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imgAvatar = "https://github.com/hufeli.png";

  return (
    <aside className={styles.sidebar}>
      <img src={imgCover} className={styles.cover} />

      <div className={styles.profile}>
        <img src={imgAvatar} className={styles.avatar} />

        <strong>Hudson Fernando</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
