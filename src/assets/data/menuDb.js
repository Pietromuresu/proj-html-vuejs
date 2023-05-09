const mainMenu = [
  {
    text: 'Home',
    href: '#'
  },
  {
    text: 'Shop',
    href: '#'
  },
  {
    text: 'About',
    href: '#'
  },
  {
    text: 'Blog',
    href: '#'
  },
  {
    text: 'Contact',
    href: '#'
  },
  {
    text: 'Shop by brand',
    href: '#',
    brands: [
      {
        name: 'Frozen',
        desc: 'Freezed-Dried dog food',
        href: '#',
        img: 'mega-1.jpg'
      },
      {
        name: 'Kibble',
        desc: 'Dry dog food',
        href: '#',
        img: 'mega-2.jpg'
      },
      {
        name: 'Canned',
        desc: 'Moist dog food',
        href: '#',
        img: 'mega-3.jpg'
      },
    ]
  },

];

const menuCategories = [
  {
    name: 'Bed',
    href: '#',
    img: 'product-9'
  },
  {
    name: 'Food',
    href: '#',
    img: 'product-3'
  },
  {
    name: 'Toys',
    href: '#',
    img: 'product-2'
  },
  {
    name: 'Transport',
    href: '#',
    img: 'product-4'
  },
]

const usefulLinks = [
  {
    name: 'My account',
    href: '#'
  },
  {
    name: 'Order',
    href: '#'
  },
  {
    name: 'Checkout',
    href: '#'
  },
  {
    name: 'Cart',
    href: '#'
  },
]

export {mainMenu, menuCategories, usefulLinks}