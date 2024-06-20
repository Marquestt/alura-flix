import styles from './Banner.module.css';

const Banner = () => {
    // { categoria, titulo, descricao, capa }
    return(
        <section className={styles.capa}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Front end</h2>
                    <h3>SEO com React</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula velit ut nunc vehicula imperdiet. Fusce fermentum enim eget turpis egestas, id accumsan lorem sagittis. Suspendisse potenti. Vivamus a risus ut neque tincidunt pharetra. Pellentesque malesuada mauris ut magna interdum, a laoreet metus interdum. Donec massa nibh, vulputate in semper non, ultricies eu lectus. Quisque molestie vehicula suscipit. Sed molestie justo quis sodales vulputate. Nulla facilisi. Aliquam id finibus neque. Nulla facilisi. Fusce blandit luctus pulvinar. Sed quis vulputate purus.</p>
                </div>
                <img src='https://i.pinimg.com/564x/ac/02/07/ac02073cc739700e575b96b95ecb619f.jpg' alt='Capa do vídeo'/>
            </div>
        </section>
    )
}

export default Banner;
