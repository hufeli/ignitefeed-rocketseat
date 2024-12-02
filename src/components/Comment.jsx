import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

export const Comment = ({ content }) => {
  const imgAvatar = "https://github.com/hufeli.png";

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={imgAvatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hudson Fernando</strong>
              <time
                title="29 de Dezembro às 17:33h"
                dateTime="2024/11/29 17:33:30"
              >
                Cerca de 1hr atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
