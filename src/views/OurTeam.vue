<template>
  <div class="our-team">
    <team-work></team-work>
  </div>
</template>

<script>
import TeamWork from "../components/TeamWork.vue";

export default {
  components: {
    "team-work": TeamWork
  },

  provide: {
    members: [
      {
        id: "1",
        imgUrl:
          "http://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        name: "Mohamed Eid",
        role: "Back-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#"
      },
      {
        id: "2",
        imgUrl: "http://unitedthemes.com/wp-content/uploads/2018/09/team1.jpg",
        name: "Mahmoud siliman",
        role: "Front-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#"
      },
      {
        id: "3",
        imgUrl:
          "http://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2015/03/shutterstock_159780776-uai-828x828.jpg",
        name: "Mostafa Emam",
        role: "Back-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#"
      },
      {
        id: "4",
        imgUrl:
          "http://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        name: "Mohamed Eid",
        role: "Back-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#"
      },
      {
        id: "5",
        imgUrl: "http://unitedthemes.com/wp-content/uploads/2018/09/team1.jpg",
        name: "Mahmoud siliman",
        role: "Front-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#"
      },
      {
        id: "6",
        imgUrl:
          "http://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2015/03/shutterstock_159780776-uai-828x828.jpg",
        name: "Mostafa Emam",
        role: "Back-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#"
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE
.our-team {
  min-height: 80vh;
  padding-bottom: 60px;
}
</style>
