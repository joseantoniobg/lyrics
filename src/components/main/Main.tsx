import styles from './Main.module.scss';
import { getColorsArray, getGradientColorsArray } from '../../utils/utils';
import AnimatedBg from "react-animated-bg";

export const Main = (props) => {
  return  <AnimatedBg
    colors={getColorsArray()}
    duration={3}
    delay={0}
    randomMode
    className={styles.main}>
      {props.children}
    </AnimatedBg>
}