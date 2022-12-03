import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/MRonald.png" />

                    <div className={styles.authorInfo}>
                        <strong>Michael Ronald</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13h" dateTime="2022-12-03 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero magnam molestiae molestias sint adipisci nam</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero magnam molestiae molestias sint adipisci nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci veniam quod. Necessitatibus eos quisquam hic quos amet blanditiis? Veritatis temporibus alias, voluptatum ab aspernatur debitis placeat laudantium exercitationem quasi?</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Escreva seu comentário"
                />

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
}