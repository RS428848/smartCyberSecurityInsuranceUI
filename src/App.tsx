import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'

import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import {
  Header,
  Title,
  NavMenuButton,
  PrimaryNav,
  GridContainer,
} from '@trussworks/react-uswds'


import HomePage from './pages/Home'
import ExamplePage from './pages/Example'
import ModalsPage from './pages/Modals'
import FormsPage from './pages/Forms'
import AllCVEPage from './pages/ALLCVE'
import OtherPage from './pages/Other'
import { Routes } from './routes'

import './App.css'

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { HOME_PAGE, EXAMPLES_PAGE, MODALS_PAGE, FORMS_PAGE, CVE_PAGE, OTHER_PAGE, GRAPH_PAGE } = Routes

  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen)
  }

  const navItems = [
    <NavLink to={HOME_PAGE} activeClassName="usa-current" exact>
      Home
    </NavLink>,
    <NavLink to={CVE_PAGE} activeClassName="usa-current">
      Security Information
    </NavLink>,
    <NavLink to={EXAMPLES_PAGE} activeClassName="usa-current">
      Examples
    </NavLink>,
    <NavLink to={MODALS_PAGE} activeClassName="usa-current">
      Modals
    </NavLink>,
    <NavLink to={OTHER_PAGE} activeClassName="usa-current">
      Other
    </NavLink>,

  ]

  return (
    <Router>
      <Header basic>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>
              <Link to={HOME_PAGE}>Smart Cyber Insurance</Link>
            </Title>
            <NavMenuButton
              label="Menu"
              onClick={toggleMobileNav}
              className="usa-menu-btn"
            />
          </div>

          <PrimaryNav
            aria-label="Primary navigation"
            items={navItems}
            onToggleMobileNav={toggleMobileNav}
            mobileExpanded={mobileNavOpen}
          />
        </div>
      </Header>

      <section className="usa-section">
        <GridContainer>
          <Switch>
            <Route path={OTHER_PAGE}>
              <OtherPage />
            </Route>
            <Route path={EXAMPLES_PAGE}>
              <ExamplePage />
            </Route>
            <Route path={MODALS_PAGE}>
              <ModalsPage />
            </Route>
            <Route path={FORMS_PAGE}>
              <FormsPage />
            </Route>
            <Route path={CVE_PAGE}>
              <AllCVEPage />
            </Route>
            <Route path={HOME_PAGE}>
              <HomePage />
            </Route>
          </Switch>
        </GridContainer>
      </section>
    </Router>
  )
}

export default App
