import './App.css'
import SkillsPage from './Component/pages/Skills/SkillsPage'
import WorkPage from './Component/pages/Work/WorkPage'
import { Route } from 'react-router-dom'
import BottomNavbar from './Component/Navbar/Navbar'
import Collapse from './Component/Navbar/Colapse'
import { useState } from 'react'
import ContactForm from './Component/pages/ContactForm/ContactForm'
import FirstPage from './Component/Home/FirstPage'
import { ReactComponent as Dark } from './dark.svg'
import { ReactComponent as Light } from './light.svg'
import { ReactComponent as Mixin } from './mixin.svg'
import { ReactComponent as MixinLight } from './mixinLight.svg'

function App() {
  const [Darkmode, setDarkmode] = useState(true);
  const Tog = () => {
    setDarkmode(!Darkmode);
  }

  return (
    <div>

      <div className={Darkmode ? 'dark' : 'light'}>
        <div className="Big-screen">

          <div className='top'>

            <div>
              <div className={Darkmode ? 'gray-line-1' : 'gray-line-1-light'}></div>
              {Darkmode ? <Mixin /> : <MixinLight />}
              <div className={Darkmode ? 'gray-line-2' : 'gray-line-2-light'}></div>
            </div>
            <div>{Darkmode ? <Light onClick={Tog} /> : <Dark onClick={Tog} />}</div>
          </div>
          <main>
            <Route path='/Home'>
              <FirstPage Circle={Darkmode} />
            </Route>
            <Route path='/Work'>
              <WorkPage />
            </Route>
            <Route path='/Skills'>
              <SkillsPage Image={Darkmode} />
            </Route>
            <Route path='/Getintouch'>
              <ContactForm Icon={Darkmode} />
            </Route>
          </main>
          <BottomNavbar switchNav={Darkmode} />
        </div>
        <div className="small-screen">

          <FirstPage Circle={Darkmode} />
          <WorkPage />
          <SkillsPage Image={Darkmode} />
          <ContactForm Icon={Darkmode} />


        </div>
      </div>
    </div>
  )
}

export default App