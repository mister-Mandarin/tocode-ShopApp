export default {
  state: {
    listItems: [
      {
        id: 1,
        title: 'abibas 1',
        description: 'red 1',
        img: require('@/assets/img/1.png'),
        gallery: [
          {
            name: 'abibas 1.1',
            img: require('@/assets/img/1.png')
          },
          {
            name: 'abibas 1.2',
            img: require('@/assets/img/2.png')
          },
          {
            name: 'abibas 1.3',
            img: require('@/assets/img/3.png')
          }
        ]
      },
      {
        id: 2,
        title: 'abibas 2',
        description: 'red 2',
        img: require('@/assets/img/4.png'),
        gallery: [
          {
            name: 'abibas 2.1',
            img: require('@/assets/img/4.png')
          },
          {
            name: 'abibas 2.2',
            img: require('@/assets/img/5.png')
          },
          {
            name: 'abibas 2.3',
            img: require('@/assets/img/6.png')
          }
        ]
      },
      {
        id: 3,
        title: 'abibas 3',
        description: 'red 3',
        img: require('@/assets/img/7.png'),
        gallery: [
          {
            name: 'abibas 3.1',
            img: require('@/assets/img/7.png')
          },
          {
            name: 'abibas 3.2',
            img: require('@/assets/img/8.png')
          },
          {
            name: 'abibas 3.3',
            img: require('@/assets/img/9.png')
          }
        ]
      },
      {
        id: 4,
        title: 'abibas 4',
        description: 'red 4',
        img: require('@/assets/img/10.png'),
        gallery: [
          {
            name: 'abibas 4.1',
            img: require('@/assets/img/10.png')
          },
          {
            name: 'abibas 4.2',
            img: require('@/assets/img/11.png')
          },
          {
            name: 'abibas 4.3',
            img: require('@/assets/img/12.png')
          }
        ]
      }
    ]
  },

  // меняем state function(state, payload)
  mutations: {},

  // изменяет мутацию function(context, ...)
  actions: {},

  // getName.. получаем данные из state
  getters: {
    getListItems(state) {
      return state.listItems;
    },
    getProduct: state => id => {
      return state.listItems.find(item => item.id == id)
    }
  }
};
