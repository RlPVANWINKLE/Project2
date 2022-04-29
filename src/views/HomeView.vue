<template>
  <div class="home">
    <jumbo-tron></jumbo-tron>
    
    <div class="about">
      <h1>Software Development</h1>
      <p>Software Development is the process that Coders and programers use to build computer programs. The Software Development process has several phases and individual processes that are vital to the completion of the worlds day to day computer programs. Some think of Software Development as an additional branch to Information Technology(I.T). This is not the case, I.T focuses on physical components and system errors that occur when using computers. We as Software Developers create all the wonderful programs, apps, and websites in todays modern world. The Software Development program provides students with the opportunity to learn: sought after languages, industry used tools and environments needed to get a start in the technology field. Students will gain the necessary knowledge and skills needed to develop software in a variety of technologies including Java, HTML, CSS, and SQL. Complete your cert with a capstone project and build a professional portfolio.</p>
    </div>
    <div class="about">
      <h1>Our School</h1>
      <p>Surrounded by the scenic Wasatch Mountains, Ogden-Weber Technical College has offered hands-on technical education since 1971. The beautiful main campus and the Business Depot Ogden offer convenient schedules, competency-based learning, and training opportunities in high-demand fields. With over 300 technical-skills courses in 32 employment categories, the tech college serves over 6,000 students annually.</p>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import JumboTron from '../components/JumboTron.vue'

export default {
  name: 'HomeView',
  components: {
    JumboTron: JumboTron,
  }
}
</script>

<style scoped>

p{
  font-size: 200%;
  margin: 0% auto 5%;
  color: black;
  background-color: white;
  padding: 3%;
  width: 100%;
  border: 3px solid black;
  border-top: 0;
}
h1{
  color: white;
  text-decoration: underline;
  background-color: red;
  margin: 0% auto 0%;
  padding: 2%;
  border: 3px solid black;
}




</style>
