const products = {
  title: 'Каталог',
  annotate: '',
  products: [
    {
      title: 'Кованые ворота',
      // поле slug будет в URL адресе прим.
      // https://fenix-sr.ru/product_category/product_type/product_id/ или
      // https://fenix-sr.ru/vorota/vorota_prostie/1/
      slug: 'vorota',
      img: {
        preview: 'gallery/vorota/01_vorota_400x300.jpg',
        original:'gallery/vorota/01_vorota_1000x750.jpg',
      },

      text: 'Ворота - являются визитной карточкой вашего дома, которая определяет статус и вкус хозяина. Кованные ворота на фоне других выделяются высокой декоративностью и художественной ценностью',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованные ворота'},
          { name: 'keywords', content: 'купить кованные ворота не дорого, кованные ворота своими руками, кованные ворота по своим чертежам, ковка, ковка мо, кованные ворота подбор'},
        ],
        title: 'Купить кованные ворота в Москве и МО, разработка индивидуального дизайна ковки –от компании Феникс Стальное Решение'
      },

      types: [
        {
          title: 'Кованные ворота распашные',
          slug: 'vorota_prostie',
          img: {
            preview: 'gallery/vorota/02_vorota_400x300.jpg',
            original: 'gallery/vorota/02_vorota_1000x750.jpg',
          },
          products: [
            {
              id: 1,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №1',
              img: {
                preview: 'gallery/vorota/01_vorota_400x300.jpg',
                original: 'gallery/vorota/01_vorota_1000x750.jpg',
              },
            },
            {
              id: 2,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №2',
              img: {
                preview: 'gallery/vorota/02_vorota_400x300.jpg',
                original: 'gallery/vorota/02_vorota_1000x750.jpg',
              },
            },
            {
              id: 3,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №3',
              img: {
                preview: 'gallery/vorota/03_vorota_400x300.jpg',
                original: 'gallery/vorota/03_vorota_1000x750.jpg',
              },
            },

            {
              id: 4,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №4',
              img: {
                preview: 'gallery/vorota/04_vorota_400x300.jpg',
                original: 'gallery/vorota/04_vorota_1000x750.jpg',
              },
            },


            {
              id: 5,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №5',
              img: {
                preview: 'gallery/vorota/05_vorota_400x300.jpg',
                original: 'gallery/vorota/05_vorota_1000x750.jpg',
              },
            },


            {
              id: 6,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №6',
              img: {
                preview: 'gallery/vorota/06_vorota_400x300.jpg',
                original: 'gallery/vorota/06_vorota_1000x750.jpg',
              },
            },


            {
              id: 7,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №7',
              img: {
                preview: 'gallery/vorota/07_vorota_400x300.jpg',
                original: 'gallery/vorota/07_vorota_1000x750.jpg',
              },
            },


            {
              id: 8,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №8',
              img: {
                preview: 'gallery/vorota/08_vorota_400x300.jpg',
                original: 'gallery/vorota/08_vorota_1000x750.jpg',
              },
            },


            {
              id: 9,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №9',
              img: {
                preview: 'gallery/vorota/09_vorota_400x300.jpg',
                original: 'gallery/vorota/09_vorota_1000x750.jpg',
              },
            },


            {
              id: 10,
              title: 'Распашные кованые ворота',
              text: 'Пример ворот №10',
              img: {
                preview: 'gallery/vorota/10_vorota_400x300.jpg',
                original: 'gallery/vorota/10_vorota_1000x750.jpg',
              },
            },


          ],
        },
        {
          title: 'Откатные кованные ворота',
          slug: 'vorota_otkatnye',
          img: {
            preview: 'gallery/vorota/otkatnye/01_otkatnye_400x300.jpg',
            original: 'gallery/vorota/otkatnye/01_otkatnye_1000x750.jpg',
          },
          products: [
            {
              id: 11,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №11',
              img: {
                preview: 'gallery/vorota/otkatnye/01_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/01_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 12,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №12',
              img: {
                preview: 'gallery/vorota/otkatnye/02_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/02_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 13,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №13',
              img: {
                preview: 'gallery/vorota/otkatnye/03_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/03_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 14,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №14',
              img: {
                preview: 'gallery/vorota/otkatnye/04_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/04_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 15,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №15',
              img: {
                preview: 'gallery/vorota/otkatnye/05_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/05_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 16,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №16',
              img: {
                preview: 'gallery/vorota/otkatnye/06_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/06_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 17,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №17',
              img: {
                preview: 'gallery/vorota/otkatnye/07_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/07_otkatnye_1000x750.jpg',
              },
            },
            {
              id: 18,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №18',
              img: {
                preview: 'gallery/vorota/otkatnye/08_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/08_otkatnye_1000x750.jpg',
              },
            },
            {
              id: 19,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №19',
              img: {
                preview: 'gallery/vorota/otkatnye/09_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/09_otkatnye_1000x750.jpg',
              },
            },
            {
              id: 20,
              title: 'Откатные кованые ворота',
              text: 'Пример ворот №20',
              img: {
                preview: 'gallery/vorota/otkatnye/10_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/10_otkatnye_1000x750.jpg',
              },
            },

          ],
        }
      ]
    },
    {
      title: 'Кованые калитки',
      slug: 'kalitki',
      img: {
        preview: 'gallery/kalitki/01_kalitki_400x300.jpg',
        original:'gallery/kalitki/01_kalitki_1000x750.jpg',
      },
      text: 'Кованные калитки являются украшением входной зоны, придают забору и ограждению завершенный вид, облогараживают пространство. Кованные ворота отличаются отовсех других своей прочностью, стойкостью к механическим повреждениям и погодным явлениям.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованные калитки'},
          { name: 'keywords', content: 'купить калитки не дорого, калитки своими руками, калитки по своим чертежам, kovka-mo,калитки,калитки одинцово'},
        ],
        title: 'Купить кованные калитки в Москве и МО – ковка –от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые калитки',
          slug: 'kalitki_prostie',
          img: {
            preview: 'gallery/kalitki/01_kalitki_400x300.jpg',
            original:'gallery/kalitki/01_kalitki_1000x750.jpg',
          },
          products: [
            {
              id: 21,
              title: 'Калитки уличные',
              text: 'Пример калиток №1',
              img: {
                preview: 'gallery/kalitki/01_kalitki_400x300.jpg',
                original:'gallery/kalitki/01_kalitki_1000x750.jpg',
              },
            },

            {
              id: 22,
              title: 'Калитки уличные',
              text: 'Пример калиток №2',
              img: {
                preview: 'gallery/kalitki/02_kalitki_400x300.jpg',
                original:'gallery/kalitki/02_kalitki_1000x750.jpg',
              },
            },
            {
              id: 23,
              title: 'Калитки уличные',
              text: 'Пример калиток №3',
              img: {
                preview: 'gallery/kalitki/03_kalitki_400x300.jpg',
                original:'gallery/kalitki/03_kalitki_1000x750.jpg',
              },
            },

            {
              id: 24,
              title: 'Калитки уличные',
              text: 'Пример калиток №4',
              img: {
                preview: 'gallery/kalitki/04_kalitki_400x300.jpg',
                original:'gallery/kalitki/04_kalitki_1000x750.jpg',
              },
            },

            {
              id: 25,
              title: 'Калитки уличные',
              text: 'Пример калиток №5',
              img: {
                preview: 'gallery/kalitki/05_kalitki_400x300.jpg',
                original:'gallery/kalitki/05_kalitki_1000x750.jpg',
              },
            },

            {
              id: 26,
              title: 'Калитки уличные',
              text: 'Пример калиток №6',
              img: {
                preview: 'gallery/kalitki/06_kalitki_400x300.jpg',
                original:'gallery/kalitki/06_kalitki_1000x750.jpg',
              },
            },

            {
              id: 27,
              title: 'Калитки уличные',
              text: 'Пример калиток №7',
              img: {
                preview: 'gallery/kalitki/07_kalitki_400x300.jpg',
                original:'gallery/kalitki/07_kalitki_1000x750.jpg',
              },
            },

            {
              id: 28,
              title: 'Калиткиуличные',
              text: 'Пример калиток №8',
              img: {
                preview: 'gallery/kalitki/08_kalitki_400x300.jpg',
                original:'gallery/kalitki/08_kalitki_1000x750.jpg',
              },
            },

            {
              id: 29,
              title: 'Калитки уличные',
              text: 'Пример калиток №9',
              img: {
                preview: 'gallery/kalitki/09_kalitki_400x300.jpg',
                original:'gallery/kalitki/09_kalitki_1000x750.jpg',
              },
            },

            {
              id: 30,
              title: 'Калитки уличные',
              text: 'Пример калиток №10',
              img: {
                preview: 'gallery/kalitki/10_kalitki_400x300.jpg',
                original:'gallery/kalitki/10_kalitki_1000x750.jpg',
              },
            },

          ],
        },
        {
          title: 'Кованые калитки в доме',
          slug: 'kalitki_dom',
          img: {
            preview: 'gallery/kalitki/kalitkivdome/01_kalitkivdome_400x300.jpg',
            original:'gallery/kalitki/kalitkivdome/01_kalitkivdome_1000x750.jpg',
          },
          products: [
            {
              id: 31,
              title: 'Калитка в помещении',
              text: 'Пример калиток в помещении №1',
              img: {
                preview: 'gallery/kalitki/kalitkivdome/01_kalitkivdome_400x300.jpg',
                original:'gallery/kalitki/kalitkivdome/01_kalitkivdome_1000x750.jpg',
              },
            },

          ],
        }
      ]
    },
    {
      title: 'Кованые перила',
      slug: 'perila',
      img: {
        preview: 'gallery/perila/01_perila_400x300.jpg',
        original:'gallery/perila/01_perila_1000x750.jpg',
      },
      text: 'Перила являются неотъемлемым атрибутом любого здания. Они встречаются у входа в дом, крепятся на лестницы.' +
             ' По внешнему виду кованные перила могут быть красивее резных деревянных,' +
             ' благодаря технологиям художественной ковки позволяющим создавать уникальные фигуры.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованные перила в Москве'},
          { name: 'keywords', content: 'купить кованные перила не дорого, кованные перила  своими руками, кованные перила по своим чертежам, kovka-mo,кованные перила,перила одинцово'},
        ],
        title: 'Купить кованные перила  в Москве и МО – ковка –от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые перила в стиле Барокко',
          slug: 'perila_barokko',
          img: {
            preview: 'gallery/perila/baroko/01_perila_barokko_400x300.jpg',
            original:'gallery/perila/baroko/01_perila_barokko_1000x750.jpg',
          },
          products: [
            {
              id: 32,
              title: 'Кованые перила в стиле Барокко',
              text: 'Кованые перила в стиле Барокко №1',
              img: {
                preview: 'gallery/perila/baroko/01_perila_barokko_400x300.jpg',
                original:'gallery/perila/baroko/01_perila_barokko_1000x750.jpg',
              },
            },

            {
              id: 33,
              title: 'Кованые перила в стиле Барокко',
              text: 'Кованые перила в стиле Барокко №2',
              img: {
                preview: 'gallery/perila/baroko/02_perila_barokko_400x300.jpg',
                original:'gallery/perila/baroko/02_perila_barokko_1000x750.jpg',
              },
            },
            {
              id: 34,
              title: 'Кованые перила в стиле Барокко',
              text: 'Кованые перила в стиле Барокко №3',
              img: {
                preview: 'gallery/perila/baroko/03_perila_barokko_400x300.jpg',
                original:'gallery/perila/baroko/03_perila_barokko_1000x750.jpg',
              },
            },

            {
              id: 35,
              title: 'Кованые перила в стиле Барокко',
              text: 'Кованые перила в стиле Барокко №4',
              img: {
                preview: 'gallery/perila/baroko/04_perila_barokko_400x300.jpg',
                original:'gallery/perila/baroko/04_perila_barokko_1000x750.jpg',
              },
            },

            {
              id: 36,
              title: 'Кованые перила в стиле Барокко',
              text: 'Кованые перила в стиле Барокко №5',
              img: {
                preview: 'gallery/perila/baroko/05_perila_barokko_400x300.jpg',
                original:'gallery/perila/baroko/05_perila_barokko_1000x750.jpg',
              },
            },

            {
              id: 37,
              title: 'Кованые перила в стиле Барокко',
              text: 'Кованые перила в стиле Барокко №6',
              img: {
                preview: 'gallery/perila/baroko/06_perila_barokko_400x300.jpg',
                original:'gallery/perila/baroko/06_perila_barokko_1000x750.jpg',
              },
            },

          ],
        },
        {
          title: 'Кованые перила в стиле Рококо',
          slug: 'perila_rokoko',
          img: {
            preview: 'gallery/perila/rokoko/01_perila_rokoko_400x300.jpg',
            original:'gallery/perila/rokoko/01_perila_rokoko_1000x750.jpg',
          },
          products: [
            {
              id: 38,
              title: 'Кованые перила в стиле Рококо',
              text: 'Кованые перила в стиле Рококо №1',
              img: {
                preview: 'gallery/perila/rokoko/01_perila_rokoko_400x300.jpg',
                original:'gallery/perila/rokoko/01_perila_rokoko_1000x750.jpg',
              },
            },

            {
              id: 39,
              title: 'Кованые перила в стиле Рококо',
              text: 'Кованые перила в стиле Рококо №2',
              img: {
                preview: 'gallery/perila/rokoko/02_perila_rokoko_400x300.jpg',
                original:'gallery/perila/rokoko/02_perila_rokoko_1000x750.jpg',
              },
            },
            {
              id: 40,
              title: 'Кованые перила в стиле Рококо',
              text: 'Кованые перила в стиле Рококо №3',
              img: {
                preview: 'gallery/perila/rokoko/03_perila_rokoko_400x300.jpg',
                original:'gallery/perila/rokoko/03_perila_rokoko_1000x750.jpg',
              },
            },
            {
              id: 41,
              title: 'Кованые перила в стиле Рококо',
              text: 'Кованые перила в стиле Рококо №4',
              img: {
                preview: 'gallery/perila/rokoko/04_perila_rokoko_400x300.jpg',
                original:'gallery/perila/rokoko/04_perila_rokoko_1000x750.jpg',
              },
            },
            {
              id: 42,
              title: 'Кованые перила в стиле Рококо',
              text: 'Кованые перила в стиле Рококо №5',
              img: {
                preview: 'gallery/perila/rokoko/05_perila_rokoko_400x300.jpg',
                original:'gallery/perila/rokoko/05_perila_rokoko_1000x750.jpg',
              },
            },
          ],
        },
        {
          title: 'Кованые перила в классическом стиле',
          slug: 'perila_klasik',
          img: {
            preview: 'gallery/perila/klasik/01_perila_klasik_400x300.jpg',
            original:'gallery/perila/klasik/01_perila_klasik_1000x750.jpg',
          },
          products: [
            {
              id: 43,
              title: 'Кованые перила в классическом стиле',
              text: 'Кованые перила в классическом стиле №1',
              img: {
                preview: 'gallery/perila/klasik/01_perila_klasik_400x300.jpg',
                original:'gallery/perila/klasik/01_perila_klasik_1000x750.jpg',
              },
            },

            {
              id: 44,
              title: 'Кованые перила в классическом стиле',
              text: 'Кованые перила в классическом стиле №2',
              img: {
                preview: 'gallery/perila/klasik/02_perila_klasik_400x300.jpg',
                original:'gallery/perila/klasik/02_perila_klasik_1000x750.jpg',
              },
            },
            {
              id: 45,
              title: 'Кованые перила в классическом стиле',
              text: 'Кованые перила в классическом стиле №3',
              img: {
                preview: 'gallery/perila/klasik/03_perila_klasik_400x300.jpg',
                original:'gallery/perila/klasik/03_perila_klasik_1000x750.jpg',
              },
            },
            {
              id: 46,
              title: 'Кованые перила в классическом стиле',
              text: 'Кованые перила в классическом стиле №4',
              img: {
                preview: 'gallery/perila/klasik/04_perila_klasik_400x300.jpg',
                original:'gallery/perila/klasik/04_perila_klasik_1000x750.jpg',
              },
            },


            {
              id: 47,
              title: 'Кованые перила в классическом стиле',
              text: 'Кованые перила в классическом стиле №5',
              img: {
                preview: 'gallery/perila/klasik/05_perila_klasik_400x300.jpg',
                original:'gallery/perila/klasik/05_perila_klasik_1000x750.jpg',
              },
            },

            {
              id: 48,
              title: 'Кованые перила в классическом стиле',
              text: 'Кованые перила в классическом стиле №6',
              img: {
                preview: 'gallery/perila/klasik/06_perila_klasik_400x300.jpg',
                original:'gallery/perila/klasik/06_perila_klasik_1000x750.jpg',
              },
            },

            {
              id: 49,
              title: 'Кованые перила в классическом стиле',
              text: 'Кованые перила в классическом стиле №7',
              img: {
                preview: 'gallery/perila/klasik/07_perila_klasik_400x300.jpg',
                original:'gallery/perila/klasik/07_perila_klasik_1000x750.jpg',
              },
            },


          ],
        },
        {
          title: 'Кованые перила в современном стиле',
          slug: 'perila_sovremen',
          img: {
            preview: 'gallery/perila/sovremen/01_perila_sovremen_400x300.jpg',
            original:'gallery/perila/sovremen/01_perila_sovremen_1000x750.jpg',
          },
          products: [
            {
              id: 50,
              title: 'Кованые перила в современном стиле',
              text: 'Кованые перила в современном стиле №1',
              img: {
                preview: 'gallery/perila/sovremen/01_perila_sovremen_400x300.jpg',
                original:'gallery/perila/sovremen/01_perila_sovremen_1000x750.jpg',
              },
            },

            {
              id: 51,
              title: 'Кованые перила в современном стиле',
              text: 'Кованые перила в современном стиле №2',
              img: {
                preview: 'gallery/perila/sovremen/02_perila_sovremen_400x300.jpg',
                original:'gallery/perila/sovremen/02_perila_sovremen_1000x750.jpg',
              },
            },
            {
              id: 52,
              title: 'Кованые перила в современном стиле',
              text: 'Кованые перила в современном стиле №3',
              img: {
                preview: 'gallery/perila/sovremen/03_perila_sovremen_400x300.jpg',
                original:'gallery/perila/sovremen/03_perila_sovremen_1000x750.jpg',
              },
            },
            {
              id: 53,
              title: 'Кованые перила в современном стиле',
              text: 'Кованые перила в современном стиле №4',
              img: {
                preview: 'gallery/perila/sovremen/04_perila_sovremen_400x300.jpg',
                original:'gallery/perila/sovremen/04_perila_sovremen_1000x750.jpg',
              },
            },
            {
              id: 54,
              title: 'Кованые перила в современном стиле',
              text: 'Кованые перила в современном стиле №5',
              img: {
                preview: 'gallery/perila/sovremen/05_perila_sovremen_400x300.jpg',
                original:'gallery/perila/sovremen/05_perila_sovremen_1000x750.jpg',
              },
            },
            {
              id: 55,
              title: 'Кованые перила в современном стиле',
              text: 'Кованые перила в современном стиле №6',
              img: {
                preview: 'gallery/perila/sovremen/06_perila_sovremen_400x300.jpg',
                original:'gallery/perila/sovremen/06_perila_sovremen_1000x750.jpg',
              },
            },

            {
              id: 56,
              title: 'Кованые перила в современном стиле',
              text: 'Кованые перила в современном стиле №7',
              img: {
                preview: 'gallery/perila/sovremen/07_perila_sovremen_400x300.jpg',
                original:'gallery/perila/sovremen/07_perila_sovremen_1000x750.jpg',
              },
            },


          ],
        }
      ]
    },
    {
      title: 'Кованые балконы',
      slug: 'balkoni',
      img: {
        preview: 'gallery/balkoni/01_balkoni_400x300.jpg',
        original:'gallery/balkoni/01_balkoni_1000x750.jpg',
      },
      text: 'При постройке дома балкон является обязательным элементом. Он не только удобен и уютен, ' +
            'но и придает дому большую эстетичность. А если сделать кованое ограждение балкона, он будет ' +
            'смотреться особо изящно и притягивать к себе взгляды. Кроме красоты, кованые перила на балконе ' +
            'отличаются особой надежностью и стойкостью, поэтому будут радовать вас долгие годы.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованый балкон в Москве'},
          { name: 'keywords', content: 'купить кованый балкон не дорого, кованый балкон  своими руками, кованый балкон по своим чертежам, kovka-mo,кованый балкон,балкон одинцово'},
        ],
        title: 'Купить кованый балкон  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые балконы с прямыеми перилами',
          slug: 'balkoni_prymper',
          img: {
            preview: 'gallery/balkoni/prymper/01_prymper_400x300.jpg',
            original:'gallery/balkoni/prymper/01_prymper_1000x750.jpg',
          },
          products: [
            {
              id: 57,
              title: 'Кованые балконы с прямыеми перилами',
              text: 'Кованые балконы с прямыеми перилами №1',
              img: {
                preview: 'gallery/balkoni/prymper/01_prymper_400x300.jpg',
                original:'gallery/balkoni/prymper/01_prymper_1000x750.jpg',
              },
            },

            {
              id: 58,
              title: 'Кованые балконы с прямыеми перилами',
              text: 'Кованые балконы с прямыеми перилами №2',
              img: {
                preview: 'gallery/balkoni/prymper/02_prymper_400x300.jpg',
                original:'gallery/balkoni/prymper/02_prymper_1000x750.jpg',
              },
            },
            {
              id: 59,
              title: 'Кованые балконы с прямыеми перилами',
              text: 'Кованые балконы с прямыеми перилами №3',
              img: {
                preview: 'gallery/balkoni/prymper/03_prymper_400x300.jpg',
                original:'gallery/balkoni/prymper/03_prymper_1000x750.jpg',
              },
            },

            {
              id: 60,
              title: 'Кованые балконы с прямыеми перилами',
              text: 'Кованые балконы с прямыеми перилами №4',
              img: {
                preview: 'gallery/balkoni/prymper/04_prymper_400x300.jpg',
                original:'gallery/balkoni/prymper/04_prymper_1000x750.jpg',
              },
            },

            {
              id: 61,
              title: 'Кованые балконы с прямыеми перилами',
              text: 'Кованые балконы с прямыеми перилами №5',
              img: {
                preview: 'gallery/balkoni/prymper/05_prymper_400x300.jpg',
                original:'gallery/balkoni/prymper/05_prymper_1000x750.jpg',
              },
            },

          ],
        },
        {
          title: 'Кованые балконы радиусные',
          slug: 'balkoni_radius',
          img: {
            preview: 'gallery/balkoni/radius/01_radius_400x300.jpg',
            original:'gallery/balkoni/radius/01_radius_1000x750.jpg',
          },
          products: [
            {
              id: 62,
              title: 'Кованые балконы радиусные',
              text: 'Кованые балконы радиусные №1',
              img: {
                preview: 'gallery/balkoni/radius/01_radius_400x300.jpg',
                original:'gallery/balkoni/radius/01_radius_1000x750.jpg',
              },
            },

            {
              id: 63,
              title: 'Кованые балконы радиусные',
              text: 'Кованые балконы радиусные №2',
              img: {
                preview: 'gallery/balkoni/radius/02_radius_400x300.jpg',
                original:'gallery/balkoni/radius/02_radius_1000x750.jpg',
              },
            },

            {
              id: 64,
              title: 'Кованые балконы радиусные',
              text: 'Кованые балконы радиусные №3',
              img: {
                preview: 'gallery/balkoni/radius/03_radius_400x300.jpg',
                original:'gallery/balkoni/radius/03_radius_1000x750.jpg',
              },
            },
            {
              id: 65,
              title: 'Кованые балконы радиусные',
              text: 'Кованые балконы радиусные №4',
              img: {
                preview: 'gallery/balkoni/radius/04_radius_400x300.jpg',
                original:'gallery/balkoni/radius/04_radius_1000x750.jpg',
              },
            },
            // {
            //   id: 66,
            //   title: 'Кованые балконы радиусные',
            //   text: 'Кованые балконы радиусные №5',
            //   img: {
            //     preview: 'gallery/balkoni/radius/05_radius_400x300.jpg',
            //     original:'gallery/balkoni/radius/05_radius_1000x750.jpg',
            //   },
            // },
          ],
        },
        {
          title: 'Кованые балконы комбинированные',
          slug: 'balkoni_combo',
          img: {
            preview: 'gallery/balkoni/combo/01_combo_400x300.jpg',
            original:'gallery/balkoni/combo/01_combo_1000x750.jpg',
          },
          products: [
            {
              id: 67,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №1',
              img: {
                preview: 'gallery/balkoni/combo/01_combo_400x300.jpg',
                original:'gallery/balkoni/combo/01_combo_1000x750.jpg',
              },
            },

            {
              id: 68,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №2',
              img: {
                preview: 'gallery/balkoni/combo/02_combo_400x300.jpg',
                original:'gallery/balkoni/combo/02_combo_1000x750.jpg',
              },
            },

            {
              id: 69,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №3',
              img: {
                preview: 'gallery/balkoni/combo/03_combo_400x300.jpg',
                original:'gallery/balkoni/combo/03_combo_1000x750.jpg',
              },
            },
            {
              id: 70,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №4',
              img: {
                preview: 'gallery/balkoni/combo/04_combo_400x300.jpg',
                original:'gallery/balkoni/combo/04_combo_1000x750.jpg',
              },
            },
            {
              id: 71,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №5',
              img: {
                preview: 'gallery/balkoni/combo/05_combo_400x300.jpg',
                original:'gallery/balkoni/combo/05_combo_1000x750.jpg',
              },
            },
            {
              id: 72,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №6',
              img: {
                preview: 'gallery/balkoni/combo/06_combo_400x300.jpg',
                original:'gallery/balkoni/combo/06_combo_1000x750.jpg',
              },
            },
          ],
        }
      ]
    },
    {
      title: 'Кованые козырьки',
      slug: 'kozirky',
      img: {
        preview: 'gallery/kozirky/01_kozirky_400x300.jpg',
        original:'gallery/kozirky/01_kozirky_1000x750.jpg',
      },
      text: 'Кованый козырек является функциональной и практичной конструкцией, отличающейся надежностью, презентабельным и оригинальным дизайном.' +
            ' Существует множество видов данных изделий. В качестве критерия для деления на группы выступает форма, технология изготовления, место расположения.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые козырьки в Москве'},
          { name: 'keywords', content: 'купить кованые козырьки не дорого, кованые козырьки  своими руками, кованые козырьки по своим чертежам, kovka-mo,кованный козырьки,козырьки одинцово'},
        ],
        title: 'Купить кованые козырьки  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые козырьки',
          slug: 'kozirky_1',
          img: {
            preview: 'gallery/kozirky/01_kozirky_400x300.jpg',
            original:'gallery/kozirky/01_kozirky_1000x750.jpg',
          },
          products: [
            {
              id: 73,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №1',
              img: {
                preview: 'gallery/kozirky/01_kozirky_400x300.jpg',
                original:'gallery/kozirky/01_kozirky_1000x750.jpg',
              },
            },

            {
              id: 74,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №2',
              img: {
                preview: 'gallery/kozirky/02_kozirky_400x300.jpg',
                original:'gallery/kozirky/02_kozirky_1000x750.jpg',
              },
            },
            {
              id: 75,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №3',
              img: {
                preview: 'gallery/kozirky/03_kozirky_400x300.jpg',
                original:'gallery/kozirky/03_kozirky_1000x750.jpg',
              },
            },

            {
              id: 76,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №4',
              img: {
                preview: 'gallery/kozirky/04_kozirky_400x300.jpg',
                original:'gallery/kozirky/04_kozirky_1000x750.jpg',
              },
            },
            {
              id: 77,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №5',
              img: {
                preview: 'gallery/kozirky/05_kozirky_400x300.jpg',
                original:'gallery/kozirky/05_kozirky_1000x750.jpg',
              },
            },
            {
              id: 78,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №6',
              img: {
                preview: 'gallery/kozirky/06_kozirky_400x300.jpg',
                original:'gallery/kozirky/06_kozirky_1000x750.jpg',
              },
            },
            {
              id: 79,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №7',
              img: {
                preview: 'gallery/kozirky/07_kozirky_400x300.jpg',
                original:'gallery/kozirky/07_kozirky_1000x750.jpg',
              },
            },
            {
              id: 80,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №8',
              img: {
                preview: 'gallery/kozirky/08_kozirky_400x300.jpg',
                original:'gallery/kozirky/08_kozirky_1000x750.jpg',
              },
            },
            {
              id: 81,
              title: 'Кованые козырьки',
              text: 'Кованые козырьки №8',
              img: {
                preview: 'gallery/kozirky/09_kozirky_400x300.jpg',
                original:'gallery/kozirky/09_kozirky_1000x750.jpg',
              },
            },
          ],
        },

      ]
    },
    {
      title: 'Кованые заборы',
      slug: 'zabory',
      img: {
        preview: 'gallery/zabor/zaborpk/1_zaborpk_400x300.jpg',
        original:'gallery/zabor/zaborpk/1_zaborpk_1000x750.jpg',
      },
      text: 'Кованые заборы находят свое применение во многих местах. Такая ограда может быть вокруг территории частного дома или дачного участка. Ажурный металлический забор может украшать ' +
            'и охранять пространство вокруг зданий, в которых располагаются различные государственные учреждения. Он становится естественным дополнением общественного или частного парка.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые заборы в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые заборы не дорого, кованые заборы  своими руками, кованые заборы по своим чертежам, kovka-mo,кованые заборы,заборы одинцово'},
        ],
        title: 'Купить кованые заборы  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые заборы с поликарбонатом',
          slug: 'zabory_pk',
          img: {
            preview: 'gallery/zabor/zaborpk/1_zaborpk_400x300.jpg',
            original:'gallery/zabor/zaborpk/1_zaborpk_1000x750.jpg',
          },
          products: [
            {
              id: 82,
              title: 'Кованые заборы с поликарбонатом',
              text: 'Кованые заборы с поликарбонатом №1',
              img: {
                preview: 'gallery/zabor/zaborpk/1_zaborpk_400x300.jpg',
                original:'gallery/zabor/zaborpk/1_zaborpk_1000x750.jpg',
              },
            },

            {
              id: 83,
              title: 'Кованые заборы с поликарбонатом',
              text: 'Кованые заборы с поликарбонатом №2',
              img: {
                preview: 'gallery/zabor/zaborpk/2_zaborpk_400x300.jpg',
                original:'gallery/zabor/zaborpk/2_zaborpk_1000x750.jpg',
              },
            },
            {
              id: 84,
              title: 'Кованые заборы с поликарбонатом',
              text: 'Кованые заборы с поликарбонатом №3',
              img: {
                preview: 'gallery/zabor/zaborpk/3_zaborpk_400x300.jpg',
                original:'gallery/zabor/zaborpk/3_zaborpk_1000x750.jpg',
              },
            },

            {
              id: 85,
              title: 'Кованые заборы с поликарбонатом',
              text: 'Кованые заборы с поликарбонатом №4',
              img: {
                preview: 'gallery/zabor/zaborpk/4_zaborpk_400x300.jpg',
                original:'gallery/zabor/zaborpk/4_zaborpk_1000x750.jpg',
              },
            },
            {
              id: 86,
              title: 'Кованые заборы с поликарбонатом',
              text: 'Кованые заборы с поликарбонатом №5',
              img: {
                preview: 'gallery/zabor/zaborpk/5_zaborpk_400x300.jpg',
                original:'gallery/zabor/zaborpk/5_zaborpk_1000x750.jpg',
              },
            },
            {
              id: 87,
              title: 'Кованые заборы с поликарбонатом',
              text: 'Кованые заборы с поликарбонатом №6',
              img: {
                preview: 'gallery/zabor/zaborpk/6_zaborpk_400x300.jpg',
                original:'gallery/zabor/zaborpk/6_zaborpk_1000x750.jpg',
              },
            },
            // {
            //   id: 88,
            //   title: 'Кованые заборы с поликарбонатом',
            //   text: 'Кованые заборы с поликарбонатом №7',
            //   img: {
            //     preview: 'gallery/zabor/zaborpk/7_zaborpk_400x300.jpg',
            //     original:'gallery/zabor/zaborpk/7_zaborpk_1000x750.jpg',
            //   },
            // },
          ],
        },
        {
          title: 'Кованые заборы с железным листом',
          slug: 'zabory_stal',
          img: {
            preview: 'gallery/zabor/zaborstal/1_zaborstal_400x300.jpg',
            original:'gallery/zabor/zaborstal/1_zaborstal_1000x750.jpg',
          },
          products: [
            {
              id: 89,
              title: 'Кованые заборы с железным листом',
              text: 'Кованые заборы с железным листом №1',
              img: {
                preview: 'gallery/zabor/zaborstal/1_zaborstal_400x300.jpg',
                original:'gallery/zabor/zaborstal/1_zaborstal_1000x750.jpg',
              },
            },

            {
              id: 90,
              title: 'Кованые заборы с железным листом',
              text: 'Кованые заборы с железным листом №2',
              img: {
                preview: 'gallery/zabor/zaborstal/2_zaborstal_400x300.jpg',
                original:'gallery/zabor/zaborstal/2_zaborstal_1000x750.jpg',
              },
            },
            {
              id: 91,
              title: 'Кованые заборы с железным листом',
              text: 'Кованые заборы с железным листом №3',
              img: {
                preview: 'gallery/zabor/zaborstal/3_zaborstal_400x300.jpg',
                original:'gallery/zabor/zaborstal/3_zaborstal_1000x750.jpg',
              },
            },
            {
              id: 92,
              title: 'Кованые заборы с железным листом',
              text: 'Кованые заборы с железным листом №4',
              img: {
                preview: 'gallery/zabor/zaborstal/4_zaborstal_400x300.jpg',
                original:'gallery/zabor/zaborstal/4_zaborstal_1000x750.jpg',
              },
            },
            {
              id: 93,
              title: 'Кованые заборы с железным листом',
              text: 'Кованые заборы с железным листом №5',
              img: {
                preview: 'gallery/zabor/zaborstal/5_zaborstal_400x300.jpg',
                original:'gallery/zabor/zaborstal/5_zaborstal_1000x750.jpg',
              },
            },
          ],
        },
        {
          title: 'Кованые заборы с профлистом',
          slug: 'zabory_stal',
          img: {
            preview: 'gallery/zabor/zaborstalprof/1_zaborstalprof_400x300.jpg',
            original:'gallery/zabor/zaborstalprof/1_zaborstalprof_1000x750.jpg',
          },
          products: [
            {
              id: 94,
              title: 'Кованые заборы с профлистом',
              text: 'Кованые заборы с профлистом №1',
              img: {
                preview: 'gallery/zabor/zaborstalprof/1_zaborstalprof_400x300.jpg',
                original:'gallery/zabor/zaborstalprof/1_zaborstalprof_1000x750.jpg',
              },
            },

            {
              id: 95,
              title: 'Кованые заборы с профлистом',
              text: 'Кованые заборы с профлистом №2',
              img: {
                preview: 'gallery/zabor/zaborstalprof/2_zaborstalprof_400x300.jpg',
                original:'gallery/zabor/zaborstalprof/2_zaborstalprof_1000x750.jpg',
              },
            },
            {
              id: 96,
              title: 'Кованые заборы с профлистом',
              text: 'Кованые заборы с профлистом №3',
              img: {
                preview: 'gallery/zabor/zaborstalprof/3_zaborstalprof_400x300.jpg',
                original:'gallery/zabor/zaborstalprof/3_zaborstalprof_1000x750.jpg',
              },
            },
            {
              id: 97,
              title: 'Кованые заборы с профлистом',
              text: 'Кованые заборы с профлистом №4',
              img: {
                preview: 'gallery/zabor/zaborstalprof/4_zaborstalprof_400x300.jpg',
                original:'gallery/zabor/zaborstalprof/4_zaborstalprof_1000x750.jpg',
              },
            },
            {
              id: 98,
              title: 'Кованые заборы с профлистом',
              text: 'Кованые заборы с профлистом №5',
              img: {
                preview: 'gallery/zabor/zaborstalprof/5_zaborstalprof_400x300.jpg',
                original:'gallery/zabor/zaborstalprof/5_zaborstalprof_1000x750.jpg',
              },
            },
          ],
        },
        {
          title: 'Кованые заборы с кирпичом',
          slug: 'zabory_stal',
          img: {
            preview: 'gallery/zabor/zaborkirp/1_zaborkirp_400x300.jpg',
            original:'gallery/zabor/zaborkirp/1_zaborkirp_1000x750.jpg',
          },
          products: [
            {
              id: 99,
              title: 'Кованые заборы с кирпичом',
              text: 'Кованые заборы с кирпичом №1',
              img: {
                preview: 'gallery/zabor/zaborkirp/1_zaborkirp_400x300.jpg',
                original:'gallery/zabor/zaborkirp/1_zaborkirp_1000x750.jpg',
              },
            },

            {
              id: 100,
              title: 'Кованые заборы с кирпичом',
              text: 'Кованые заборы с кирпичом №2',
              img: {
                preview: 'gallery/zabor/zaborkirp/2_zaborkirp_400x300.jpg',
                original:'gallery/zabor/zaborkirp/2_zaborkirp_1000x750.jpg',
              },
            },
            {
              id: 101,
              title: 'Кованые заборы с кирпичом',
              text: 'Кованые заборы с кирпичом №3',
              img: {
                preview: 'gallery/zabor/zaborkirp/3_zaborkirp_400x300.jpg',
                original:'gallery/zabor/zaborkirp/3_zaborkirp_1000x750.jpg',
              },
            },
            {
              id: 102,
              title: 'Кованые заборы с кирпичом',
              text: 'Кованые заборы с кирпичом №4',
              img: {
                preview: 'gallery/zabor/zaborkirp/4_zaborkirp_400x300.jpg',
                original:'gallery/zabor/zaborkirp/4_zaborkirp_1000x750.jpg',
              },
            },

          ],
        }
      ]
    },
    {
      title: 'Кованые навесы',
      slug: 'navesi',
      img: {
        preview: 'gallery/naves/1_naves_400x300.jpg',
        original:'gallery/naves/1_naves_1000x750.jpg',
      },
      text: 'Кованые навесы – роскошь, оригинальность, красота, изящество и особый шик архитектурного ансамбля. ' +
            'Такие изделия становятся настоящим украшением парков, частных участков, фасадов жилых, административных, офисных зданий, коттеджей и маленьких дачных домиков.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые навесы в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые навесы не дорого, кованые навесы  своими руками, кованые навесы по своим чертежам, kovka-mo,кованые навесы,навесы одинцово'},
        ],
        title: 'Купить кованые навесы  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые навесы',
          slug: 'navesi_1',
          img: {
            preview: 'gallery/naves/1_naves_400x300.jpg',
            original:'gallery/naves/1_naves_1000x750.jpg',
          },
          products: [
            {
              id: 103,
              title: 'Кованые навесы',
              text: 'Кованые навесы №1',
              img: {
                preview: 'gallery/naves/1_naves_400x300.jpg',
                original:'gallery/naves/1_naves_1000x750.jpg',
              },
            },
            {
              id: 104,
              title: 'Кованые навесы',
              text: 'Кованые навесы №2',
              img: {
                preview: 'gallery/naves/2_naves_400x300.jpg',
                original:'gallery/naves/2_naves_1000x750.jpg',
              },
            },

            {
              id: 105,
              title: 'Кованые навесы',
              text: 'Кованые навесы №3',
              img: {
                preview: 'gallery/naves/3_naves_400x300.jpg',
                original:'gallery/naves/3_naves_1000x750.jpg',
              },
            },
            {
              id: 106,
              title: 'Кованые навесы',
              text: 'Кованые навесы №4',
              img: {
                preview: 'gallery/naves/4_naves_400x300.jpg',
                original:'gallery/naves/4_naves_1000x750.jpg',
              },
            },

            {
              id: 107,
              title: 'Кованые навесы',
              text: 'Кованые навесы №5',
              img: {
                preview: 'gallery/naves/5_naves_400x300.jpg',
                original:'gallery/naves/5_naves_1000x750.jpg',
              },
            },

          ],
        },

      ]
    },
    {
      title: 'Кованые беседки',
      slug: 'besedki',
      img: {
        preview: 'gallery/besedki/1_besedki_400x300.jpg',
        original:'gallery/besedki/1_besedki_1000x750.jpg',
      },
      text: 'Кованая беседка — настоящее украшение дачного участка. А кроме своей декоративной функции постройка имеет еще и немалое практическое значение: в беседке можно устраивать семейные вечера, проводить вечеринки, веселые дружеские встречи.' +
            ' Наличие рядом мангала сделает пребывание в беседке не только приятным с эстетической точки зрения, но еще и с гастрономической.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые беседки в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые беседки не дорого, кованые беседки  своими руками, кованые беседки по своим чертежам, kovka-mo,кованые беседки,беседки одинцово'},
        ],
        title: 'Купить кованые беседки  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые беседки',
          slug: 'besedki_1',
          img: {
            preview: 'gallery/besedki/1_besedki_400x300.jpg',
            original:'gallery/besedki/1_besedki_1000x750.jpg',
          },
          products: [
            {
              id: 108,
              title: 'Кованые беседки',
              text: 'Кованые беседки №1',
              img: {
                preview: 'gallery/besedki/1_besedki_400x300.jpg',
                original:'gallery/besedki/1_besedki_1000x750.jpg',
              },
            },
            {
              id: 109,
              title: 'Кованые беседки',
              text: 'Кованые беседки №2',
              img: {
                preview: 'gallery/besedki/2_besedki_400x300.jpg',
                original:'gallery/besedki/2_besedki_1000x750.jpg',
              },
            },

            {
              id: 110,
              title: 'Кованые беседки',
              text: 'Кованые беседки №3',
              img: {
                preview: 'gallery/besedki/3_besedki_400x300.jpg',
                original:'gallery/besedki/3_besedki_1000x750.jpg',
              },
            },
            {
              id: 111,
              title: 'Кованые беседки',
              text: 'Кованые беседки №4',
              img: {
                preview: 'gallery/besedki/4_besedki_400x300.jpg',
                original:'gallery/besedki/4_besedki_1000x750.jpg',
              },
            },

            {
              id: 112,
              title: 'Кованые беседки',
              text: 'Кованые беседки №5',
              img: {
                preview: 'gallery/besedki/5_besedki_400x300.jpg',
                original:'gallery/besedki/5_besedki_1000x750.jpg',
              },
            },
            {
              id: 113,
              title: 'Кованые беседки',
              text: 'Кованые беседки №6',
              img: {
                preview: 'gallery/besedki/6_besedki_400x300.jpg',
                original:'gallery/besedki/6_besedki_1000x750.jpg',
              },
            },
            {
              id: 114,
              title: 'Кованые беседки',
              text: 'Кованые беседки №7',
              img: {
                preview: 'gallery/besedki/7_besedki_400x300.jpg',
                original:'gallery/besedki/7_besedki_1000x750.jpg',
              },
            },
            {
              id: 115,
              title: 'Кованые беседки',
              text: 'Кованые беседки №8',
              img: {
                preview: 'gallery/besedki/8_besedki_400x300.jpg',
                original:'gallery/besedki/8_besedki_1000x750.jpg',
              },
            },
            {
              id: 116,
              title: 'Кованые беседки',
              text: 'Кованые беседки №9',
              img: {
                preview: 'gallery/besedki/9_besedki_400x300.jpg',
                original:'gallery/besedki/9_besedki_1000x750.jpg',
              },
            },

          ],
        },

      ]
    },
    {
      title: 'Кованые ограды',
      slug: 'ograda',
      img: {
        preview: 'gallery/ograda/1_ograda_400x300.jpg',
        original:'gallery/ograda/1_ograda_1000x750.jpg',
      },
      text: 'Кованая ограда не боится перепадов температуры воздуха, не подвергается воздействию погодных явлений,' +
            ' не требует специального ухода и особого внимания, что является преимуществами этого вида над другими моделями.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые ограды в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые ограды не дорого, кованые ограды  своими руками, кованые ограды по своим чертежам, kovka-mo,кованые ограды,ограды одинцово'},
        ],
        title: 'Купить кованые ограды  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые ограды',
          slug: 'ograda_1',
          img: {
            preview: 'gallery/ograda/1_ograda_400x300.jpg',
            original:'gallery/ograda/1_ograda_1000x750.jpg',
          },
          products: [
            {
              id: 117,
              title: 'Кованые ограды',
              text: 'Кованые ограды №1',
              img: {
                preview: 'gallery/ograda/1_ograda_400x300.jpg',
                original:'gallery/ograda/1_ograda_1000x750.jpg',
              },
            },
            {
              id: 118,
              title: 'Кованые ограды',
              text: 'Кованые ограды №2',
              img: {
                preview: 'gallery/ograda/2_ograda_400x300.jpg',
                original:'gallery/ograda/2_ograda_1000x750.jpg',
              },
            },

            {
              id: 119,
              title: 'Кованые ограды',
              text: 'Кованые ограды №3',
              img: {
                preview: 'gallery/ograda/3_ograda_400x300.jpg',
                original:'gallery/ograda/3_ograda_1000x750.jpg',
              },
            },
            {
              id: 120,
              title: 'Кованые ограды',
              text: 'Кованые ограды №4',
              img: {
                preview: 'gallery/ograda/4_ograda_400x300.jpg',
                original:'gallery/ograda/4_ograda_1000x750.jpg',
              },
            },

            {
              id: 121,
              title: 'Кованые ограды',
              text: 'Кованые ограды №5',
              img: {
                preview: 'gallery/ograda/5_ograda_400x300.jpg',
                original:'gallery/ograda/5_ograda_1000x750.jpg',
              },
            },
            {
              id: 122,
              title: 'Кованые ограды',
              text: 'Кованые ограды №3',
              img: {
                preview: 'gallery/ograda/6_ograda_400x300.jpg',
                original:'gallery/ograda/6_ograda_1000x750.jpg',
              },
            },
            {
              id: 123,
              title: 'Кованые ограды',
              text: 'Кованые ограды №7',
              img: {
                preview: 'gallery/ograda/7_ograda_400x300.jpg',
                original:'gallery/ograda/7_ograda_1000x750.jpg',
              },
            },
            // {
            //   id: 124,
            //   title: 'Кованые ограды',
            //   text: 'Кованые ограды №8',
            //   img: {
            //     preview: 'gallery/ograda/8_ograda_400x300.jpg',
            //     original:'gallery/ograda/8_ograda_1000x750.jpg',
            //   },
            // },


          ],
        },

      ]
    },
    {
      title: 'Кованые решетки',
      slug: 'reshetki',
      img: {
        preview: 'gallery/reshetki/1_reshetki_400x300.jpg',
        original:'gallery/reshetki/1_reshetki_1000x750.jpg',
      },
      text: 'Кованые решетки отличаются самой разной формой, что позволяет выбирать изделия под любую конфигурацию проема окна и в зависимости от глубины его утопания в фасаде.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые решетки в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые решетки не дорого, кованые решетки  своими руками, кованые решетки по своим чертежам, kovka-mo,кованые решетки,решетки одинцово'},
        ],
        title: 'Купить кованые решетки  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые решетки',
          slug: 'reshetki_1',
          img: {
            preview: 'gallery/reshetki/1_reshetki_400x300.jpg',
            original:'gallery/reshetki/1_reshetki_1000x750.jpg',
          },
          products: [
            {
              id: 125,
              title: 'Кованые решетки',
              text: 'Кованые решетки №1',
              img: {
                preview: 'gallery/reshetki/1_reshetki_400x300.jpg',
                original:'gallery/reshetki/1_reshetki_1000x750.jpg',
              },
            },
            {
              id: 126,
              title: 'Кованые решетки',
              text: 'Кованые решетки №2',
              img: {
                preview: 'gallery/reshetki/2_reshetki_400x300.jpg',
                original:'gallery/reshetki/2_reshetki_1000x750.jpg',
              },
            },

            {
              id: 127,
              title: 'Кованые решетки',
              text: 'Кованые решетки №3',
              img: {
                preview: 'gallery/reshetki/3_reshetki_400x300.jpg',
                original:'gallery/reshetki/3_reshetki_1000x750.jpg',
              },
            },
            {
              id: 128,
              title: 'Кованые решетки',
              text: 'Кованые решетки №4',
              img: {
                preview: 'gallery/reshetki/4_reshetki_400x300.jpg',
                original:'gallery/reshetki/4_reshetki_1000x750.jpg',
              },
            },

            {
              id: 129,
              title: 'Кованые решетки',
              text: 'Кованые решетки №5',
              img: {
                preview: 'gallery/reshetki/5_reshetki_400x300.jpg',
                original:'gallery/reshetki/5_reshetki_1000x750.jpg',
              },
            },
            {
              id: 130,
              title: 'Кованые решетки',
              text: 'Кованые решетки №6',
              img: {
                preview: 'gallery/reshetki/6_reshetki_400x300.jpg',
                original:'gallery/reshetki/6_reshetki_1000x750.jpg',
              },
            },
            {
              id: 131,
              title: 'Кованые решетки',
              text: 'Кованые решетки №7',
              img: {
                preview: 'gallery/reshetki/7_reshetki_400x300.jpg',
                original:'gallery/reshetki/7_reshetki_1000x750.jpg',
              },
            },
            {
              id: 132,
              title: 'Кованые решетки',
              text: 'Кованые решетки №8',
              img: {
                preview: 'gallery/reshetki/8_reshetki_400x300.jpg',
                original:'gallery/reshetki/8_reshetki_1000x750.jpg',
              },
            },
            {
              id: 133,
              title: 'Кованые решетки',
              text: 'Кованые решетки №9',
              img: {
                preview: 'gallery/reshetki/9_reshetki_400x300.jpg',
                original:'gallery/reshetki/9_reshetki_1000x750.jpg',
              },
            },
            {
              id: 134,
              title: 'Кованые решетки',
              text: 'Кованые решетки №10',
              img: {
                preview: 'gallery/reshetki/10_reshetki_400x300.jpg',
                original:'gallery/reshetki/10_reshetki_1000x750.jpg',
              },
            },
          ],
        },

      ]
    },
    {
      title: 'Кованые вывески',
      slug: 'viveski',
      img: {
        preview: 'gallery/viveski/1_viveski_400x300.jpg',
        original:'gallery/viveski/1_viveski_1000x750.jpg',
      },
      text: 'Кованые вывески один из самых древних, изящных и оригинальных видов наружной рекламы. Европейская цивилизация веками пользуется этими источниками информации, а они служат верой и правдой до наших дней. Как и раньше,' +
            ' они выполняют две основные функции являются оригинальным фасадным украшением и доступным средством информирования.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые вывески в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые вывески не дорого, кованые вывески  своими руками, кованые вывески по своим чертежам, kovka-mo,кованые вывески,вывески одинцово'},
        ],
        title: 'Купить кованые вывески  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые вывески',
          slug: 'viveski_1',
          img: {
            preview: 'gallery/viveski/1_viveski_400x300.jpg',
            original:'gallery/viveski/1_viveski_1000x750.jpg',
          },
          products: [
            {
              id: 135,
              title: 'Кованые вывески',
              text: 'Кованые вывески №1',
              img: {
                preview: 'gallery/viveski/1_viveski_400x300.jpg',
                original:'gallery/viveski/1_viveski_1000x750.jpg',
              },
            },
            {
              id: 136,
              title: 'Кованые вывески',
              text: 'Кованые вывески №2',
              img: {
                preview: 'gallery/viveski/2_viveski_400x300.jpg',
                original:'gallery/viveski/2_viveski_1000x750.jpg',
              },
            },

            {
              id: 137,
              title: 'Кованые вывески',
              text: 'Кованые вывески №3',
              img: {
                preview: 'gallery/viveski/3_viveski_400x300.jpg',
                original:'gallery/viveski/3_viveski_1000x750.jpg',
              },
            },
            {
              id: 138,
              title: 'Кованые вывески',
              text: 'Кованые вывески №4',
              img: {
                preview: 'gallery/viveski/4_viveski_400x300.jpg',
                original:'gallery/viveski/4_viveski_1000x750.jpg',
              },
            },

          ],
        },

      ]
    },
    {
      title: 'Кованые мангалы',
      slug: 'mangal',
      img: {
        preview: 'gallery/mangal/1_mangal_400x300.jpg',
        original:'gallery/mangal/1_mangal_1000x750.jpg',
      },
      text: 'Кованый мангал – это удивительное украшение участка, которое сразу привлекает взгляд и делает пространство гораздо уютнее. Удобство и безопасность.' +
            ' Легко ухаживать и чистить. Мясо на таком мангале прожаривается равномерно, не пересыхает, всегда получается сочным и вкусным.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованый мангал в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые мангалы не дорого, кованые мангалы  своими руками, кованые мангалы по своим чертежам, kovka-mo,кованые мангалы,мангалы одинцово'},
        ],
        title: 'Купить кованые мангалы  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые мангалы',
          slug: 'mangal_1',
          img: {
            preview: 'gallery/mangal/1_mangal_400x300.jpg',
            original:'gallery/mangal/1_mangal_1000x750.jpg',
          },
          products: [
            {
              id: 139,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №1',
              img: {
                preview: 'gallery/mangal/1_mangal_400x300.jpg',
                original:'gallery/mangal/1_mangal_1000x750.jpg',
              },
            },
            {
              id: 140,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №2',
              img: {
                preview: 'gallery/mangal/2_mangal_400x300.jpg',
                original:'gallery/mangal/2_mangal_1000x750.jpg',
              },
            },

            {
              id: 141,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №3',
              img: {
                preview: 'gallery/mangal/3_mangal_400x300.jpg',
                original:'gallery/mangal/3_mangal_1000x750.jpg',
              },
            },
            {
              id: 142,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №4',
              img: {
                preview: 'gallery/mangal/4_mangal_400x300.jpg',
                original:'gallery/mangal/4_mangal_1000x750.jpg',
              },
            },
            {
              id: 143,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №5',
              img: {
                preview: 'gallery/mangal/5_mangal_400x300.jpg',
                original:'gallery/mangal/5_mangal_1000x750.jpg',
              },
            },
            {
              id: 144,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №6',
              img: {
                preview: 'gallery/mangal/6_mangal_400x300.jpg',
                original:'gallery/mangal/6_mangal_1000x750.jpg',
              },
            },
            {
              id: 145,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №7',
              img: {
                preview: 'gallery/mangal/7_mangal_400x300.jpg',
                original:'gallery/mangal/7_mangal_1000x750.jpg',
              },
            },
            {
              id: 146,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №8',
              img: {
                preview: 'gallery/mangal/8_mangal_400x300.jpg',
                original:'gallery/mangal/8_mangal_1000x750.jpg',
              },
            },
            {
              id: 147,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №9',
              img: {
                preview: 'gallery/mangal/9_mangal_400x300.jpg',
                original:'gallery/mangal/9_mangal_1000x750.jpg',
              },
            },
            {
              id: 148,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №10',
              img: {
                preview: 'gallery/mangal/10_mangal_400x300.jpg',
                original:'gallery/mangal/10_mangal_1000x750.jpg',
              },
            },
            {
              id: 149,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №11',
              img: {
                preview: 'gallery/mangal/11_mangal_400x300.jpg',
                original:'gallery/mangal/11_mangal_1000x750.jpg',
              },
            },
            {
              id: 150,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №12',
              img: {
                preview: 'gallery/mangal/12_mangal_400x300.jpg',
                original:'gallery/mangal/12_mangal_1000x750.jpg',
              },
            },
            {
              id: 151,
              title: 'Кованые мангалы',
              text: 'Кованые мангалы №13',
              img: {
                preview: 'gallery/mangal/13_mangal_400x300.jpg',
                original:'gallery/mangal/13_mangal_1000x750.jpg',
              },
            },
          ],
        },

      ]
    },
    {
      title: 'Кованые люстры',
      slug: 'lustra',
      img: {
        preview: 'gallery/lustra/1_lustra_400x300.jpg',
        original:'gallery/lustra/1_lustra_1000x750.jpg',
      },
      text: 'Кованые люстры — классика в мире интерьерного и уличного освещения. Они применяются уже несколько веков, такие светильники со свечами украшали средневековые замки.' +
            ' Современные кованые люстры с разнообразными источниками света также популярны. Они сочетаются со многими стилями оформления, придавая помещению или улице особый шарм',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые люстры в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые люстры не дорого, кованые люстры  своими руками, кованые люстры по своим чертежам, kovka-mo,кованые люстры,люстры одинцово'},
        ],
        title: 'Купить кованые люстры  в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые люстры',
          slug: 'lustra_1',
          img: {
            preview: 'gallery/lustra/1_lustra_400x300.jpg',
            original:'gallery/lustra/1_lustra_1000x750.jpg',
          },
          products: [
            {
              id: 152,
              title: 'Кованые люстры',
              text: 'Кованые люстры №1',
              img: {
                preview: 'gallery/lustra/1_lustra_400x300.jpg',
                original:'gallery/lustra/1_lustra_1000x750.jpg',
              },
            },
            {
              id: 153,
              title: 'Кованые люстры',
              text: 'Кованые люстры №2',
              img: {
                preview: 'gallery/lustra/2_lustra_400x300.jpg',
                original:'gallery/lustra/2_lustra_1000x750.jpg',
              },
            },

            {
              id: 154,
              title: 'Кованые люстры',
              text: 'Кованые люстры №3',
              img: {
                preview: 'gallery/lustra/3_lustra_400x300.jpg',
                original:'gallery/lustra/3_lustra_1000x750.jpg',
              },
            },
            {
              id: 155,
              title: 'Кованые люстры',
              text: 'Кованые люстры №4',
              img: {
                preview: 'gallery/lustra/4_lustra_400x300.jpg',
                original:'gallery/lustra/4_lustra_1000x750.jpg',
              },
            },
            {
              id: 156,
              title: 'Кованые люстры',
              text: 'Кованые люстры №5',
              img: {
                preview: 'gallery/lustra/5_lustra_400x300.jpg',
                original:'gallery/lustra/5_lustra_1000x750.jpg',
              },
            },
            {
              id: 157,
              title: 'Кованые люстры',
              text: 'Кованые люстры №6',
              img: {
                preview: 'gallery/lustra/1_lustra_400x300.jpg',
                original:'gallery/lustra/1_lustra_1000x750.jpg',
              },
            },
            {
              id: 158,
              title: 'Кованые люстры',
              text: 'Кованые люстры №7',
              img: {
                preview: 'gallery/lustra/7_lustra_400x300.jpg',
                original:'gallery/lustra/7_lustra_1000x750.jpg',
              },
            },
            {
              id: 159,
              title: 'Кованые люстры',
              text: 'Кованые люстры №8',
              img: {
                preview: 'gallery/lustra/8_lustra_400x300.jpg',
                original:'gallery/lustra/8_lustra_1000x750.jpg',
              },
            },
            {
              id: 160,
              title: 'Кованые люстры',
              text: 'Кованые люстры №9',
              img: {
                preview: 'gallery/lustra/9_lustra_400x300.jpg',
                original:'gallery/lustra/9_lustra_1000x750.jpg',
              },
            },
            {
              id: 161,
              title: 'Кованые люстры',
              text: 'Кованые люстры №10',
              img: {
                preview: 'gallery/lustra/10_lustra_400x300.jpg',
                original:'gallery/lustra/10_lustra_1000x750.jpg',
              },
            },
            {
              id: 162,
              title: 'Кованые люстры',
              text: 'Кованые люстры №11',
              img: {
                preview: 'gallery/lustra/11_lustra_400x300.jpg',
                original:'gallery/lustra/11_lustra_1000x750.jpg',
              },
            },
            {
              id: 163,
              title: 'Кованые люстры',
              text: 'Кованые люстры №12',
              img: {
                preview: 'gallery/lustra/12_lustra_400x300.jpg',
                original:'gallery/lustra/12_lustra_1000x750.jpg',
              },
            },
            {
              id: 164,
              title: 'Кованые люстры',
              text: 'Кованые люстры №13',
              img: {
                preview: 'gallery/lustra/13_lustra_400x300.jpg',
                original:'gallery/lustra/13_lustra_1000x750.jpg',
              },
            },
          ],
        },

      ]
    },
    {
      title: 'Кованые бра',
      slug: 'bra',
      img: {
        preview: 'gallery/bra/1_bra_400x300.jpg',
        original:'gallery/bra/1_bra_1000x750.jpg',
      },
      text: 'Кованые бра на стену могут быть как интерьерными, так и уличными. В помещении бра используется чаще всего в качестве дополнительного локального освещения. ' +
            'С его помощью можно визуально разделить пространство комнаты. Кованые бра часто повторяют дизайн люстры или же подбираются в одном стиле с ней',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые бра в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые бра не дорого, кованые люстры  своими руками, кованые бра по своим чертежам, kovka-mo,кованые бра,бра одинцово'},
        ],
        title: 'Купить кованые бра в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые бра',
          slug: 'bra_1',
          img: {
            preview: 'gallery/bra/1_bra_400x300.jpg',
            original:'gallery/bra/1_bra_1000x750.jpg',
          },
          products: [
            {
              id: 165,
              title: 'Кованые бра',
              text: 'Кованые бра №1',
              img: {
                preview: 'gallery/bra/1_bra_400x300.jpg',
                original:'gallery/bra/1_bra_1000x750.jpg',
              },
            },
            {
              id: 166,
              title: 'Кованые бра',
              text: 'Кованые бра №2',
              img: {
                preview: 'gallery/bra/2_bra_400x300.jpg',
                original:'gallery/bra/2_bra_1000x750.jpg',
              },
            },

            {
              id: 167,
              title: 'Кованые бра',
              text: 'Кованые бра №3',
              img: {
                preview: 'gallery/bra/3_bra_400x300.jpg',
                original:'gallery/bra/3_bra_1000x750.jpg',
              },
            },
            {
              id: 168,
              title: 'Кованые бра',
              text: 'Кованые бра №4',
              img: {
                preview: 'gallery/bra/4_bra_400x300.jpg',
                original:'gallery/bra/4_bra_1000x750.jpg',
              },
            },
            {
              id: 169,
              title: 'Кованые бра',
              text: 'Кованые бра №5',
              img: {
                preview: 'gallery/bra/5_bra_400x300.jpg',
                original:'gallery/bra/5_bra_1000x750.jpg',
              },
            },
            {
              id: 170,
              title: 'Кованые бра',
              text: 'Кованые бра №6',
              img: {
                preview: 'gallery/bra/6_bra_400x300.jpg',
                original:'gallery/bra/6_bra_1000x750.jpg',
              },
            },
            {
              id: 171,
              title: 'Кованые бра',
              text: 'Кованые бра №7',
              img: {
                preview: 'gallery/bra/7_bra_400x300.jpg',
                original:'gallery/bra/7_bra_1000x750.jpg',
              },
            },
            {
              id: 172,
              title: 'Кованые бра',
              text: 'Кованые бра №8',
              img: {
                preview: 'gallery/bra/8_bra_400x300.jpg',
                original:'gallery/bra/8_bra_1000x750.jpg',
              },
            },
            {
              id: 173,
              title: 'Кованые бра',
              text: 'Кованые бра №9',
              img: {
                preview: 'gallery/bra/9_bra_400x300.jpg',
                original:'gallery/bra/9_bra_1000x750.jpg',
              },
            },

          ],
        },

      ]
    },
    {
      title: 'Кованые торшеры',
      slug: 'torsher',
      img: {
        preview: 'gallery/torsher/1_torsher_400x300.jpg',
        original:'gallery/torsher/1_torsher_1000x750.jpg',
      },
      text: 'Кованые торшеры благодаря своей уникальной конструкции имеют оригинальный дизайн. Всем, кому нравится атмосфера средневековых замков и кто имеет желание перенести ее в свой дом, ' +
             'отлично подойдет такой вариант светильников. Этот элемент декора замечательно вписывается в любой интерьер и гармонично сочетается с современной мебелью.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые бра в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые торшеры не дорого, кованые торшеры  своими руками, кованые торшеры по своим чертежам, kovka-mo,кованые торшеры,торшеры одинцово'},
        ],
        title: 'Купить кованые торшеры в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Кованые торшеры',
          slug: 'torsher_1',
          img: {
            preview: 'gallery/torsher/1_torsher_400x300.jpg',
            original:'gallery/torsher/1_torsher_1000x750.jpg',
          },
          products: [
            {
              id: 174,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №1',
              img: {
                preview: 'gallery/torsher/1_torsher_400x300.jpg',
                original:'gallery/torsher/1_torsher_1000x750.jpg',
              },
            },
            {
              id: 175,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №2',
              img: {
                preview: 'gallery/torsher/2_torsher_400x300.jpg',
                original:'gallery/torsher/2_torsher_1000x750.jpg',
              },
            },

            {
              id: 176,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №3',
              img: {
                preview: 'gallery/torsher/3_torsher_400x300.jpg',
                original:'gallery/torsher/3_torsher_1000x750.jpg',
              },
            },
            {
              id: 177,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №4',
              img: {
                preview: 'gallery/torsher/4_torsher_400x300.jpg',
                original:'gallery/torsher/4_torsher_1000x750.jpg',
              },
            },
            {
              id: 178,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №5',
              img: {
                preview: 'gallery/torsher/5_torsher_400x300.jpg',
                original:'gallery/torsher/5_torsher_1000x750.jpg',
              },
            },
            {
              id: 179,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №6',
              img: {
                preview: 'gallery/torsher/6_torsher_400x300.jpg',
                original:'gallery/torsher/6_torsher_1000x750.jpg',
              },
            },
            {
              id: 180,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №7',
              img: {
                preview: 'gallery/torsher/7_torsher_400x300.jpg',
                original:'gallery/torsher/7_torsher_1000x750.jpg',
              },
            },
            {
              id: 181,
              title: 'Кованые торшеры',
              text: 'Кованые торшеры №8',
              img: {
                preview: 'gallery/torsher/8_torsher_400x300.jpg',
                original:'gallery/torsher/8_torsher_1000x750.jpg',
              },
            },


          ],
        },

      ]
    },
    {
      title: 'Ковка в стиле лофт',
      slug: 'loft',
      img: {
        preview: 'gallery/loft/1_loft_400x300.jpg',
        original:'gallery/loft/1_loft_1000x750.jpg',
      },
      text: 'Лофт — грубый фон (кирпичные или бетонные стены) высокие потолки, открытые коммуникации. Стиль, ' +
            'в котором можно встретить сочетание металла и натуральной кожи, стекла и пластика, плакатов и живописи маслом. ' +
            'Лофт — это волшебство простора и естественного света, соединение старого и нового, а также уникальная возможность реализовать свои самые смелые фантазии.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Интерьер в стиле лофт заказать в Москве и Московской области'},
          { name: 'keywords', content: 'купить  лофт не дорого, лофт  своими руками,лофт по своим чертежам, kovka-mo,кованые лофт,лофт одинцово'},
        ],
        title: 'Сделать интерьер в стиле лофт в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      types: [
        {
          title: 'Ковка в стиле лофт',
          slug: 'loft_1',
          img: {
            preview: 'gallery/loft/1_loft_400x300.jpg',
            original:'gallery/loft/1_loft_1000x750.jpg',
          },
          products: [
            {
              id: 182,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №1',
              img: {
                preview: 'gallery/loft/1_loft_400x300.jpg',
                original:'gallery/loft/1_loft_1000x750.jpg',
              },
            },
            {
              id: 183,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №2',
              img: {
                preview: 'gallery/loft/2_loft_400x300.jpg',
                original:'gallery/loft/2_loft_1000x750.jpg',
              },
            },

            {
              id: 184,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №3',
              img: {
                preview: 'gallery/loft/3_loft_400x300.jpg',
                original:'gallery/loft/3_loft_1000x750.jpg',
              },
            },
            {
              id: 185,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №4',
              img: {
                preview: 'gallery/loft/4_loft_400x300.jpg',
                original:'gallery/loft/4_loft_1000x750.jpg',
              },
            },
            {
              id: 186,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №5',
              img: {
                preview: 'gallery/loft/5_loft_400x300.jpg',
                original:'gallery/loft/5_loft_1000x750.jpg',
              },
            },
            {
              id: 187,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №6',
              img: {
                preview: 'gallery/loft/6_loft_400x300.jpg',
                original:'gallery/loft/6_loft_1000x750.jpg',
              },
            },
            {
              id: 188,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №7',
              img: {
                preview: 'gallery/loft/7_loft_400x300.jpg',
                original:'gallery/loft/7_loft_1000x750.jpg',
              },
            },
            {
              id: 189,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №8',
              img: {
                preview: 'gallery/loft/8_loft_400x300.jpg',
                original:'gallery/loft/8_loft_1000x750.jpg',
              },
            },
            {
              id: 190,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №9',
              img: {
                preview: 'gallery/loft/9_loft_400x300.jpg',
                original:'gallery/loft/9_loft_1000x750.jpg',
              },
            },
            {
              id: 191,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №10',
              img: {
                preview: 'gallery/loft/10_loft_400x300.jpg',
                original:'gallery/loft/10_loft_1000x750.jpg',
              },
            },
            {
              id: 192,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №11',
              img: {
                preview: 'gallery/loft/11_loft_400x300.jpg',
                original:'gallery/loft/11_loft_1000x750.jpg',
              },
            },
            {
              id: 193,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №12',
              img: {
                preview: 'gallery/loft/12_loft_400x300.jpg',
                original:'gallery/loft/12_loft_1000x750.jpg',
              },
            },
            {
              id: 194,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №13',
              img: {
                preview: 'gallery/loft/13_loft_400x300.jpg',
                original:'gallery/loft/13_loft_1000x750.jpg',
              },
            },
            {
              id: 195,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №14',
              img: {
                preview: 'gallery/loft/14_loft_400x300.jpg',
                original:'gallery/loft/14_loft_1000x750.jpg',
              },
            },
            {
              id: 196,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №15',
              img: {
                preview: 'gallery/loft/15_loft_400x300.jpg',
                original:'gallery/loft/15_loft_1000x750.jpg',
              },
            },
            {
              id: 197,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №16',
              img: {
                preview: 'gallery/loft/16_loft_400x300.jpg',
                original:'gallery/loft/16_loft_1000x750.jpg',
              },
            },
            {
              id: 198,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №17',
              img: {
                preview: 'gallery/loft/17_loft_400x300.jpg',
                original:'gallery/loft/17_loft_1000x750.jpg',
              },
            },
            {
              id: 199,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №18',
              img: {
                preview: 'gallery/loft/18_loft_400x300.jpg',
                original:'gallery/loft/18_loft_1000x750.jpg',
              },
            },
            {
              id: 200,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №19',
              img: {
                preview: 'gallery/loft/19_loft_400x300.jpg',
                original:'gallery/loft/19_loft_1000x750.jpg',
              },
            },
            {
              id: 201,
              title: 'Ковка в стиле лофт',
              text: 'Ковка лофт №20',
              img: {
                preview: 'gallery/loft/20_loft_400x300.jpg',
                original:'gallery/loft/20_loft_1000x750.jpg',
              },
            },
          ],
        },

      ]
    },
  ]
}

export default products
