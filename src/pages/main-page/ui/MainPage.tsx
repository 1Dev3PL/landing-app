import { Header } from "widgets/header";
import styles from "./styles.module.scss";
import { Footer } from "widgets/footer";
import { Content } from "shared/ui/content/Content.tsx";
import { Catalog } from "widgets/catalog";
import { useNavigate } from "react-router-dom";
import {items, reviews} from "shared/db/db.ts";
import { MainPageHeading } from "widgets/main-page-heading";
import {Reviews} from "widgets/reviews";
import { About } from 'widgets/about';
import { Partners } from "widgets/partners";

export function MainPage() {
  const navigate = useNavigate();

  const handleCatalogHeaderBtnClick = () => {
    navigate("/production");
  };

  return (
    <div>
      <Header />
      <Content>
        <MainPageHeading />
        <Catalog
          title={"Каталог продукции"}
          btnTitle={"Вся продукция"}
          items={items}
          onHeaderBtnClick={handleCatalogHeaderBtnClick}
        />
        <About />
        <Reviews items={reviews}/>
        <Partners />
      </Content>
      <Footer />
    </div>
  );
}
