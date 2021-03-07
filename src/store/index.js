//
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      coursesCategories: [
        {
          id: "java",
          name: "Java Courses",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Fs_f3agjurjdvTra8sPiiNyjoq84_iL9kA&usqp=CAU",
          courses: [
            {
              id: "java_1",
              paymentStat: "free",
              name: "Learn Java",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Sale",
              saleAmount: "10",
              imgSrc:
                "https://www.anbilarabi.com/wp-content/uploads/2018/03/Java-Logo.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "90$",
              rate: "3.5",
              videosSection: [
                {
                  id: 'java_1_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: 'https://www.youtube.com/embed/c8vpPwpAc3c',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: 'https://www.youtube.com/embed/1XrKaCrUcLo',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'java_1_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: 'https://www.youtube.com/embed/nggfb4O5Z0Q',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: 'https://www.youtube.com/embed/evsb-WwUskM',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: 'https://www.youtube.com/embed/evsb-WwUskM',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "java_2",
              paymentStat: "paied",
              name: "Master Java",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Bestseller",
              saleAmount: "0",
              imgSrc:
                "https://gorillalogic.com/wp-content/uploads/2018/02/Java-9-Modules-1024x640.gif",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "4",
              videosSection: [
                {
                  id: 'java_2_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'java_2_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "java_3",
              paymentStat: "paied",
              name: "Become Java Monster",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Recent",
              saleAmount: "0",
              imgSrc:
                "https://gorillalogic.com/wp-content/uploads/2018/02/Java-9-Modules-1024x640.gif",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "2.5",
              videosSection: [
                {
                  id: 'java_3_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'java_3_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            }
          ]
        },

        {
          id: "c",
          name: "C Courses",
          imgUrl: "https://www.dicscomputerinstitute.com/img/cc.jpg",
          courses: [
            {
              id: "c_1",
              name: "Learn C",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Sale",
              saleAmount: "10",
              imgSrc:
                "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "90$",
              rate: "3.5",
              videosSection: [
                {
                  id: 'c_1_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_1_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "c_2",
              name: "Master C",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Bestseller",
              saleAmount: "0",
              imgSrc:
                "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "4",
              videosSection: [
                {
                  id: 'c_2_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_2_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "c_3",
              name: "Become C Monster",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Recent",
              saleAmount: "0",
              imgSrc:
                "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "2",
              videosSection: [
                {
                  id: 'c_3_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_3_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            }
          ]
        },

        {
          id: "c++",
          name: "C++ Courses",
          imgUrl:
            "https://egyptacademi.com/wp-content/uploads/2020/06/1_6UpwEDOw04H5fKyaMGXpSw.jpg",
          courses: [
            {
              id: "c_plus_1",
              name: "Learn C++",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Sale",
              saleAmount: "10",
              imgSrc:
                "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
              instructor: "Eng. Mohamed Eid",
              price: "90$",
              rate: "2",
              videosSection: [
                {
                  id: 'c_plus_1_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_plus_1_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "c_plus_2",
              name: "Master C++",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Bestseller",
              saleAmount: "0",
              imgSrc:
                "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "4.5",
              videosSection: [
                {
                  id: 'c_plus_2_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_plus_2_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "c_plus_3",
              name: "Become C++ Monster",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Recent",
              saleAmount: "0",
              imgSrc:
                "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "5",
              videosSection: [
                {
                  id: 'c_plus_3_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_plus_3_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            }
          ]
        },

        {
          id: "c#",
          name: "C# Courses",
          imgUrl: "https://www.infologs.in/img/projects/c-sharp-tutorial.jpg",
          courses: [
            {
              id: "c_sharp_1",
              name: "Learn C#",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Sale",
              saleAmount: "10",
              imgSrc:
                "https://res.cloudinary.com/dz5ppacuo/image/upload/v1466341001/csharp-min_buiizq.png",
              instructor: "Eng. Mohamed Eid",
              price: "90$",
              rate: "1.5",
              videosSection: [
                {
                  id: 'c_sharp_1_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_sharp_1_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "c_sharp_2",
              name: "Master C#",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Bestseller",
              saleAmount: "0",
              imgSrc:
                "https://res.cloudinary.com/dz5ppacuo/image/upload/v1466341001/csharp-min_buiizq.png",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "3.5",
              videosSection: [
                {
                  id: 'c_sharp_2_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_sharp_2_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            },
            {
              id: "c_sharp_3",
              name: "Become C# Monster",
              paymentStat: "paied",
              desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus deleniti, earum eveniet fugiat pariatur explicabo nemo doloremque cumque delectus asperiores distinctio.`,
              status: "Recent",
              saleAmount: "0",
              imgSrc:
                "https://res.cloudinary.com/dz5ppacuo/image/upload/v1466341001/csharp-min_buiizq.png",
              instructor: "Eng. Mohamed Eid",
              price: "200$",
              rate: "2",
              videosSection: [
                {
                  id: 'c_sharp_3_1',
                  title: 'Setcion 1',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                  ],
                },
                {
                  id: 'c_sharp_3_2',
                  title: 'Setcion 2',
                  videos: [
                    {
                      id: 'v_1',
                      link: '',
                      name: 'Video 1'
                    },
                    {
                      id: 'v_2',
                      link: '',
                      name: 'Video 2'
                    },
                    {
                      id: 'v_3',
                      link: '',
                      name: 'Video 3'
                    },
                  ],
                },
              ]
            }
          ]
        }
      ],

      blogs: [
        {
          id: "post_1",
          title: "How To Write A Cleane Code",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque. Delectus, voluptatum autem nesciunt voluptas quis eveniet eius minus sit. Optio voluptas repellat sequi eveniet quis velit fuga ipsum ut.",
          author: "Mohamed Eid",
          date: "20 - 2 - 2021",
          imgSrc:
            "https://i1.wp.com/blog.codacy.com/wp-content/uploads/2018/10/20181002_WhyCodingStandardsMatter.jpg?fit=750%2C400&ssl=1",
          subject: `(1) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.`
        },

        {
          id: "post_2",
          title: "Learn To Be Creative",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque. Delectus, voluptatum autem nesciunt voluptas quis eveniet eius minus sit. Optio voluptas repellat sequi eveniet quis velit fuga ipsum ut.",
          author: "Mohamed Eid",
          date: "15 - 2 - 2021",
          imgSrc:
            "https://studio.uxpincdn.com/studio/wp-content/uploads/2020/02/BlogpostHeader_CodingLanguages_1200x600-1024x512.png",
          subject: `(2) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.`
        },

        {
          id: "post_3",
          title: "Web Design Fundmentals",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque. Delectus, voluptatum autem nesciunt voluptas quis eveniet eius minus sit. Optio voluptas repellat sequi eveniet quis velit fuga ipsum ut.",
          author: "Mahmoud Siliman",
          date: "10 - 2 - 2021",
          imgSrc:
            "https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/16076/0717_Brutalist_and_Minimalist_Web_Design_Lina_Newsletter___blog-16ca0002786ad45ef302e074bbdcec87.png",
          subject: `(3) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.`
        },

        {
          id: "post_4",
          title: "What Is UI / Ux",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eaque. Delectus, voluptatum autem nesciunt voluptas quis eveniet eius minus sit. Optio voluptas repellat sequi eveniet quis velit fuga ipsum ut.",
          author: "Mahmoud Siliman",
          date: "5 - 2 - 2021",
          imgSrc:
            "https://www.pixerio.com/wp-content/uploads/2019/08/UX-is-not-UI-300x184.png",
          subject: `(4) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem aliquid praesentium itaque at doloribus incidunt consectetur corrupti veritatis error impedit, nulla reiciendis quae consequuntur quod vitae minus harum numquam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi velit atque repellendus earum itaque rerum sunt. Animi recusandae numquam, temporibus exercitationem officia labore adipisci ex excepturi corrupti voluptatibus nihil.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eveniet quibusdam quis adipisci veniam odio a voluptate dolore, tempore incidunt itaque vel sed sapiente facere iste quod corporis, fugiat perspiciatis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ad magni explicabo impedit aspernatur doloribus architecto mollitia nobis nisi, ab, ratione quo culpa maiores est delectus accusamus provident iure odit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente ipsum nostrum consequuntur. Sequi consectetur, quas omnis quo exercitationem dolorum quasi autem voluptatibus magnam hic quae, minima explicabo earum ut.`
        }
      ]
    };
  },
  mutations: {},
  actions: {},
  modules: {}
});
//
