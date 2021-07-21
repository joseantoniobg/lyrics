import styles from './Line.module.scss';

export const Line = (props) => {
  return <div className={styles.line}>
    {props.children}
  </div>
}