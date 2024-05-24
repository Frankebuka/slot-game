import styles from "../page.module.css";
import Button from "../components/Button";
import Card from "../components/Card";

const Landingpage = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.imageContainer1} />
        <Card />
        <Button />
      </div>
      <div className={styles.imageContainer2} />
    </>
  );
};

export default Landingpage;
