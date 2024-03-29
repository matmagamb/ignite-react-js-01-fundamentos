import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/matmagamb.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Ambrosio</strong>
              <time title="04 de julho as 10:21" dateTime="2022-07-04 10:21:30">
                cerca de 1h atras
              </time>
            </div>
            <button title="Deletar Comentarrio">
              <Trash size={24} />
            </button>
          </header>
          <p>muito bom dev, um parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
