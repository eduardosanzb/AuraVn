const config = {
  debugMode: false,
  funnelTotalSteps: 6,
  views: [
    {
      to: '/',
      exact: true,
      text: 'Inicio',
      funnelStep: 0,
      previousFunnelStep: '/results',
      nextFunnelStep: '/dress-style',
      component: 'Home'
    },
    {
      text: 'Estilo del vestido',
      storeValue: 'dressStyle',
      funnelStep: 1,
      to: '/dress-style',
      previousFunnelStep: '/',
      nextFunnelStep: '/dress-finish',
      component: 'DressStyle'
    },
    {
      to: '/dress-finish',
      text: 'Acabado del vestido',
      storeValue: 'dressFinish',
      funnelStep: 2,
      previousFunnelStep: '/dress-style',
      nextFunnelStep: '/face',
      component: 'DressFinish'
    },
    {
      to: '/face',
      text: 'Tipo de rostro',
      storeValue: 'faceType',
      funnelStep: 3,
      previousFunnelStep: '/dress-finish',
      nextFunnelStep: 'hair',
      component: 'Face'
    },
    {
      to: '/hair',
      text: 'Peinado',
      storeValue: 'hairType',
      funnelStep: 4,
      previousFunnelStep: '/face',
      nextFunnelStep: '/results',
      component: 'Hair'
    },
    {
      to: '/results',
      text: 'Resultados',
      previousFunnelStep: '/hair',
      nextFunnelStep: '/',
      funnelStep: 5,
      component: 'Results'
    }
  ],
  cards: {
    dressStyle: [
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_a_shape.png',
        name: 'En A'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_greek.png',
        name: 'Griego'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_mermaid.png',
        name: 'Sirena'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_princess.png',
        name: 'Princesa'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_straight.png',
        name: 'Recto'
      }
    ],
    dressFinish: [
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_style_a.jpg',
        name: '1'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_style_b.jpg',
        name: '2'
      }
    ],
    faceType: [
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_heart.jpg',
        name: 'face_heart'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_oval.jpg',
        name: 'face_oval'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_rectangle.jpg',
        name: 'face_rectangle'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_round.jpg',
        name: 'face_round'
      }
    ],
    hairStyle: [
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_alto.png',
        name: 'hair_tall'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_recogido.png',
        name: 'hair_short'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_low.png',
        name: 'hair_low'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_loose.png',
        name: 'hair_loose'
      }
    ]
  }
};

const viewsToObjectWithKey = key =>
  config.views.reduce(
    (newViews, view) => ({
      ...newViews,
      [view[key]]: {
        ...view
      }
    }),
    {}
  );

export default {
  ...config,
  locationMatchStep: viewsToObjectWithKey('to')
};
