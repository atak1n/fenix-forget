const productsOld = {
  title: 'Каталог',
  annotate: '',
  products: [
    {
      title: 'Кованые Ворота',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Калитки',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Перила',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Балконы',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Козырьки',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Заборы',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Навесы',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Беседки',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Ограды',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Решетки',
      icon: 'mdi-pirate',
    },
    {
      title: 'Кованые Вывески',
      icon: 'mdi-pirate',
    },
    {
      title: 'Ворота Из Профнастила',
      icon: 'mdi-pirate',
    },
    {
      title: 'Ограждения',
      icon: 'mdi-pirate',
    },
    {
      title: 'Лестничные Марши И Косоуры',
      icon: 'mdi-pirate',
    },
    {
      title: 'Лофт',
      icon: 'mdi-pirate',
    },
    {
      title: 'Предметы Интерьера',
      icon: 'mdi-pirate',
    },
    {
      title: 'Металлоизделия',
      icon: 'mdi-pirate',
    },
    {
      title: 'Вольеры',
      icon: 'mdi-pirate',
    },

  ],
}


const products = {
  title: 'Каталог',
  annotate: 'Полный каталог продукции',
  products: [
    {
      title: 'Кованые ворота',
      // поле slug будет в URL адресе прим.
      // https://fenix-sr.ru/products/product_category/type/product_type/product_id/ или
      // https://fenix-sr.ru/products/vorota/type/vorota_prostie/1/
      slug: 'vorota',
      img: {
        preview: 'gallery/vorota/02_railing_400x300.jpg',
        original:'gallery/railing/02_railing_1000x750.jpg',
      },
      types: {
        type1: {
          name: 'Кованные ворота простые',
          slug: 'vorota_prostie',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 1,
              title: 'Ворота 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 2,
              title: 'Ворота 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
            {
              id: 3,
              title: 'Ворота 3',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 4,
              title: 'Ворота 4',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },


          ],
        },
        type2: {
          name: 'Кованные ворота с перломутровыми пуговицами',
          slug: 'vorota_perlomutr',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 5,
              title: 'Ворота 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 5,
              title: 'Ворота 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
          ],
        }
      }
    },

    {
      title: 'Кованые калитки',
      slug: 'kalitki',
      img: {
        preview: 'gallery/railing/02_railing_400x300.jpg',
        original:'gallery/railing/02_railing_1000x750.jpg',
      },
      types: {
        type1: {
          name: 'Кованые калитки тип1',
          slug: 'kalitki_1',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 6,
              title: 'Калитка 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 7,
              title: 'Калитка 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
            {
              id: 8,
              title: 'Калитка 3',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 9,
              title: 'Калитка 4',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

          ],
        },
        type2: {
          name: 'Кованые калитки тип 2',
          slug: 'kalitki_2',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 10,
              title: 'Калитка 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 11,
              title: 'Калитка 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
          ],
        }
      }
    },

    {
      title: 'Кованые перила',
      slug: 'perila',
      img: {
        preview: 'gallery/railing/02_railing_400x300.jpg',
        original:'gallery/railing/02_railing_1000x750.jpg',
      },
      types: {
        type1: {
          name: 'Кованые перила тип 1',
          slug: 'perila_1',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 12,
              title: 'Перило 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 13,
              title: 'Перило 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
            {
              id: 14,
              title: 'Перило 3',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 16,
              title: 'Перило 4',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

          ],
        },
        type2: {
          name: 'Кованые перила тип 2',
          slug: 'perila_2',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 17,
              title: 'Перило 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 18,
              title: 'Перило 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
          ],
        }
      }
    },

    {
      title: 'Кованые балконы',
      slug: 'balkoni',
      img: {
        preview: 'gallery/railing/02_railing_400x300.jpg',
        original:'gallery/railing/02_railing_1000x750.jpg',
      },
      types: {
        type1: {
          name: 'Кованые балконы тип 1',
          slug: 'balkoni_1',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 19,
              title: 'Балкон 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 20,
              title: 'Балкон 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
            {
              id: 21,
              title: 'Балкон 3',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 22,
              title: 'Балкон 4',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

          ],
        },
        type2: {
          name: 'Кованые балконы тип 2',
          slug: 'balkoni_2',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 23,
              title: 'Балкон 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 24,
              title: 'Балкон 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
          ],
        }
      }
    },

    {
      title: 'Кованые козырьки',
      slug: 'kozirky',
      img: {
        preview: 'gallery/railing/02_railing_400x300.jpg',
        original:'gallery/railing/02_railing_1000x750.jpg',
      },
      types: {
        type1: {
          name: 'Кованые козырьки тип 1',
          slug: 'kozirky_1',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              title: 'Козырёр 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              title: 'Козырёр 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
            {
              title: 'Козырёр 3',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              title: 'Козырёр 4',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

          ],
        },
        type2: {
          name: 'Кованые козырьки тип 2',
          slug: 'kozirky_2',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 25,
              title: 'Козырёр 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 26,
              title: 'Козырёр 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
          ],
        }
      }
    },

    {
      title: 'Кованые заборы',
      slug: 'zabory',
      img: {
        preview: 'gallery/railing/02_railing_400x300.jpg',
        original:'gallery/railing/02_railing_1000x750.jpg',
      },
      types: {
        type1: {
          name: 'Кованые заборы тип 1',
          slug: 'zabory_1',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 27,
              title: 'Забор 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 28,
              title: 'Забор 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
            {
              id: 29,
              title: 'Забор 3',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 30,
              title: 'Забор 4',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

          ],
        },
        type2: {
          name: 'Кованые козырьки тип 2',
          slug: 'zabory_2',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              id: 31,
              title: 'Забор 5',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              id: 32,
              title: 'Забор 6',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
          ],
        }
      }
    },

    {
      title: 'Кованые навесы',
      slug: 'navesi',
      img: {
        preview: 'gallery/railing/02_railing_400x300.jpg',
        original:'gallery/railing/02_railing_1000x750.jpg',
      },
      types: {
        type1: {
          name: 'Кованые козырьки тип 1',
          slug: 'navesi_1',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              title: 'Навес 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              title: 'Навес 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
            {
              title: 'Навес 3',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              title: 'Навес 4',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

          ],
        },
        type2: {
          name: 'Кованые козырьки тип 2',
          slug: 'navesi_2',
          img: {
            preview: 'gallery/railing/02_railing_400x300.jpg',
            original:'gallery/railing/02_railing_1000x750.jpg',
          },
          products: [
            {
              title: 'Навес 1',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },

            {
              title: 'Навес 2',
              text: 'здесь должно быть описание',
              img: {
                preview: 'gallery/railing/02_railing_400x300.jpg',
                original:'gallery/railing/02_railing_1000x750.jpg',
              },
            },
          ],
        }
      }
    },
  ]
}


export default products
