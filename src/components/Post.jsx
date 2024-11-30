import { Comment } from "./Comment";
import styles from "./Post.module.css";

export const Post = () => {
  const imgAuthor = "https://github.com/hufeli.png";

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={imgAuthor} className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Hudson Fernando</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="29 de Dezembro às 17:33h" dateTime="2024/11/29 17:33:30">
          Publicado há 1hr
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
