import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/MRonald.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Michael Ronald</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-12-03 08:13:30">Há 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quaerat minus suscipit commodi rerum magni ipsam earum tempora, nobis natus id quis provident quam reiciendis animi quod expedita obcaecati! Eaque.</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}