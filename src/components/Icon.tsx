import iconsSprite from "../images/icons/sprite.svg";

type iconIdPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewbox?: string,
    fill?: string

}

export const Icon = (props: iconIdPropsType) => {
    return (
        <svg width={props.width || "25"} height={props.height || "25"} viewBox={props.viewbox || "0 0 25 25"} fill={props.fill} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};