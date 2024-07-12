import { useNavigate } from "react-router-dom";
import { Header } from "widgets/header";
import { Catalog } from "widgets/catalog";
import { factories, items, office } from "shared/db/db.ts";
import { Factories } from "widgets/factories";
import { Content } from "shared/ui/content/Content.tsx";
import { Contacts } from "widgets/contacts";
import { Feedback } from "widgets/feedback";
import { Footer } from "widgets/footer";

export function ProductionPage() {
  const navigate = useNavigate();

  const handleCatalogHeaderBtnClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <Content>
        <Catalog
          title="Продукция компании в Санкт-Петербурге и Ленобласти"
          btnTitle="На главную"
          items={items}
          onHeaderBtnClick={handleCatalogHeaderBtnClick}
        />
        '
        <Factories factories={factories} />
        <Contacts office={office} />
        <Feedback />
      </Content>
      <Footer />
    </div>
  );
}
