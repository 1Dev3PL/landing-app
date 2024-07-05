import {Header} from 'widgets/header'
import styles from './styles.module.scss'
import {Footer} from 'widgets/footer';
import { MainPageHeading } from 'widgets/main-page-heading';
import { Content } from 'shared/ui/content/Content';

export function MainPage() {
  return (
    <div>
      <Header />
      <Content>
        <MainPageHeading />
      </Content>
      <Footer/>
    </div>
  )
}
