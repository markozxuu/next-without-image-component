import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <p>Hero image</p>
           <img
              style={{ width: '100%', height: '100%' }}
              src="/retro.jpg" 
              alt="retro" 
           />
        </div>
    )
}

export default Banner;
