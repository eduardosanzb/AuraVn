const config = {
  debugMode: true,
  funnelTotalSteps: 6,
  views: [{
    to: '/',
    exact: true,
    text: 'Home',
    funnelStep: 0,
    nextFunnelStep: '/dress-type',
    component: 'Home'
  }, {
    to: '/dress-type',
    text: 'Dress 1',
    storeValue: 'dressType',
    funnelStep: 1,
    previousFunnelStep: '/',
    nextFunnelStep: '/dress-finish',
    component: 'DressType'
  }, {
    to: '/dress-finish',
    text: 'Dress 2',
    storeValue: 'dressStyle',
    funnelStep: 2,
    previousFunnelStep: '/dress-type',
    nextFunnelStep: '/face',
    component: 'DressStyle'
  }, {
    to: '/face',
    text: 'Type of Face',
    storeValue: 'faceType',
    funnelStep: 3,
    previousFunnelStep: '/dress-finish',
    nextFunnelStep: 'hair',
    component: 'Face'
  }, {
    to: '/hair',
    text: 'Hair Style',
    storeValue: 'hairType',
    funnelStep: 4,
    previousFunnelStep: '/face',
    nextFunnelStep: '/hair',
    component: 'Hair'
  }, {
    to: '/results',
    text: 'Results',
    previousFunnelStep: '/hair',
    funnelStep: 5,
    component: 'Results'
  }],
  cards: {
    dressType: [

      {
        description: 'Lorem ipson',
        image: './dress_a_shape.png',
        name: '1',
      }, {
        description: 'Lorem ipson',
        image: './dress_greek.png',
        name: '2',
      }, {
        description: 'Lorem ipson',
        image: './dress_mermaid.png',
        name: '3',
      }, {
        description: 'Lorem ipson',
        image: './dress_princess.png',
        name: '4',
      }, {
        description: 'Lorem ipson',
        image: './dress_straight.png',
        name: '5',
      },
    ],
    dressStyle: [{
      description: 'Lorem ipson',
      image: './dress_style_a.png',
      name: '1',
    }, {
      description: 'Lorem ipson',
      image: './dress_style_b.png',
      name: '2',
    }, ],
    faceType: [{
      description: 'Lorem ipson',
      image: './face_heart.png',
      name: '2',
    }, {
      description: 'Lorem ipson',
      image: './face_oval.png',
      name: '2',
    }, {
      description: 'Lorem ipson',
      image: './face_rectangle.png',
      name: '2',
    }, {
      description: 'Lorem ipson',
      image: './face_round.png',
      name: '2',
    }, ],
    hairType: [{
      description: 'Lorem ipson',
      image: './hair_alto.png',
      name: '2',
    }, {
      description: 'Lorem ipson',
      image: './hair_recogido.png',
      name: '2',
    }, {
      description: 'Lorem ipson',
      image: './hair_low.png',
      name: '2',
    }, {
      description: 'Lorem ipson',
      image: './hair_loose.png',
      name: '2',
    }, ],
  }
}


const viewsToObjectWithKey = key =>
  config.views
  .reduce(
    (newViews, view) =>
    ({
      ...newViews,
      [view[key]]: { ...view
      }
    }), {}
  );

export default {
  ...config,
  locationMatchStep: viewsToObjectWithKey('to')
}
