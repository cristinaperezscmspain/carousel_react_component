# sui-carousel

## Description
Slideshow/carousel react component created using [generator-sui-react](https://github.com/SUI-Components/generator-sui-react) and [react-swipe](https://github.com/jed/react-swipe) library.

## Demo

View live demo on [github.io](http://cristinaperezscmspain.github.io/carousel_react_component/)

## Instalation
Clone this repository. CD to folder sui-carousel and run:
```
$ npm install
```

## Setup

Run:

```
$ npm run dev
```

To run the lint tasks we have dependencies of:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [scss-lint](https://github.com/brigade/scss-lint)

If that tools are not installed you cant commit. Because the lint pass never will be ok.

## Start working in development mode:
```
$ npm run dev
```
This command will build your `.sass`, `.jsx` and `.js` files and open a local development environment, with hot reloading. A browser window will be opened as well, showing the entry point of your documents folder for development purposes.

## To work in TDD mode:
```
$ npm run test:watch
```
## To run unit tests only once:
```
$ npm test
```

## Usage
```
var data = [
  {
    id         : "slide1",
    imagePath  : "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/11326163_148497685488515_9386340_n.jpg",
    imageAlt   : "Sello de montaña y ola japonesa carvados a mano #stamping #crafts",
    title      : "Sello de montaña y ola japonesa carvados a mano #stamping #crafts",
    imageHeight : "500px"
  },
  {
    id         : "slide2",
    imagePath  : "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11809729_711469768984806_1727706550_n.jpg",
    imageAlt   : "acuareleando",
    title      : "acuareleando",
    imageHeight : "500px"
  },
  {
    id         : "slide3",
    imagePath  : "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11355147_915182411888366_323491906_n.jpg",
    imageAlt   : "curry rojo tailandes",
    title      : "curry rojo tailandes",
    imageHeight : "500px"
  },
];

<Carousel data={data} />
```