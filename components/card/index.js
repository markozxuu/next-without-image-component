// Styles
import styles from './card.module.scss';

const Card = ({ title, cover_photo }) => {
    return (
        <div className={styles.card}>
            <span className={styles.link}>{title}</span>
            <img 
                className={styles.cover} 
                src={cover_photo.urls.full} 
            />
        </div>
    )
}

export default Card;
