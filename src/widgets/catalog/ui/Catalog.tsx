import styles from './styles.module.scss';
import {CatalogGrid} from "shared/ui/catalog-grid/CatalogGrid.tsx";
import {BlockHeader} from "shared/ui/block-header/BlockHeader.tsx";
import {Button} from "shared/ui/button/Button.tsx";
import {TItem} from "shared/db/db.ts";

type TCatalogProps = {
    title: string;
    btnTitle: string;
    items: TItem[];
    onHeaderBtnClick: () => void;
}

export const Catalog = (props: TCatalogProps) => {
    const {title, btnTitle, items, onHeaderBtnClick} = props;

    return (
        <div className={styles.catalog_container}>
            <BlockHeader title={title} color={"ultramarine"}>
                <Button title={btnTitle} color={"gray"} onClick={() => onHeaderBtnClick()}/>
            </BlockHeader>
            <CatalogGrid items={items}/>
        </div>
    )
}