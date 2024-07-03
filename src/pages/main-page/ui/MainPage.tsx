import { Header } from 'widgets/header'
import { Content } from 'shared/ui/content/Content'
import styles from './MainPage.module.scss'
import {Footer} from 'widgets/footer'
import { Panel } from 'shared/ui/panel/Panel'
import { MainPageHeading } from 'widgets/main-page-heading/ui/MainPageHeading'

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
