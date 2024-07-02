import styles from './Banner.module.css';

const Banner = ({ video, categoria }) => {
    return(
        <section className={styles.capa} style={{backgroundImage: `url(${video.capa})`, border: categoria.borda}}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 style={{ backgroundColor: categoria.corPrincipal }}>{categoria.nome}</h2>
                    <h3>{video.nome}</h3>
                        <p>{video.descricao}</p>
                </div>
                <iframe
                style={{border: categoria.borda}}
                width="646" 
                height="333" 
                src={video.video} 
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default Banner;
