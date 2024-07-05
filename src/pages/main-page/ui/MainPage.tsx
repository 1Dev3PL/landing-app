import {Header} from 'widgets/header'
import styles from './styles.module.scss'
import {Footer} from 'widgets/footer';
import {Content} from "shared/ui/content/Content.tsx";
import {Catalog} from "widgets/catalog";
import {useNavigate} from "react-router-dom";
import {items} from "shared/db/db.ts";

export function MainPage() {
    const navigate = useNavigate();

    const handleCatalogHeaderBtnClick = () => {
        navigate("/production");
    }

    return (
        <div>
            <Header/>
            <Content>
               <Catalog title={"Каталог продукции"} btnTitle={"Вся продукция"} items={items} onHeaderBtnClick={handleCatalogHeaderBtnClick}/>
            </Content>
            <Footer/>
        </div>
    )
}
