import rocket from './assets/rocket.svg';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="" />
            <h1>
                <span className={styles.to}>
                    to
                </span>
                <span className={styles.do}>
                    do
                </span>
            </h1>
        </header>
    );
};