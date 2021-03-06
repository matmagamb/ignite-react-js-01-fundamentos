import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/matmagamb.png" />
                    <div className={styles.authorInfo}>
                        <strong>Matheus Ambrosio</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='04 de julho as 10:21' dateTime='2022-07-04 10:21:30'>publicado hÃ  1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa ð</p>

                <p>Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð</p>

                <p><a href="#"> jane.design/doctorcare </a></p>

                <p> 
                    <a href="#">#novoprojeto</a>{' - '}
                    <a href="#">#nlw</a>{' - '}
                    <a href="#">#rocketseat</a>
                </p>

            </div>
        </article>
    )

}