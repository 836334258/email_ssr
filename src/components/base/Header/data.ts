import { HeaderProp } from './interface'
const headerData: Record<string, HeaderProp> = {
  us: {
    logoOption: {
      src: 'https://mcusercontent.com/1330f49e4060849e9bede15d3/images/191575b3-b8c8-3eb1-3b6b-a99484217f21.png',
      href: 'https://flexispot.co.uk/'
    },
    navList: [
      {
        title: 'Standing Desk',
        href: 'https://flexispot.co.uk/category/height-adjustable-desks',
        width: '25%'
      },
      {
        title: 'Desk Converter',
        href: 'https://www.flexispot.de/stuhle.html',
        width: '25%'
      },
      {
        title: 'Desk Bike',
        href: 'https://flexispot.co.uk/category/fitness',
        width: '25%'
      },
      {
        title: 'Chair',
        href: 'https://flexispot.co.uk/category/standing-desk-accessories',
        width: '25%'
      }
    ]
  },
  de: {
    textAlign:'center',
    fontColor: '#333333',
    background: '#fff',
    logoOption: {
      src: 'https://mcusercontent.com/1330f49e4060849e9bede15d3/images/51c116c9-e8fe-c64f-9923-57ed8b8aa9d2.png',
      href: 'https://www.flexispot.de/'
    },
    navList: [
      {
        title: 'Höhenverstellbarer Schreibtisch',
        href: 'https://www.flexispot.de/hoehenverstellbarer-schreibtisch.html'
      },
      {
        width:'70px'
      },
      {
        title: 'Stuhl',
        href: 'https://www.flexispot.de/stuhle.html'
      },
      {
        width:'70px'
      },
      {
        title: 'FITNESS',
        href: 'https://www.flexispot.de/fitness.html'
      },
      {
        width:'70px'
      },
      {
        title: 'Bürozubehör',
        href: 'https://www.flexispot.de/zubehoer-fuer-schreibtische.html'
      }
    ]
  }
}

export default headerData
