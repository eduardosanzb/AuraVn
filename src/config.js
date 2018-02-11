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
        name: 'Encaje, bordado, pedreria'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/dress_style_b.jpg',
        name: 'Liso'
      }
    ],
    faceType: [
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_heart.jpg',
        name: 'Corazon'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_oval.jpg',
        name: 'Ovalado'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_rectangle.jpg',
        name: 'Cuadrado'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/face_round.jpg',
        name: 'Redondo'
      }
    ],
    hairStyle: [
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_alto.png',
        name: 'Moño alto'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_recogido.png',
        name: 'Moño bajo'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_low.png',
        name: 'Medio recogido'
      },
      {
        description: 'Lorem ipson',
        image: 'https://auravn.ams3.digitaloceanspaces.com/hair_loose.png',
        name: 'Suelto'
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
