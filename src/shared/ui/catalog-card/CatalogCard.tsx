import {Panel} from "shared/ui/panel/Panel.tsx";
import styles from './styles.module.scss'
import {FractionLabel} from "shared/ui/fraction-label/FractionLabel.tsx";
import {Button} from "shared/ui/button/Button.tsx";
import {useNavigate} from "react-router-dom";

type TCardProps = {
    imgSrc: string;
    title: string;
    description: string;
    fractions: string[];
    productGroupId: number;
}

export const CatalogCard = (props: TCardProps) => {
    const {imgSrc, title, description, fractions, productGroupId} = props;
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/products/group/${productGroupId}`);
    }

    return (
        <Panel className={styles.card_container}>
            <div className={styles.image_container}>
                <img className={styles.image} src={imgSrc} alt={"productImage"}/>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.fractions_container}>
                {fractions.map((fr, idx) => <FractionLabel key={idx} label={fr}/>)}
                <Button color={"ultramarine"} size={"small"} onClick={() => handleButtonClick()}>
                    Все виды
                </Button>
            </div>
        </Panel>
    )
}