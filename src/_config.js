export const process = {
  dev: true
}

export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'https://tocode.ru'
}

export const app = {
  title: 'Shop'
}

export const links = [
  {
    title: 'Shop',
    alias: 'shop',
    url: '/shop'
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about'
  }
]
