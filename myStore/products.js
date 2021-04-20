
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

      text: 'Ворота - являются визитной карточкой вашего дома, которая определяет статус и вкус хозяина. Кованые ворота на фоне других выделяются высокой декоративностью и художественной ценностью',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые металлические ворота для дома, ворота для забора на заказ'},
          { name: 'keywords', content: 'купить кованые ворота не дорого, ковка, художественная, кованые, ворота, цена, стоимость, забор, дом'},
        ],
        title: 'Купить кованые ворота в Москве и МО, разработка индивидуального дизайна ковки –от компании Феникс Стальное Решение'
      },
      price: 'от 8000р м' ,
      types: [
        {
          title: 'Кованые ворота распашные',
          slug: 'vorota_prostie',
          img: {
            preview: 'gallery/vorota/02_vorota_400x300.jpg',
            original: 'gallery/vorota/02_vorota_1000x750.jpg',
          },
          products: [
            {
              id: 1,
              title: 'Распашные кованые ворота',
              text: 'Распашные №1',
              img: {
                preview: 'gallery/vorota/01_vorota_400x300.jpg',
                original: 'gallery/vorota/01_vorota_1000x750.jpg',
              },
            },
            {
              id: 2,
              title: 'Распашные кованые ворота',
              text: 'Распашные №2',
              img: {
                preview: 'gallery/vorota/02_vorota_400x300.jpg',
                original: 'gallery/vorota/02_vorota_1000x750.jpg',
              },
            },
            {
              id: 3,
              title: 'Распашные кованые ворота',
              text: 'Распашные №3',
              img: {
                preview: 'gallery/vorota/03_vorota_400x300.jpg',
                original: 'gallery/vorota/03_vorota_1000x750.jpg',
              },
            },

            {
              id: 4,
              title: 'Распашные кованые ворота',
              text: 'Распашные №4',
              img: {
                preview: 'gallery/vorota/04_vorota_400x300.jpg',
                original: 'gallery/vorota/04_vorota_1000x750.jpg',
              },
            },


            {
              id: 5,
              title: 'Распашные кованые ворота',
              text: 'Распашные №5',
              img: {
                preview: 'gallery/vorota/05_vorota_400x300.jpg',
                original: 'gallery/vorota/05_vorota_1000x750.jpg',
              },
            },


            {
              id: 6,
              title: 'Распашные кованые ворота',
              text: 'Распашные №6',
              img: {
                preview: 'gallery/vorota/06_vorota_400x300.jpg',
                original: 'gallery/vorota/06_vorota_1000x750.jpg',
              },
            },


            {
              id: 7,
              title: 'Распашные кованые ворота',
              text: 'Распашные №7',
              img: {
                preview: 'gallery/vorota/07_vorota_400x300.jpg',
                original: 'gallery/vorota/07_vorota_1000x750.jpg',
              },
            },


            {
              id: 8,
              title: 'Распашные кованые ворота',
              text: 'Распашные №8',
              img: {
                preview: 'gallery/vorota/08_vorota_400x300.jpg',
                original: 'gallery/vorota/08_vorota_1000x750.jpg',
              },
            },


            {
              id: 9,
              title: 'Распашные кованые ворота',
              text: 'Распашные №9',
              img: {
                preview: 'gallery/vorota/09_vorota_400x300.jpg',
                original: 'gallery/vorota/09_vorota_1000x750.jpg',
              },
            },


            {
              id: 10,
              title: 'Распашные кованые ворота',
              text: 'Распашные №10',
              img: {
                preview: 'gallery/vorota/10_vorota_400x300.jpg',
                original: 'gallery/vorota/10_vorota_1000x750.jpg',
              },
            },


          ],
        },
        {
          title: 'Откатные кованые ворота',
          slug: 'vorota_otkatnye',
          img: {
            preview: 'gallery/vorota/otkatnye/01_otkatnye_400x300.jpg',
            original: 'gallery/vorota/otkatnye/01_otkatnye_1000x750.jpg',
          },
          products: [
            {
              id: 11,
              title: 'Откатные кованые ворота',
              text: 'Откатные №1',
              img: {
                preview: 'gallery/vorota/otkatnye/01_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/01_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 12,
              title: 'Откатные кованые ворота',
              text: 'Откатные №2',
              img: {
                preview: 'gallery/vorota/otkatnye/02_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/02_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 13,
              title: 'Откатные кованые ворота',
              text: 'Откатные 3',
              img: {
                preview: 'gallery/vorota/otkatnye/03_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/03_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 14,
              title: 'Откатные кованые ворота',
              text: 'Откатные №4',
              img: {
                preview: 'gallery/vorota/otkatnye/04_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/04_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 15,
              title: 'Откатные кованые ворота',
              text: 'Откатные №5',
              img: {
                preview: 'gallery/vorota/otkatnye/05_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/05_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 16,
              title: 'Откатные кованые ворота',
              text: 'Откатные №6',
              img: {
                preview: 'gallery/vorota/otkatnye/06_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/06_otkatnye_1000x750.jpg',
              },
            },

            {
              id: 17,
              title: 'Откатные кованые ворота',
              text: 'Откатные №7',
              img: {
                preview: 'gallery/vorota/otkatnye/07_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/07_otkatnye_1000x750.jpg',
              },
            },
            {
              id: 18,
              title: 'Откатные кованые ворота',
              text: 'Откатные №8',
              img: {
                preview: 'gallery/vorota/otkatnye/08_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/08_otkatnye_1000x750.jpg',
              },
            },
            {
              id: 19,
              title: 'Откатные кованые ворота',
              text: 'Откатные №9',
              img: {
                preview: 'gallery/vorota/otkatnye/09_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/09_otkatnye_1000x750.jpg',
              },
            },
            {
              id: 20,
              title: 'Откатные кованые ворота',
              text: 'Откатные №10',
              img: {
                preview: 'gallery/vorota/otkatnye/10_otkatnye_400x300.jpg',
                original: 'gallery/vorota/otkatnye/10_otkatnye_1000x750.jpg',
              },
            },

          ],
        },
        {
          title: 'Ворота из профнастила',
          slug: 'vorota_prof',
          img: {
            preview: 'gallery/vorota/prof/6_vorota_prof_400x300.jpg',
            original: 'gallery/vorota/prof/6_vorota_prof_1000x750.jpg',
          },
          products: [
            {
              id: 11000,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №1',
              img: {
                preview: 'gallery/vorota/prof/1_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/1_vorota_prof_1000x750.jpg',
              },
            },

             {
              id: 11001,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №2',
              img: {
                preview: 'gallery/vorota/prof/2_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/2_vorota_prof_1000x750.jpg',
              },
            },

             {
              id: 11002,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №3',
              img: {
                preview: 'gallery/vorota/prof/3_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/3_vorota_prof_1000x750.jpg',
              },
            },

             {
              id: 11003,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №4',
              img: {
                preview: 'gallery/vorota/prof/4_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/4_vorota_prof_1000x750.jpg',
              },
            },

             {
              id: 11004,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №5',
              img: {
                preview: 'gallery/vorota/prof/5_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/5_vorota_prof_1000x750.jpg',
              },
            },

             {
              id: 11005,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №6',
              img: {
                preview: 'gallery/vorota/prof/6_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/6_vorota_prof_1000x750.jpg',
              },
            },

             {
              id: 11006,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №7',
              img: {
                preview: 'gallery/vorota/prof/7_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/7_vorota_prof_1000x750.jpg',
              },
            },
             {
              id: 11007,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №8',
              img: {
                preview: 'gallery/vorota/prof/8_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/8_vorota_prof_1000x750.jpg',
              },
            },
             {
              id: 11008,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №9',
              img: {
                preview: 'gallery/vorota/prof/9_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/9_vorota_prof_1000x750.jpg',
              },
            },
             {
              id: 11009,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №10',
              img: {
                preview: 'gallery/vorota/prof/10_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/10_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11010,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №11',
              img: {
                preview: 'gallery/vorota/prof/11_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/11_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11011,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №112',
              img: {
                preview: 'gallery/vorota/prof/12_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/12_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11012,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №113',
              img: {
                preview: 'gallery/vorota/prof/13_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/13_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11013,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №14',
              img: {
                preview: 'gallery/vorota/prof/14_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/14_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11014,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №15',
              img: {
                preview: 'gallery/vorota/prof/15_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/15_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11015,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №16',
              img: {
                preview: 'gallery/vorota/prof/16_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/16_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11016,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №17',
              img: {
                preview: 'gallery/vorota/prof/17_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/17_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11017,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №18',
              img: {
                preview: 'gallery/vorota/prof/18_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/18_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11018,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №19',
              img: {
                preview: 'gallery/vorota/prof/19_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/19_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11019,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №20',
              img: {
                preview: 'gallery/vorota/prof/20_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/20_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11020,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №21',
              img: {
                preview: 'gallery/vorota/prof/21_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/21_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11021,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №22',
              img: {
                preview: 'gallery/vorota/prof/22_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/22_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11022,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №23',
              img: {
                preview: 'gallery/vorota/prof/23_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/23_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11023,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №24',
              img: {
                preview: 'gallery/vorota/prof/24_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/24_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11024,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №25',
              img: {
                preview: 'gallery/vorota/prof/25_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/25_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11026,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №26',
              img: {
                preview: 'gallery/vorota/prof/26_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/26_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11027,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №27',
              img: {
                preview: 'gallery/vorota/prof/27_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/27_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11028,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №28',
              img: {
                preview: 'gallery/vorota/prof/28_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/28_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11029,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №29',
              img: {
                preview: 'gallery/vorota/prof/29_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/29_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11030,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №30',
              img: {
                preview: 'gallery/vorota/prof/30_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/30_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11031,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №31',
              img: {
                preview: 'gallery/vorota/prof/31_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/31_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11032,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №32',
              img: {
                preview: 'gallery/vorota/prof/32_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/32_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11033,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №10',
              img: {
                preview: 'gallery/vorota/prof/33_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/33_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11034,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №34',
              img: {
                preview: 'gallery/vorota/prof/34_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/34_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11035,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №35',
              img: {
                preview: 'gallery/vorota/prof/35_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/35_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11036,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №10',
              img: {
                preview: 'gallery/vorota/prof/36_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/36_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11037,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №10',
              img: {
                preview: 'gallery/vorota/prof/37_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/37_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11038,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №38',
              img: {
                preview: 'gallery/vorota/prof/38_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/38_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11039,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №39',
              img: {
                preview: 'gallery/vorota/prof/39_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/39_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11040,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №40',
              img: {
                preview: 'gallery/vorota/prof/40_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/40_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11041,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №41',
              img: {
                preview: 'gallery/vorota/prof/41_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/41_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11042,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №42',
              img: {
                preview: 'gallery/vorota/prof/42_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/42_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11043,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №43',
              img: {
                preview: 'gallery/vorota/prof/43_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/43_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11044,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №44',
              img: {
                preview: 'gallery/vorota/prof/44_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/44_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11045,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №45',
              img: {
                preview: 'gallery/vorota/prof/45_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/45_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11046,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №46',
              img: {
                preview: 'gallery/vorota/prof/46_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/46_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11047,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №47',
              img: {
                preview: 'gallery/vorota/prof/47_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/47_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11048,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №48',
              img: {
                preview: 'gallery/vorota/prof/48_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/48_vorota_prof_1000x750.jpg',
              },
            },
              {
              id: 11049,
              title: 'Ворота из профнастила',
              text: 'Из профнастила №49',
              img: {
                preview: 'gallery/vorota/prof/43_vorota_prof_400x300.jpg',
                original: 'gallery/vorota/prof/43_vorota_prof_1000x750.jpg',
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
      text: 'Кованые калитки являются украшением входной зоны, придают забору и ограждению завершенный вид, облогараживают пространство. Кованые ворота отличаются отовсех других своей прочностью, стойкостью к механическим повреждениям и погодным явлениям.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые калитки, заказать калитку с установкой - Москва и Московская область  '},
          { name: 'keywords', content: 'купить калитки не дорого, ковка, художественная, кованые, заборы, ворота, калитки, цена, стоимость, kovka-mo,калитки одинцово'},
        ],
        title: 'Купить кованые калитки - фото и цены в Москве и МО – ковка –от компании Феникс Стальное Решение'
      },
      price: 'от 7000р м',
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
              text: 'Калитки №1',
              img: {
                preview: 'gallery/kalitki/01_kalitki_400x300.jpg',
                original:'gallery/kalitki/01_kalitki_1000x750.jpg',
              },
            },

            {
              id: 22,
              title: 'Калитки уличные',
              text: 'Калитки №2',
              img: {
                preview: 'gallery/kalitki/02_kalitki_400x300.jpg',
                original:'gallery/kalitki/02_kalitki_1000x750.jpg',
              },
            },
            {
              id: 23,
              title: 'Калитки уличные',
              text: 'Калитки №3',
              img: {
                preview: 'gallery/kalitki/03_kalitki_400x300.jpg',
                original:'gallery/kalitki/03_kalitki_1000x750.jpg',
              },
            },

            {
              id: 24,
              title: 'Калитки уличные',
              text: 'Калитки №4',
              img: {
                preview: 'gallery/kalitki/04_kalitki_400x300.jpg',
                original:'gallery/kalitki/04_kalitki_1000x750.jpg',
              },
            },

            {
              id: 25,
              title: 'Калитки уличные',
              text: 'Калитки №5',
              img: {
                preview: 'gallery/kalitki/05_kalitki_400x300.jpg',
                original:'gallery/kalitki/05_kalitki_1000x750.jpg',
              },
            },

            {
              id: 26,
              title: 'Калитки уличные',
              text: 'Калитки №6',
              img: {
                preview: 'gallery/kalitki/06_kalitki_400x300.jpg',
                original:'gallery/kalitki/06_kalitki_1000x750.jpg',
              },
            },

            {
              id: 27,
              title: 'Калитки уличные',
              text: 'Калитки №7',
              img: {
                preview: 'gallery/kalitki/07_kalitki_400x300.jpg',
                original:'gallery/kalitki/07_kalitki_1000x750.jpg',
              },
            },

            {
              id: 28,
              title: 'Калиткиуличные',
              text: 'Калитки №8',
              img: {
                preview: 'gallery/kalitki/08_kalitki_400x300.jpg',
                original:'gallery/kalitki/08_kalitki_1000x750.jpg',
              },
            },

            {
              id: 29,
              title: 'Калитки уличные',
              text: 'Калитки №9',
              img: {
                preview: 'gallery/kalitki/09_kalitki_400x300.jpg',
                original:'gallery/kalitki/09_kalitki_1000x750.jpg',
              },
            },

            {
              id: 30,
              title: 'Калитки уличные',
              text: 'Калитки №10',
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
              text: 'Калитки в помещении №1',
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
        ' По внешнему виду кованые перила могут быть красивее резных деревянных,' +
        ' благодаря технологиям художественной ковки позволяющим создавать уникальные фигуры.',
      metaData: {
        meta: [
          { hid:'description-contacts', name: 'description', content: 'Купить кованые перила в Москве по фото, эскизу, на заказ с доставкой и установкой в Москве и Московской области.'},
          { name: 'keywords', content: 'купить кованые перила не дорого, фото, ковка, художественная, кованые, перила, ограждения, лестниц, цена, стоимость, kovka-mo,кованые перила,перила одинцово'},
        ],
        title: 'Купить кованые перила  в Москве и МО - цена и фото, изготовление на заказ – ковка –от компании Феникс Стальное Решение'
      },
      price: 'от 5000р м',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованый балкон по фото, эскизу, на заказ с доставкой и установкой в Москве и Московской области.'},
          { name: 'keywords', content: 'купить кованый балкон не дорого, ограждение, балкон, парапет, цена, стоимость, ковка, художественная, изделие, кованые, французские, перила, kovka-mo,кованый балкон,балкон одинцово'},
        ],
        title: 'Купить кованый балкон - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от 5000р м',
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
              {
              id: 110007,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №7',
              img: {
                preview: 'gallery/balkoni/combo/7_combo_400x300.jpg',
                original:'gallery/balkoni/combo/7_combo_1000x750.jpg',
              },
            },
              {
              id: 110008,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №8',
              img: {
                preview: 'gallery/balkoni/combo/8_combo_400x300.jpg',
                original:'gallery/balkoni/combo/8_combo_1000x750.jpg',
              },
            },
              {
              id: 110009,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №9',
              img: {
                preview: 'gallery/balkoni/combo/9_combo_400x300.jpg',
                original:'gallery/balkoni/combo/9_combo_1000x750.jpg',
              },
            },
              {
              id: 110010,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №10',
              img: {
                preview: 'gallery/balkoni/combo/10_combo_400x300.jpg',
                original:'gallery/balkoni/combo/10_combo_1000x750.jpg',
              },
            },
              {
              id: 1100011,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №11',
              img: {
                preview: 'gallery/balkoni/combo/11_combo_400x300.jpg',
                original:'gallery/balkoni/combo/11_combo_1000x750.jpg',
              },
            },
              {
              id: 1100012,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №12',
              img: {
                preview: 'gallery/balkoni/combo/12_combo_400x300.jpg',
                original:'gallery/balkoni/combo/12_combo_1000x750.jpg',
              },
            },
              {
              id: 1100013,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №13',
              img: {
                preview: 'gallery/balkoni/combo/13_combo_400x300.jpg',
                original:'gallery/balkoni/combo/13_combo_1000x750.jpg',
              },
            },
              {
              id: 1100014,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №14',
              img: {
                preview: 'gallery/balkoni/combo/14_combo_400x300.jpg',
                original:'gallery/balkoni/combo/14_combo_1000x750.jpg',
              },
            },
              {
              id: 1100015,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №15',
              img: {
                preview: 'gallery/balkoni/combo/15_combo_400x300.jpg',
                original:'gallery/balkoni/combo/15_combo_1000x750.jpg',
              },
            },
             {
              id: 1100016,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №16',
              img: {
                preview: 'gallery/balkoni/combo/16_combo_400x300.jpg',
                original:'gallery/balkoni/combo/16_combo_1000x750.jpg',
              },
            },
              {
              id: 1100017,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №17',
              img: {
                preview: 'gallery/balkoni/combo/17_combo_400x300.jpg',
                original:'gallery/balkoni/combo/17_combo_1000x750.jpg',
              },
            },
              {
              id: 1100018,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №11',
              img: {
                preview: 'gallery/balkoni/combo/18_combo_400x300.jpg',
                original:'gallery/balkoni/combo/18_combo_1000x750.jpg',
              },
            },
              {
              id: 1100019,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №19',
              img: {
                preview: 'gallery/balkoni/combo/19_combo_400x300.jpg',
                original:'gallery/balkoni/combo/19_combo_1000x750.jpg',
              },
            },
              {
              id: 1100020,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №20',
              img: {
                preview: 'gallery/balkoni/combo/20_combo_400x300.jpg',
                original:'gallery/balkoni/combo/20_combo_1000x750.jpg',
              },
            },
              {
              id: 1100021,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №21',
              img: {
                preview: 'gallery/balkoni/combo/21_combo_400x300.jpg',
                original:'gallery/balkoni/combo/21_combo_1000x750.jpg',
              },
            },
              {
              id: 1100022,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №22',
              img: {
                preview: 'gallery/balkoni/combo/22_combo_400x300.jpg',
                original:'gallery/balkoni/combo/22_combo_1000x750.jpg',
              },
            },
              {
              id: 1100023,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №23',
              img: {
                preview: 'gallery/balkoni/combo/23_combo_400x300.jpg',
                original:'gallery/balkoni/combo/23_combo_1000x750.jpg',
              },
            },
              {
              id: 1100024,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №24',
              img: {
                preview: 'gallery/balkoni/combo/24_combo_400x300.jpg',
                original:'gallery/balkoni/combo/24_combo_1000x750.jpg',
              },
            },
              {
              id: 1100025,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №25',
              img: {
                preview: 'gallery/balkoni/combo/25_combo_400x300.jpg',
                original:'gallery/balkoni/combo/25_combo_1000x750.jpg',
              },
            },
              {
              id: 1100026,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №26',
              img: {
                preview: 'gallery/balkoni/combo/26_combo_400x300.jpg',
                original:'gallery/balkoni/combo/26_combo_1000x750.jpg',
              },
            },
              {
              id: 1100011,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №27',
              img: {
                preview: 'gallery/balkoni/combo/27_combo_400x300.jpg',
                original:'gallery/balkoni/combo/27_combo_1000x750.jpg',
              },
            },
              {
              id: 1100028,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №28',
              img: {
                preview: 'gallery/balkoni/combo/28_combo_400x300.jpg',
                original:'gallery/balkoni/combo/28_combo_1000x750.jpg',
              },
            },
              {
              id: 1100029,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №29',
              img: {
                preview: 'gallery/balkoni/combo/29_combo_400x300.jpg',
                original:'gallery/balkoni/combo/29_combo_1000x750.jpg',
              },
            },
              {
              id: 1100030,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №30',
              img: {
                preview: 'gallery/balkoni/combo/30_combo_400x300.jpg',
                original:'gallery/balkoni/combo/30_combo_1000x750.jpg',
              },
            },
              {
              id: 1100031,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №31',
              img: {
                preview: 'gallery/balkoni/combo/31_combo_400x300.jpg',
                original:'gallery/balkoni/combo/31_combo_1000x750.jpg',
              },
            },
              {
              id: 1100032,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №32',
              img: {
                preview: 'gallery/balkoni/combo/32_combo_400x300.jpg',
                original:'gallery/balkoni/combo/32_combo_1000x750.jpg',
              },
            },
              {
              id: 1100033,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №33',
              img: {
                preview: 'gallery/balkoni/combo/33_combo_400x300.jpg',
                original:'gallery/balkoni/combo/33_combo_1000x750.jpg',
              },
            },
              {
              id: 1100034,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №34',
              img: {
                preview: 'gallery/balkoni/combo/34_combo_400x300.jpg',
                original:'gallery/balkoni/combo/34_combo_1000x750.jpg',
              },
            },
              {
              id: 1100035,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №35',
              img: {
                preview: 'gallery/balkoni/combo/35_combo_400x300.jpg',
                original:'gallery/balkoni/combo/35_combo_1000x750.jpg',
              },
            },
              {
              id: 1100036,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №36',
              img: {
                preview: 'gallery/balkoni/combo/36_combo_400x300.jpg',
                original:'gallery/balkoni/combo/36_combo_1000x750.jpg',
              },
            },
              {
              id: 1100037,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №37',
              img: {
                preview: 'gallery/balkoni/combo/37_combo_400x300.jpg',
                original:'gallery/balkoni/combo/37_combo_1000x750.jpg',
              },
            },
              {
              id: 1100038,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №38',
              img: {
                preview: 'gallery/balkoni/combo/38_combo_400x300.jpg',
                original:'gallery/balkoni/combo/38_combo_1000x750.jpg',
              },
            },
              {
              id: 1100039,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №39',
              img: {
                preview: 'gallery/balkoni/combo/39_combo_400x300.jpg',
                original:'gallery/balkoni/combo/39_combo_1000x750.jpg',
              },
            },
              {
              id: 1100040,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №40',
              img: {
                preview: 'gallery/balkoni/combo/40_combo_400x300.jpg',
                original:'gallery/balkoni/combo/40_combo_1000x750.jpg',
              },
            },
              {
              id: 1100041,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №41',
              img: {
                preview: 'gallery/balkoni/combo/41_combo_400x300.jpg',
                original:'gallery/balkoni/combo/41_combo_1000x750.jpg',
              },
            },
              {
              id: 1100042,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №42',
              img: {
                preview: 'gallery/balkoni/combo/42_combo_400x300.jpg',
                original:'gallery/balkoni/combo/42_combo_1000x750.jpg',
              },
            },
              {
              id: 1100043,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №43',
              img: {
                preview: 'gallery/balkoni/combo/43_combo_400x300.jpg',
                original:'gallery/balkoni/combo/43_combo_1000x750.jpg',
              },
            },
              {
              id: 1100044,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №44',
              img: {
                preview: 'gallery/balkoni/combo/44_combo_400x300.jpg',
                original:'gallery/balkoni/combo/44_combo_1000x750.jpg',
              },
            },
              {
              id: 1100045,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №45',
              img: {
                preview: 'gallery/balkoni/combo/45_combo_400x300.jpg',
                original:'gallery/balkoni/combo/45_combo_1000x750.jpg',
              },
            },
              {
              id: 1100046,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №46',
              img: {
                preview: 'gallery/balkoni/combo/46_combo_400x300.jpg',
                original:'gallery/balkoni/combo/46_combo_1000x750.jpg',
              },
            },
              {
              id: 1100047,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №47',
              img: {
                preview: 'gallery/balkoni/combo/47_combo_400x300.jpg',
                original:'gallery/balkoni/combo/47_combo_1000x750.jpg',
              },
            },
              {
              id: 1100048,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №48',
              img: {
                preview: 'gallery/balkoni/combo/48_combo_400x300.jpg',
                original:'gallery/balkoni/combo/48_combo_1000x750.jpg',
              },
            },
              {
              id: 1100049,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №49',
              img: {
                preview: 'gallery/balkoni/combo/49_combo_400x300.jpg',
                original:'gallery/balkoni/combo/49_combo_1000x750.jpg',
              },
            },
              {
              id: 1100050,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №50',
              img: {
                preview: 'gallery/balkoni/combo/50_combo_400x300.jpg',
                original:'gallery/balkoni/combo/50_combo_1000x750.jpg',
              },
            },
              {
              id: 1100051,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №51',
              img: {
                preview: 'gallery/balkoni/combo/51_combo_400x300.jpg',
                original:'gallery/balkoni/combo/51_combo_1000x750.jpg',
              },
            },
              {
              id: 1100052,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №52',
              img: {
                preview: 'gallery/balkoni/combo/52_combo_400x300.jpg',
                original:'gallery/balkoni/combo/52_combo_1000x750.jpg',
              },
            },
              {
              id: 1100053,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №53',
              img: {
                preview: 'gallery/balkoni/combo/53_combo_400x300.jpg',
                original:'gallery/balkoni/combo/53_combo_1000x750.jpg',
              },
            },
              {
              id: 1100054,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №54',
              img: {
                preview: 'gallery/balkoni/combo/54_combo_400x300.jpg',
                original:'gallery/balkoni/combo/54_combo_1000x750.jpg',
              },
            },
              {
              id: 1100055,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №55',
              img: {
                preview: 'gallery/balkoni/combo/55_combo_400x300.jpg',
                original:'gallery/balkoni/combo/55_combo_1000x750.jpg',
              },
            },
              {
              id: 1100056,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №56',
              img: {
                preview: 'gallery/balkoni/combo/56_combo_400x300.jpg',
                original:'gallery/balkoni/combo/56_combo_1000x750.jpg',
              },
            },
              {
              id: 1100057,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №57',
              img: {
                preview: 'gallery/balkoni/combo/57_combo_400x300.jpg',
                original:'gallery/balkoni/combo/57_combo_1000x750.jpg',
              },
            },
              {
              id: 1100058,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №58',
              img: {
                preview: 'gallery/balkoni/combo/58_combo_400x300.jpg',
                original:'gallery/balkoni/combo/58_combo_1000x750.jpg',
              },
            },
              {
              id: 1100059,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №59',
              img: {
                preview: 'gallery/balkoni/combo/59_combo_400x300.jpg',
                original:'gallery/balkoni/combo/59_combo_1000x750.jpg',
              },
            },
              {
              id: 1100060,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №60',
              img: {
                preview: 'gallery/balkoni/combo/60_combo_400x300.jpg',
                original:'gallery/balkoni/combo/60_combo_1000x750.jpg',
              },
            },
              {
              id: 1100061,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №61',
              img: {
                preview: 'gallery/balkoni/combo/61_combo_400x300.jpg',
                original:'gallery/balkoni/combo/61_combo_1000x750.jpg',
              },
            },
              {
              id: 1100011,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №62',
              img: {
                preview: 'gallery/balkoni/combo/62_combo_400x300.jpg',
                original:'gallery/balkoni/combo/62_combo_1000x750.jpg',
              },
            },
              {
              id: 1100011,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №63',
              img: {
                preview: 'gallery/balkoni/combo/63_combo_400x300.jpg',
                original:'gallery/balkoni/combo/63_combo_1000x750.jpg',
              },
            },
              {
              id: 1100011,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №64',
              img: {
                preview: 'gallery/balkoni/combo/64_combo_400x300.jpg',
                original:'gallery/balkoni/combo/64_combo_1000x750.jpg',
              },
            },
              {
              id: 1100065,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №65',
              img: {
                preview: 'gallery/balkoni/combo/65_combo_400x300.jpg',
                original:'gallery/balkoni/combo/65_combo_1000x750.jpg',
              },
            },
              {
              id: 1100066,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №66',
              img: {
                preview: 'gallery/balkoni/combo/66_combo_400x300.jpg',
                original:'gallery/balkoni/combo/66_combo_1000x750.jpg',
              },
            },
              {
              id: 1100067,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №67',
              img: {
                preview: 'gallery/balkoni/combo/67_combo_400x300.jpg',
                original:'gallery/balkoni/combo/67_combo_1000x750.jpg',
              },
            },
              {
              id: 1100068,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №68',
              img: {
                preview: 'gallery/balkoni/combo/68_combo_400x300.jpg',
                original:'gallery/balkoni/combo/68_combo_1000x750.jpg',
              },
            },
              {
              id: 1100069,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №69',
              img: {
                preview: 'gallery/balkoni/combo/69_combo_400x300.jpg',
                original:'gallery/balkoni/combo/69_combo_1000x750.jpg',
              },
            },
              {
              id: 1100070,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №70',
              img: {
                preview: 'gallery/balkoni/combo/70_combo_400x300.jpg',
                original:'gallery/balkoni/combo/70_combo_1000x750.jpg',
              },
            },
              {
              id: 1100071,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №71',
              img: {
                preview: 'gallery/balkoni/combo/71_combo_400x300.jpg',
                original:'gallery/balkoni/combo/71_combo_1000x750.jpg',
              },
            },
              {
              id: 1100072,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №72',
              img: {
                preview: 'gallery/balkoni/combo/72_combo_400x300.jpg',
                original:'gallery/balkoni/combo/72_combo_1000x750.jpg',
              },
            },
              {
              id: 1100073,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №73',
              img: {
                preview: 'gallery/balkoni/combo/73_combo_400x300.jpg',
                original:'gallery/balkoni/combo/73_combo_1000x750.jpg',
              },
            },
              {
              id: 1100074,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №74',
              img: {
                preview: 'gallery/balkoni/combo/74_combo_400x300.jpg',
                original:'gallery/balkoni/combo/74_combo_1000x750.jpg',
              },
            },
              {
              id: 1100075,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №75',
              img: {
                preview: 'gallery/balkoni/combo/75_combo_400x300.jpg',
                original:'gallery/balkoni/combo/75_combo_1000x750.jpg',
              },
            },
              {
              id: 1100076,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №76',
              img: {
                preview: 'gallery/balkoni/combo/76_combo_400x300.jpg',
                original:'gallery/balkoni/combo/76_combo_1000x750.jpg',
              },
            },
              {
              id: 1100077,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №77',
              img: {
                preview: 'gallery/balkoni/combo/77_combo_400x300.jpg',
                original:'gallery/balkoni/combo/77_combo_1000x750.jpg',
              },
            },
              {
              id: 1100078,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №78',
              img: {
                preview: 'gallery/balkoni/combo/78_combo_400x300.jpg',
                original:'gallery/balkoni/combo/78_combo_1000x750.jpg',
              },
            },
              {
              id: 1100079,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №79',
              img: {
                preview: 'gallery/balkoni/combo/79_combo_400x300.jpg',
                original:'gallery/balkoni/combo/79_combo_1000x750.jpg',
              },
            },
              {
              id: 1100080,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №80',
              img: {
                preview: 'gallery/balkoni/combo/80_combo_400x300.jpg',
                original:'gallery/balkoni/combo/80_combo_1000x750.jpg',
              },
            },
              {
              id: 1100081,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №81',
              img: {
                preview: 'gallery/balkoni/combo/81_combo_400x300.jpg',
                original:'gallery/balkoni/combo/81_combo_1000x750.jpg',
              },
            },
              {
              id: 1100082,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №82',
              img: {
                preview: 'gallery/balkoni/combo/82_combo_400x300.jpg',
                original:'gallery/balkoni/combo/82_combo_1000x750.jpg',
              },
            },
              {
              id: 1100083,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №83',
              img: {
                preview: 'gallery/balkoni/combo/83_combo_400x300.jpg',
                original:'gallery/balkoni/combo/83_combo_1000x750.jpg',
              },
            },
              {
              id: 1100084,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №84',
              img: {
                preview: 'gallery/balkoni/combo/84_combo_400x300.jpg',
                original:'gallery/balkoni/combo/84_combo_1000x750.jpg',
              },
            },
              {
              id: 1100085,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №85',
              img: {
                preview: 'gallery/balkoni/combo/85_combo_400x300.jpg',
                original:'gallery/balkoni/combo/85_combo_1000x750.jpg',
              },
            },
              {
              id: 1100086,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №86',
              img: {
                preview: 'gallery/balkoni/combo/86_combo_400x300.jpg',
                original:'gallery/balkoni/combo/86_combo_1000x750.jpg',
              },
            },
              {
              id: 1100087,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №87',
              img: {
                preview: 'gallery/balkoni/combo/87_combo_400x300.jpg',
                original:'gallery/balkoni/combo/87_combo_1000x750.jpg',
              },
            },
              {
              id: 1100088,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №88',
              img: {
                preview: 'gallery/balkoni/combo/88_combo_400x300.jpg',
                original:'gallery/balkoni/combo/88_combo_1000x750.jpg',
              },
            },
              {
              id: 1100089,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №89',
              img: {
                preview: 'gallery/balkoni/combo/89_combo_400x300.jpg',
                original:'gallery/balkoni/combo/89_combo_1000x750.jpg',
              },
            },
              {
              id: 1100090,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №90',
              img: {
                preview: 'gallery/balkoni/combo/90_combo_400x300.jpg',
                original:'gallery/balkoni/combo/90_combo_1000x750.jpg',
              },
            },
              {
              id: 1100091,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №91',
              img: {
                preview: 'gallery/balkoni/combo/91_combo_400x300.jpg',
                original:'gallery/balkoni/combo/91_combo_1000x750.jpg',
              },
            },
              {
              id: 1100092,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №92',
              img: {
                preview: 'gallery/balkoni/combo/92_combo_400x300.jpg',
                original:'gallery/balkoni/combo/92_combo_1000x750.jpg',
              },
            },
              {
              id: 1100093,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №93',
              img: {
                preview: 'gallery/balkoni/combo/93_combo_400x300.jpg',
                original:'gallery/balkoni/combo/93_combo_1000x750.jpg',
              },
            },
              {
              id: 1100094,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №94',
              img: {
                preview: 'gallery/balkoni/combo/94_combo_400x300.jpg',
                original:'gallery/balkoni/combo/94_combo_1000x750.jpg',
              },
            },
              {
              id: 1100095,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №95',
              img: {
                preview: 'gallery/balkoni/combo/95_combo_400x300.jpg',
                original:'gallery/balkoni/combo/95_combo_1000x750.jpg',
              },
            },
              {
              id: 1100096,
              title: 'Кованые балконы комбинированные',
              text: 'Кованые балконы комбинированные №96',
              img: {
                preview: 'gallery/balkoni/combo/96_combo_400x300.jpg',
                original:'gallery/balkoni/combo/96_combo_1000x750.jpg',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые козырьки в Москве и Московской области. Фотографии с ценами.'},
          { name: 'keywords', content: 'купить кованые козырьки не дорого, ковка, художественная, кованые, козырьки, цена, стоимость, вход, дверь, установка, kovka-mo,кованный козырьки,козырьки одинцово'},
        ],
        title: 'Купить кованые козырьки - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от 10000р м',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые заборы по эскизу и на заказ в Москве и Московской области'},
          { name: 'keywords', content: 'купить кованые заборы не дорого, ковка, художественная, кованые, заборы, ограды, цена, стоимость, kovka-mo,кованые заборы,заборы одинцово'},
        ],
        title: 'Купить кованые заборы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от 5000р м',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые навесы изготовления на заказ с доставкой и установкой в Москве и Московской области. Фотографии и эскизы кованых навесов.'},
          { name: 'keywords', content: 'купить кованые навесы не дорого, ковка, художественная, кованые, навесы, крыльцо, сад, бассейн, арочные, поликарбонат, беседка, крыльцо, цена, стоимость, kovka-mo,кованые навесы,навесы одинцово'},
        ],
        title: 'Купить кованые навесы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 3500 && 'р м',
      types: [
        /////////////////////////Навесы////////////////////////////////////
        {
          title: 'Кованые навесы арочные',
          slug: 'navesi_2',
          img: {
            preview: 'gallery/naves/arch/01_arched_400x300.jpg',
            original:'gallery/naves/arch/01_arched_1000x750.jpg',
          },
          products: [
            {
              id: 1030,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №1',
              img: {
                preview: 'gallery/naves/arch/01_arched_400x300.jpg',
                original:'gallery/naves/arch/01_arched_1000x750.jpg',
              },
            },
            {
              id: 1031,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №2',
              img: {
                preview: 'gallery/naves/arch/02_arched_400x300.jpg',
                original:'gallery/naves/arch/02_arched_1000x750.jpg',
              },
            },

            {
              id: 1032,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №3',
              img: {
                preview: 'gallery/naves/arch/03_arched_400x300.jpg',
                original:'gallery/naves/arch/03_arched_1000x750.jpg',
              },
            },
            {
              id: 1033,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №4',
              img: {
                preview: 'gallery/naves/arch/04_arched_400x300.jpg',
                original:'gallery/naves/arch/04_arched_1000x750.jpg',
              },
            },
            {
              id: 1034,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №4',
              img: {
                preview: 'gallery/naves/arch/05_arched_400x300.jpg',
                original:'gallery/naves/arch/05_arched_1000x750.jpg',
              },
            },
            {
              id: 1035,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №6',
              img: {
                preview: 'gallery/naves/arch/06_arched_400x300.jpg',
                original:'gallery/naves/arch/06_arched_1000x750.jpg',
              },
            },
            {
              id: 1036,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №7',
              img: {
                preview: 'gallery/naves/arch/07_arched_400x300.jpg',
                original:'gallery/naves/arch/07_arched_1000x750.jpg',
              },
            },
            {
              id: 1037,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №8',
              img: {
                preview: 'gallery/naves/arch/08_arched_400x300.jpg',
                original:'gallery/naves/arch/08_arched_1000x750.jpg',
              },
            },
            {
              id: 1038,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №9',
              img: {
                preview: 'gallery/naves/arch/09_arched_400x300.jpg',
                original:'gallery/naves/arch/09_arched_1000x750.jpg',
              },
            },
            {
              id: 1039,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №10',
              img: {
                preview: 'gallery/naves/arch/10_arched_400x300.jpg',
                original:'gallery/naves/arch/10_arched_1000x750.jpg',
              },
            },
            {
              id: 1040,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №11',
              img: {
                preview: 'gallery/naves/arch/11_arched_400x300.jpg',
                original:'gallery/naves/arch/11_arched_1000x750.jpg',
              },
            },
            {
              id: 1041,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №12',
              img: {
                preview: 'gallery/naves/arch/12_arched_400x300.jpg',
                original:'gallery/naves/arch/12_arched_1000x750.jpg',
              },
            },
            {
              id: 1042,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №13',
              img: {
                preview: 'gallery/naves/arch/13_arched_400x300.jpg',
                original:'gallery/naves/arch/13_arched_1000x750.jpg',
              },
            },
            {
              id: 1043,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №14',
              img: {
                preview: 'gallery/naves/arch/14_arched_400x300.jpg',
                original:'gallery/naves/arch/14_arched_1000x750.jpg',
              },
            },
            {
              id: 1044,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы  арочные №15',
              img: {
                preview: 'gallery/naves/arch/15_arched_400x300.jpg',
                original:'gallery/naves/arch/15_arched_1000x750.jpg',
              },
            },
            {
              id: 103,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы №16',
              img: {
                preview: 'gallery/naves/1_naves_400x300.jpg',
                original:'gallery/naves/1_naves_1000x750.jpg',
              },
            },
            {
              id: 105,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы арочные №17',
              img: {
                preview: 'gallery/naves/3_naves_400x300.jpg',
                original:'gallery/naves/3_naves_1000x750.jpg',
              },
            },
            {
              id: 106,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы арочные №18',
              img: {
                preview: 'gallery/naves/4_naves_400x300.jpg',
                original:'gallery/naves/4_naves_1000x750.jpg',
              },
            },

            {
              id: 107,
              title: 'Кованые навесы арочные',
              text: 'Кованые навесы арочные №19',
              img: {
                preview: 'gallery/naves/5_naves_400x300.jpg',
                original:'gallery/naves/5_naves_1000x750.jpg',
              },
            },

          ],
        },
        //////////////////////////////////////////////////////////////////
        {
          title: 'Кованые навесы каскадные',
          slug: 'navesi_3',
          img: {
            preview: 'gallery/naves/cascade/01_cascade_400x300.jpg',
            original:'gallery/naves/cascade/01_cascade_1000x750.jpg',
          },
          products: [
            {
              id: 1045,
              title: 'Кованые навесы каскадные',
              text: 'Кованые навесы  каскадные №1',
              img: {
                preview: 'gallery/naves/cascade/01_cascade_400x300.jpg',
                original:'gallery/naves/cascade/01_cascade_1000x750.jpg',
              },
            },
            {
              id: 1046,
              title: 'Кованые навесы каскадные',
              text: 'Кованые навесы  каскадные №2',
              img: {
                preview: 'gallery/naves/cascade/02_cascade_400x300.jpg',
                original:'gallery/naves/cascade/02_cascade_1000x750.jpg',
              },
            },
            {
              id: 1047,
              title: 'Кованые навесы каскадные',
              text: 'Кованые навесы  каскадные №3',
              img: {
                preview: 'gallery/naves/cascade/03_cascade_400x300.jpg',
                original:'gallery/naves/cascade/03_cascade_1000x750.jpg',
              },
            },


          ],
        },
        //////////////////////////////////////////////////////////////////
        {
          title: 'Кованые навесы односкатные',
          slug: 'navesi_3',
          img: {
            preview: 'gallery/naves/oneskat/01_single_400x300.jpg',
            original:'gallery/naves/oneskat/01_single_1000x750.jpg',
          },
          products: [

            {
              id: 1048,
              title: 'Кованые навесы односкатные',
              text: 'Кованые навесы  односкатные №1',
              img: {
                preview: 'gallery/naves/oneskat/01_single_400x300.jpg',
                original:'gallery/naves/oneskat/01_single_1000x750.jpg',
              },
            },
            {
              id: 1049,
              title: 'Кованые навесы односкатные',
              text: 'Кованые навесы  односкатные №2',
              img: {
                preview: 'gallery/naves/oneskat/02_single_400x300.jpg',
                original:'gallery/naves/oneskat/02_single_1000x750.jpg',
              },
            },
            {
              id: 1050,
              title: 'Кованые навесы односкатные',
              text: 'Кованые навесы  односкатные №3',
              img: {
                preview: 'gallery/naves/oneskat/03_single_400x300.jpg',
                original:'gallery/naves/oneskat/03_single_1000x750.jpg',
              },
            },
            {
              id: 1051,
              title: 'Кованые навесы односкатные',
              text: 'Кованые навесы  односкатные №4',
              img: {
                preview: 'gallery/naves/oneskat/04_single_400x300.jpg',
                original:'gallery/naves/oneskat/04_single_1000x750.jpg',
              },
            },
            {
              id: 1052,
              title: 'Кованые навесы односкатные',
              text: 'Кованые навесы  односкатные №5',
              img: {
                preview: 'gallery/naves/oneskat/05_single_400x300.jpg',
                original:'gallery/naves/oneskat/05_single_1000x750.jpg',
              },
            },
            {
              id: 104,
              title: 'Кованые навесы односкатные',
              text: 'Кованые навесы односкатные №6',
              img: {
                preview: 'gallery/naves/2_naves_400x300.jpg',
                original:'gallery/naves/2_naves_1000x750.jpg',
              },
            },
          ],
        },
        /////////////////////////////////////////////////////////////////
        {
          title: 'Кованые навесы полуарочные',
          slug: 'navesi_4',
          img: {
            preview: 'gallery/naves/semiarch/01_semi-arched_400x300.jpg',
            original:'gallery/naves/semiarch/01_semi-arched_1000x750.jpg',
          },
          products: [
            {
              id: 1053,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №1',
              img: {
                preview: 'gallery/naves/semiarch/01_semi-arched_400x300.jpg',
                original:'gallery/naves/semiarch/01_semi-arched_1000x750.jpg',
              },
            },
            {
              id: 1054,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №2',
              img: {
                preview: 'gallery/naves/semiarch/02_semi-arched_400x300.jpg',
                original:'gallery/naves/semiarch/02_semi-arched_1000x750.jpg',
              },
            },
            {
              id: 1055,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №3',
              img: {
                preview: 'gallery/naves/semiarch/03_semi-arched_400x300.jpg',
                original:'gallery/naves/semiarch/03_semi-arched_1000x750.jpg',
              },
            },
            {
              id: 1056,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №4',
              img: {
                preview: 'gallery/naves/semiarch/04_semi-arched_400x300.jpg',
                original:'gallery/naves/semiarch/04_semi-arched_1000x750.jpg',
              },
            },
            {
              id: 1057,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №5',
              img: {
                preview: 'gallery/naves/semiarch/05_semi-arched_400x300.jpg',
                original:'gallery/naves/semiarch/05_semi-arched_1000x750.jpg',
              },
            },
            {
              id: 1058,
              title: 'Кованые навесы полуарочные',
              text: 'Кованые навесы  полуарочные №6',
              img: {
                preview: 'gallery/naves/semiarch/06_semi-arched_400x300.jpg',
                original:'gallery/naves/semiarch/06_semi-arched_1000x750.jpg',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые беседки в Москве и Московской области. Фотографии работ. Цены, расчет стоимости по фото, эскизу.'},
          { name: 'keywords', content: 'купить кованые беседки не дорого, ковка, художественная, кованые, беседки, цена, стоимость, kovka-mo,кованые беседки,беседки одинцово'},
        ],
        title: 'Купить кованые беседки - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 15000 && 'р м',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые ограды в Москве и Московской области с коваными элементами - от недорогих и бюджетных до премиум, выполненных вручную на заказ. '},
          { name: 'keywords', content: 'купить кованые ограды не дорого, заказ, ковка, художественная, кованые, ограждения, цена, стоимость, купить, москва, kovka-mo,кованые ограды,ограды одинцово'},
        ],
        title: 'Купить кованые ограды - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 3000 && 'р м',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые решетки по фото, эскизу, на заказ с доставкой и установкой в Москве и Московской области.'},
          { name: 'keywords', content: 'купить кованые решетки не дорого, ковка, художественная, кованые, решетки, окна, цена, стоимость, kovka-mo,кованые решетки,решетки одинцово'},
        ],
        title: 'Купить кованые решетки - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 3500 && 'р м',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые вывески в Москве и Московской области. Фотографии и эскизы кованых вывесок.'},
          { name: 'keywords', content: 'купить кованые вывески не дорого, ковка, художественная, кованые, решетки, вывески, цена, стоимость, kovka-mo,кованые вывески,вывески одинцово'},
        ],
        title: 'Купить кованые вывески - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 10000 && 'шт',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованый мангал в Москве и Московской области. Фотографии кованых мангалов. Расчет цен'},
          { name: 'keywords', content: 'купить кованые мангалы не дорого, ковка, художественная, кованые, мангалы, цена, стоимость, kovka-mo,кованые мангалы,мангалы одинцово'},
        ],
        title: 'Купить кованые мангалы - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 15000 && 'шт',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые люстры в Москве и Московской области, Фотографии с ценами.'},
          { name: 'keywords', content: 'купить кованые люстры не дорого,  ковка, художественная, кованые, люстры, цена, стоимость, kovka-mo,кованые люстры,люстры одинцово'},
        ],
        title: 'Купить кованые люстры - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 20000 && 'шт',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые бра в Москве и Московской области, Фотографии с ценами.'},
          { name: 'keywords', content: 'купить кованые бра не дорого,  ковка, художественная, кованые, бра, цена, стоимость, kovka-mo,кованые бра,бра одинцово'},
        ],
        title: 'Купить кованые бра - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 7000 && 'шт',
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
          { hid:'description-contacts', name: 'description', content: 'Купить кованые бра в Москве и Московской области, Фотографии с ценами.'},
          { name: 'keywords', content: 'купить кованые торшеры не дорого,  ковка, художественная, кованые, торшеры, цена, стоимость, kovka-mo,кованые торшеры,торшеры одинцово'},
        ],
        title: 'Купить кованые торшеры - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 15000 && 'шт',
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
          { hid:'description-contacts', name: 'description', content: 'Интерьер в стиле лофт заказать в Москве и Московской области, Фотографии с ценами.'},
          { name: 'keywords', content: 'купить  лофт не дорого, ковка, художественная, кованые, лофт, стиль лофт, цена, стоимость, kovka-mo,кованые лофт,лофт одинцово'},
        ],
        title: 'Сделать интерьер в стиле лофт - цена и фото, изготовление на заказ в Москве и МО – ковка – от компании Феникс Стальное Решение'
      },
      price: 'от '&& 5000 && 'шт',
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
