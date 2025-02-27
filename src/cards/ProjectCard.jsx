import clsx from "clsx";
import style from "./project.module.scss";


const PersonCard = ({
                        id = undefined,
                        noStretch=false,
                        nameFile="",
                        alternativeName="",
                        urlToProject="/",
                    }) => {
    return (
        <a
            id={id}
            target="_blank"
            href={urlToProject}
            className={clsx(style.project,
                noStretch && style.noStretch)}>
            <img src={new URL(`/src/assets/projects/${nameFile}`,
                import.meta.url)}
                 alt={alternativeName}/>
        </a>
    )
}
export default PersonCard;