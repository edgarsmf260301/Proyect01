$(function () {

  // Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });

  // Posts
  var posts = [
    {
      title: 'Prueba de Titulo 1',
      date: 'Cargado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat nibh sed molestie dignissim. Duis dictum arcu ut consectetur elementum. Suspendisse sit amet enim ac mauris maximus venenatis. Mauris nunc velit, lacinia molestie vehicula eget, blandit a diam. Vestibulum eu vulputate sem. Cras vel gravida tellus. Integer iaculis est vel felis tincidunt, eget tempor ante molestie. Vestibulum scelerisque tellus sed mauris eleifend porttitor. Integer est enim, mollis vel justo id, vehicula lacinia diam. Quisque consequat lobortis dui, ut sodales velit auctor ac.'
    },
    {
      title: 'Prueba de Titulo 2',
      date: 'Cargado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat nibh sed molestie dignissim. Duis dictum arcu ut consectetur elementum. Suspendisse sit amet enim ac mauris maximus venenatis. Mauris nunc velit, lacinia molestie vehicula eget, blandit a diam. Vestibulum eu vulputate sem. Cras vel gravida tellus. Integer iaculis est vel felis tincidunt, eget tempor ante molestie. Vestibulum scelerisque tellus sed mauris eleifend porttitor. Integer est enim, mollis vel justo id, vehicula lacinia diam. Quisque consequat lobortis dui, ut sodales velit auctor ac.'
    },
    {
      title: 'Prueba de Titulo 3',
      date: 'Cargado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat nibh sed molestie dignissim. Duis dictum arcu ut consectetur elementum. Suspendisse sit amet enim ac mauris maximus venenatis. Mauris nunc velit, lacinia molestie vehicula eget, blandit a diam. Vestibulum eu vulputate sem. Cras vel gravida tellus. Integer iaculis est vel felis tincidunt, eget tempor ante molestie. Vestibulum scelerisque tellus sed mauris eleifend porttitor. Integer est enim, mollis vel justo id, vehicula lacinia diam. Quisque consequat lobortis dui, ut sodales velit auctor ac.'
    },
    {
      title: 'Prueba de Titulo 4',
      date: 'Cargado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat nibh sed molestie dignissim. Duis dictum arcu ut consectetur elementum. Suspendisse sit amet enim ac mauris maximus venenatis. Mauris nunc velit, lacinia molestie vehicula eget, blandit a diam. Vestibulum eu vulputate sem. Cras vel gravida tellus. Integer iaculis est vel felis tincidunt, eget tempor ante molestie. Vestibulum scelerisque tellus sed mauris eleifend porttitor. Integer est enim, mollis vel justo id, vehicula lacinia diam. Quisque consequat lobortis dui, ut sodales velit auctor ac.'
    },
    {
      title: 'Prueba de Titulo 5',
      date: 'Cargado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat nibh sed molestie dignissim. Duis dictum arcu ut consectetur elementum. Suspendisse sit amet enim ac mauris maximus venenatis. Mauris nunc velit, lacinia molestie vehicula eget, blandit a diam. Vestibulum eu vulputate sem. Cras vel gravida tellus. Integer iaculis est vel felis tincidunt, eget tempor ante molestie. Vestibulum scelerisque tellus sed mauris eleifend porttitor. Integer est enim, mollis vel justo id, vehicula lacinia diam. Quisque consequat lobortis dui, ut sodales velit auctor ac.'
    },
  ];

  posts.forEach((item, index) => {
    var post = `
    <article class="post">
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>
    ${item.content}
    </p>
    <a href="#" class="button-more">leer más</a>
  </article>
  `;

    $("#posts").append(post);
  });

});