//Styles
import style from "./FooterCreditItem.module.css";

interface Props {
    name: string;
    url: string;
    img: any;
}

const FooterCreditItem = ({ name, url, img }: Props) => {
    return (
        <div className={style.item_container}>
            <a href={url} target="_blank">
                <img src={img} alt={name} />
                <span>{name}</span>
            </a>
        </div>
    );
};

export default FooterCreditItem;
