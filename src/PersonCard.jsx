import clsx from "clsx";
import style from "./person.module.scss";


const PersonCard = ({
                        photo,
                        name,
                        surname,
                        position,
                        achievement

                    }) => {
    return (
        <div className={style.card}>
            <img src={new URL(`/src/assets/team/${photo}`, import.meta.url)}
                    className={style.photo}
                 alt={""}
                 onError={(e) => {
                     e.target.src = new URL("/src/assets/team/default.png", import.meta.url);
                 }}
            />
            <div className={style.description}>
                <h3 className={style.nameBox}>
                    <span className={clsx("subtitle-medium")}>
                        {name}
                    </span>
                    <span className={clsx("subtitle-medium")}>
                        {surname}
                    </span>
                </h3>

                <p className={clsx( "text-regular-16", style.position)}>
                    {position}
                </p>
                <p className={clsx( "text-regular-14", style.achievement)}>
                    {achievement}
                </p>
            </div>
        </div>
    )
}
export default PersonCard;