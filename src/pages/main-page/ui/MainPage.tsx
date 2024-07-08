import { Header } from "widgets/header";
import styles from "./styles.module.scss";
import { Footer } from "widgets/footer";
import { Content } from "shared/ui/content/Content.tsx";
import { Catalog } from "widgets/catalog";
import { useNavigate } from "react-router-dom";
import { items } from "shared/db/db.ts";
import { MainPageHeading } from "widgets/main-page-heading";
import { About } from 'widgets/about';
import { Partners } from "widgets/partners";
import { Question } from "shared/ui/question/Question.tsx";

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
        <Partners />
        <Question question={"Что-то"} answer={"Ответ ответ ответ ответ ответ ответ ответ"} />
      </Content>
      <Footer />
    </div>
  );
}
