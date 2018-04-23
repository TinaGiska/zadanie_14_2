var element =
React.createElement('div', {},
  React.createElement('h1' {}, 'Lista filmów'),
  React.createElement('ul', {},
    React.createElement('li', {},
   Raact.createElement('h2', {}, 'Harry Poter'),
   React.createElement('p', {}, 'Film o czarodzieju')
)
    React.createElement('li', {},
      React.createElement('h2', {}, 'Król Lew'),
      React.createElement('p', {} , 'Film opowiadający ...'),
    )
  )
);
ReactDOM.render(element, document.getElementById('app'));
