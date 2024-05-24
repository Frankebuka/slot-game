import style from "../page.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.section}>
        <div className={style.FirstImageContainer} />
        <div className={style.FirstImageContainer1} />
        <div className={style.FirstImageContainer2} />
      </div>
      <div className={style.section}>
        <div className={style.SecondImageContainer} />
        <div className={style.SecondImageContainer1} />
        <div className={style.SecondImageContainer2} />
      </div>
      <div className={style.section}>
        <div className={style.ThirdImageContainer} />
        <div className={style.ThirdImageContainer1} />
        <div className={style.ThirdImageContainer2} />
      </div>
    </div>
  );
};

export default Card;
