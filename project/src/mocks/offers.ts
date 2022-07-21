import {Offer} from '../types/offer';

export const offers: Offer[] = [
  {
    'bedrooms': 6,
    'city': {
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.85309666406198,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'goods': [
      'Heating',
      'Wi-Fi',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwashe',
      'Towels',
      'Baby seat',
      'Cabel TV',
    ],
    'host': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 1,
      'isPro': false,
      'name': 'Zora',
    },
    'id': 1,
    'images': [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'maxAdults': 5,
    'previewImage': 'img/apartment-01.jpg',
    // 'previewImageFavorites': 'img/apartment-small-04.jpg',
    'price': 180,
    'rating': 1.5,
    'title': 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    'type': 'apartment',
  },
  {
    'bedrooms': 5,
    'city': {
      'location': {
        'latitude': 52.369553943508,
        'longitude': 4.85309666406198,
        'zoom': 8,
      },
      'name': 'Cologne',
    },
    'description': 'Curabitur et ullamcorper metus. Aenean et augue at nulla tempor facilisis. Nunc mattis enim odio, vel ultrices nulla rutrum eget.',
    'goods': [
      'Wi-Fi',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Dishwashe',
      'Towels',
      'Baby seat',
    ],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 2,
      'isPro': true,
      'name': 'Semen',
    },
    'id': 2,
    'images': [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
    ],
    'isFavorite': false,
    'isPremium': false,
    'location': {
      'latitude': 52.369553943508,
      'longitude': 4.85309666406198,
      'zoom': 11,
    },
    'maxAdults': 3,
    'previewImage': 'img/apartment-02.jpg',
    // 'previewImageFavorites': 'img/apartment-small-04.jpg',
    'price': 260,
    'rating': 2,
    'title': 'Mauris accumsan volutpat diam in auctor.',
    'type': 'room',
  },
  {
    'bedrooms': 4,
    'city': {
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 8,
      },
      'name': 'Brussels',
    },
    'description': 'Ut elementum mauris vehicula sem accumsan aliquam. Maecenas consectetur porta cursus.',
    'goods': [
      'Wi-Fi',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Towels',
      'Baby seat',
    ],
    'host': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Semen',
    },
    'id': 3,
    'images': [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8,
    },
    'maxAdults': 5,
    'previewImage': 'img/apartment-03.jpg',
    // 'previewImageFavorites': 'img/apartment-small-04.jpg',
    'price': 990,
    'rating': 3,
    'title': 'Quisque non dolor eu leo sagittis congue.',
    'type': 'house',
  },
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
        'zoom': 10,
      },
      'name': 'Hamburg',
    },
    'description': 'Nam turpis eros, ultricies ac lectus vitae, consequat efficitur nibh. Nulla facilisi. ',
    'goods': [
      'Wi-Fi',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Dishwashe',
      'Baby seat',
      'Cabel TV',
    ],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 4,
      'isPro': false,
      'name': 'Zora',
    },
    'id': 4,
    'images': [
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg',
    ],
    'isFavorite': false,
    'isPremium': true,
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 10,
    },
    'maxAdults': 3,
    'previewImage': 'img/apartment-03.jpg',
    // 'previewImageFavorites': 'img/apartment-small-04.jpg',
    'price': 100,
    'rating': 4.5,
    'title': 'Ut quis interdum mauris. Integer ut dolor cursus diam lacinia tempor ut nec leo.',
    'type': 'hotel',
  },
];
