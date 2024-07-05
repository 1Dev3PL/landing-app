<<<<<<< HEAD
import { Header } from 'widgets/header'
import { Content } from 'shared/ui/content/Content'
import styles from './MainPage.module.scss'
import {Footer} from 'widgets/footer'
import { Panel } from 'shared/ui/panel/Panel'
import { MainPageHeading } from 'widgets/main-page-heading/ui/MainPageHeading'
=======
import {Header} from 'widgets/header'
import styles from './styles.module.scss'
import {Footer} from 'widgets/footer';
>>>>>>> b3010988138ccf214439bfb5f9207b7a8b927a6f

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
