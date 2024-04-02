import styles from '../styles/index.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundWrapper} data-testid='not-found-wrapper'>
        <h1>Page not found</h1>
        <p>Could not find requsted resourse</p>
    </div>
  );
}
  
export default NotFound;