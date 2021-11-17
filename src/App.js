import './App.css'
import SkillsPage from './Component/pages/Skills/SkillsPage'
import WorkPage from './Component/pages/Work/WorkPage'
import { Route } from 'react-router-dom'
import BottomNavbar from './Component/Navbar/Navbar'
import { useState } from 'react'
import ContactForm from './Component/pages/ContactForm/ContactForm'
import FirstPage from './Component/Home/FirstPage'
import { ReactComponent as Dark } from './icons/dark.svg'
import { ReactComponent as Light } from './icons/light.svg'
import { ReactComponent as Mixin } from './icons/mixin.svg'
import { ReactComponent as MixinLight } from './icons/mixinLight.svg'

function App() {
  const [Darkmode, setDarkmode] = useState(true)
  const Tog = () => {
    setDarkmode(!Darkmode)
  }

  return (
    <div className={Darkmode ? 'dark' : 'light'}>
      <div className='top'>
        <div>
          <div className='gray-line-1'></div>
          {Darkmode ? <Mixin /> : <MixinLight />}
          <div className='gray-line-2'></div>
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
      <BottomNavbar />
    </div>
  )
}

export default App
