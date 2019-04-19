import libraryImage from '../images/owned.png'
import booklistImage from '../images/wish.png'

export const library = {
    title: 'My Library',
    storeName: 'library',
    subtitle: '',
    image: libraryImage
}

export const booklist = {
    title: 'Personal Book List',
    storeName: 'booklist',
    subtitle: '',
    image: booklistImage
}


export const categories = [
  {
    url:'/library/',
    title: "Library",
    description:
      "Create your collection of books you own or have read, keep track all of the books you have spend time with over life.",
    icon_src: require("../images/owned.png")
  },
  {
    url:'/booklist/',
    title: "Book List",
    description:
      "Here is the place where you can keep a list of all the books you intend to buy and read.",
    icon_src: require("../images/wish.png")
  },
  {
    url:'/categories/',
    title: "Find Books",
    description:
      "Browse through and find books in our catalog of books, go ahead it's free.",
    icon_src: require("../images/find.png")
  }
];
