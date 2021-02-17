import { createStore } from "vuex";

export default createStore({
  state() {
    return{
      coursesCategories: [
        {
          id: 'java',
          name: 'Java Courses',
          imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Fs_f3agjurjdvTra8sPiiNyjoq84_iL9kA&usqp=CAU',
          courses: [
            {
              id: 'java_1',
              name: 'Learn Java',
              status: "Sale",
              saleAmount: "10",
              imgSrc: "https://www.anbilarabi.com/wp-content/uploads/2018/03/Java-Logo.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "90$"
            },
            {
              id: 'java_2',
              name: 'Master Java',
              status: "Bestseller",
              saleAmount: "0",
              imgSrc: "https://gorillalogic.com/wp-content/uploads/2018/02/Java-9-Modules-1024x640.gif",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
            {
              id: 'java_3',
              name: 'Become Java Monster',
              status: "Recent",
              saleAmount: "0",
              imgSrc: "https://gorillalogic.com/wp-content/uploads/2018/02/Java-9-Modules-1024x640.gif",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
          ]
        },

        {
          id: 'c',
          name: 'C Courses',
          imgUrl: "https://www.dicscomputerinstitute.com/img/cc.jpg",
          courses: [
            {
              id: 'c_1',
              name: 'Learn C',
              status: "Sale",
              saleAmount: "10",
              imgSrc: "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "90$"
            },
            {
              id: 'c_2',
              name: 'Master C',
              status: "Bestseller",
              saleAmount: "0",
              imgSrc: "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
            {
              id: 'c_3',
              name: 'Become C Monster',
              status: "Recent",
              saleAmount: "0",
              imgSrc: "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
          ]
        },

        {
          id: 'c++',
          name: 'C++ Courses',
          imgUrl: "https://egyptacademi.com/wp-content/uploads/2020/06/1_6UpwEDOw04H5fKyaMGXpSw.jpg",
          courses: [
            {
              id: 'c_plus_1',
              name: 'Learn C++',
              status: "Sale",
              saleAmount: "10",
              imgSrc: "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
              instructor: "Eng. Mohamed Eid",
              price: "90$"
            },
            {
              id: 'c_plus_2',
              name: 'Master C++',
              status: "Bestseller",
              saleAmount: "0",
              imgSrc: "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
            {
              id: 'c_plus_3',
              name: 'Become C++ Monster',
              status: "Recent",
              saleAmount: "0",
              imgSrc: "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
          ]
        },

        {
          id: 'c#',
          name: 'C# Courses',
          imgUrl: "https://www.infologs.in/img/projects/c-sharp-tutorial.jpg",
          courses: [
            {
              id: 'c_sharp_1',
              name: 'Learn C#',
              status: "Sale",
              saleAmount: "10",
              imgSrc: "https://res.cloudinary.com/dz5ppacuo/image/upload/v1466341001/csharp-min_buiizq.png",
              instructor: "Eng. Mohamed Eid",
              price: "90$"
            },
            {
              id: 'c_sharp_2',
              name: 'Master C#',
              status: "Bestseller",
              saleAmount: "0",
              imgSrc: "https://res.cloudinary.com/dz5ppacuo/image/upload/v1466341001/csharp-min_buiizq.png",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
            {
              id: 'c_sharp_3',
              name: 'Become C# Monster',
              status: "Recent",
              saleAmount: "0",
              imgSrc: "https://res.cloudinary.com/dz5ppacuo/image/upload/v1466341001/csharp-min_buiizq.png",
              instructor: "Eng. Mohamed Eid",
              price: "200$"
            },
          ]
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  modules: {}
});
