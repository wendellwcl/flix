//Style
import style from "./MicroInfo.module.css";

interface Props {
    text: string;
    value: string | { name: string }[] | number;
    unity?: string;
}

const MicroInfo = ({ text, value, unity }: Props) => {
    return (
        <p className={style.micro_info}>
            {text}:&nbsp;
            <span>
                {Array.isArray(value) ? (
                    value.map((item) => (
                        <span key={item.name} className={style.info_item}>
                            {item.name}
                            &nbsp;&nbsp;
                        </span>
                    ))
                ) : (
                    <span>{`${value} ${unity != undefined ? unity : ""}`}</span>
                )}
            </span>
        </p>
    );
};

export default MicroInfo;
