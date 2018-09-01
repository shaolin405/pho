import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import ProjectSingle from './views/ProjectSingle'

export default [
  {
    key: 'home',
    name: 'Home',
    Component: Home,
    path: {
      path: '/',
      exact: true
    }
  },
  {
    key: 'about',
    name: 'About Us',
    Component: About,
    path: {
      path: '/about',
      exact: true
    }
  },
  {
    key: 'projects',
    name: 'Projects',
    Component: Projects,
    path: {
      path: '/project'
    }
  },
  {
    key: 'projects',
    multiple: true,
    name: 'Project',
    Component: ProjectSingle,
    path: {
      path: '/projects/:id',
      exact: true
    }
  }
]
