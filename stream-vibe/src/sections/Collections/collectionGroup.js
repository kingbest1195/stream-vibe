import categoryItems from "../Categories/categoryItems"

const collectionGroup = [
  {
    isActive: true,
    title: "Movies",
    items: [
      {
        title: "Our Genres",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-action-1.png",
              "/src/assets/images/collection-group/movies-top10-action-2.png",
              "/src/assets/images/collection-group/movies-top10-action-3.png",
              "/src/assets/images/collection-group/movies-top10-action-4.png",
            ],
          },
          {
            title: "Adventure",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-adventure-1.png",
              "/src/assets/images/collection-group/movies-top10-adventure-2.png",
              "/src/assets/images/collection-group/movies-top10-adventure-3.png",
              "/src/assets/images/collection-group/movies-top10-adventure-4.png",
            ],
          },
          {
            title: "Comedy",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-comedy-1.png",
              "/src/assets/images/collection-group/movies-top10-comedy-2.png",
              "/src/assets/images/collection-group/movies-top10-comedy-3.png",
              "/src/assets/images/collection-group/movies-top10-comedy-4.png",
            ],
          },
          {
            title: "Drama",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-drama-1.png",
              "/src/assets/images/collection-group/movies-top10-drama-2.png",
              "/src/assets/images/collection-group/movies-top10-drama-3.png",
              "/src/assets/images/collection-group/movies-top10-drama-4.png",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-action-1.png",
              "/src/assets/images/collection-group/movies-top10-action-2.png",
              "/src/assets/images/collection-group/movies-top10-action-3.png",
              "/src/assets/images/collection-group/movies-top10-action-4.png",
            ],
          },
          {
            title: "Adventure",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-adventure-1.png",
              "/src/assets/images/collection-group/movies-top10-adventure-2.png",
              "/src/assets/images/collection-group/movies-top10-adventure-3.png",
              "/src/assets/images/collection-group/movies-top10-adventure-4.png",
            ],
          },
          {
            title: "Comedy",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-comedy-1.png",
              "/src/assets/images/collection-group/movies-top10-comedy-2.png",
              "/src/assets/images/collection-group/movies-top10-comedy-3.png",
              "/src/assets/images/collection-group/movies-top10-comedy-4.png",
            ],
          },
          {
            title: "Drama",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movies-top10-drama-1.png",
              "/src/assets/images/collection-group/movies-top10-drama-2.png",
              "/src/assets/images/collection-group/movies-top10-drama-3.png",
              "/src/assets/images/collection-group/movies-top10-drama-4.png",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Now",
        movieItems: [
          {
            title: "Trending Movie 1",
            duration: "1h 30min",
            views: "2K",
            imgSrc: "/src/assets/images/collection-group/movie-1.png",
          },
          {
            title: "Trending Movie 2",
            duration: "1h 57min",
            views: "1.5K",
            imgSrc: "/src/assets/images/collection-group/movie-2.png",
          },
          {
            title: "Trending Movie 3",
            duration: "2h 10min",
            views: "1.8K",
            imgSrc: "/src/assets/images/collection-group/movie-3.png",
          },
          {
            title: "Trending Movie 4",
            duration: "2h 20min",
            views: "3K",
            imgSrc: "/src/assets/images/collection-group/movie-4.png",
          },
          {
            title: "Trending Movie 5",
            duration: "1h 42min",
            views: "5K",
            imgSrc: "/src/assets/images/collection-group/movie-5.png",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "New Releases",
        movieItems: [
          {
            title: "New Release 1",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
            imgSrc: "/src/assets/images/collection-group/movie-6.png",
          },
          {
            title: "New Release 2",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            },
            imgSrc: "/src/assets/images/collection-group/movie-7.png",
          },
          {
            title: "New Release 3",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            },
            imgSrc: "/src/assets/images/collection-group/movie-8.png",
          },
          {
            title: "New Release 4",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            },
            imgSrc: "/src/assets/images/collection-group/movie-9.png",
          },
          {
            title: "New Release 5",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            },
            imgSrc: "/src/assets/images/collection-group/movie-10.png",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Must - Watch Movies",
        movieItems: [
          {
            title: "Must Watch 1",
            duration: "1h 57min",
            rating: {
              value: 4.3,
              label: "20K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-11.png",
          },
          {
            title: "Must Watch 2",
            duration: "1h 30min",
            rating: {
              value: 5.0,
              label: "20K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-12.png",
          },
          {
            title: "Must Watch 3",
            duration: "1h 42min",
            rating: {
              value: 4.3,
              label: "20K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-13.png",
          },
          {
            title: "Must Watch 4",
            duration: "2h 10min",
            rating: {
              value: 5.0,
              label: "20K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-14.png",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
  {
    title: "Shows",
    items: [
      {
        title: "Our Genres",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movie-15.png",
              "/src/assets/images/collection-group/movie-16.png",
              "/src/assets/images/collection-group/movie-17.png",
              "/src/assets/images/collection-group/movie-18.png",
            ],
          },
          {
            title: "Adventure",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movie-19.png",
              "/src/assets/images/collection-group/movie-20.png",
              "/src/assets/images/collection-group/movie-21.png",
              "/src/assets/images/collection-group/movie-22.png",
            ],
          },
          {
            title: "Comedy",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movie-23.png",
              "/src/assets/images/collection-group/movie-24.png",
              "/src/assets/images/collection-group/movie-25.png",
              "/src/assets/images/collection-group/movie-26.png",
            ],
          },
          {
            title: "Drama",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/collection-group/movie-27.png",
              "/src/assets/images/collection-group/movie-28.png",
              "/src/assets/images/collection-group/movie-29.png",
              "/src/assets/images/collection-group/movie-30.png",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Shows Now",
        movieItems: [
          {
            title: "Trending Show 1",
            duration: "8h 20min",
            season: "4 Season",
            imgSrc: "/src/assets/images/collection-group/movie-31.png",
          },
          {
            title: "Trending Show 2",
            duration: "12h 23min",
            season: "5 Season",
            imgSrc: "/src/assets/images/collection-group/movie-32.png",
          },
          {
            title: "Trending Show 3",
            duration: "14h 30min",
            season: "3 Season",
            imgSrc: "/src/assets/images/collection-group/movie-33.png",
          },
          {
            title: "Trending Show 4",
            duration: "7h 40min",
            season: "2 Season",
            imgSrc: "/src/assets/images/collection-group/movie-34.png",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "New Released Shows",
        movieItems: [
          {
            title: "New Show 1",
            duration: "12h 23min",
            season: "5 Season",
            imgSrc: "/src/assets/images/collection-group/movie-35.png",
            href: "/show",
          },
          {
            title: "New Show 2",
            duration: "7h 40min",
            season: "2 Season",
            imgSrc: "/src/assets/images/collection-group/movie-36.png",
            href: "/show",
          },
          {
            title: "New Show 3",
            duration: "8h 20min",
            season: "4 Season",
            imgSrc: "/src/assets/images/collection-group/movie-37.png",
            href: "/show",
          },
          {
            title: "New Show 4",
            duration: "10h 30min",
            season: "3 Season",
            imgSrc: "/src/assets/images/collection-group/movie-38.png",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Must - Watch Shows",
        movieItems: [
          {
            title: "Must Watch Show 1",
            duration: "7h 40min",
            rating: {
              value: 4.3,
              label: "12K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-39.png",
          },
          {
            title: "Must Watch Show 2",
            duration: "12h 23min",
            rating: {
              value: 5.0,
              label: "28K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-40.png",
          },
          {
            title: "Must Watch Show 3",
            duration: "10h 30min",
            rating: {
              value: 5.0,
              label: "2K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-41.png",
          },
          {
            title: "Must Watch Show 4",
            duration: "8h 20min",
            rating: {
              value: 4.3,
              label: "32K",
            },
            imgSrc: "/src/assets/images/collection-group/movie-42.png",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
]

export default collectionGroup
