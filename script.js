
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'http://www.exhibitionworld.co.uk/wp-content/uploads/2018/02/EW_Harry-Potter_Featured.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://1.fwcdn.pl/ph/68/78/6878/213976.2.jpg'
  },
  {
    id: 3,
    title: 'Życie jest piękne',
    desc: 'Film o getcie',
    img: 'http://1.fwcdn.pl/po/02/08/208/7520031.6.jpg'
  },
  {
    id: 4,
    title: 'Pocahontas',
    desc: 'Film animowany o indiance',
    img: 'http://1.fwcdn.pl/po/87/12/8712/7747593.6.jpg'
  },
  {
    id: 5,
    title: 'Maska',
    desc: 'Film o niezwykłym człowieku',
    img: 'https://i.pinimg.com/originals/dd/98/31/dd9831b74caf34b7a59f0476cb764b88.jpg'
  }

];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
