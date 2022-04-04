<template>
    <div>
        <div class="row">
          <div class="col">
            <h2>Common links</h2>
            <router-link to="/">Home</router-link>
          </div>
          <div class="col">
            <img src="../../images/otech.jpg" alt="">
            <h3>Ogden Weber Tech College</h3>
            <p>200 N Washington Blvd</p>
            <p>Ogden, Utah 84404</p>
            <p>801-627-8300</p>
          </div>
          <div class="col">
            <h2>Common links</h2>
            <router-link to="/">Home</router-link>
          </div>          
        </div>
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/courses">Courses</router-link> 
            <router-link to="/instructors">Your Instructors</router-link> 
            <router-link to="/contact">Contact us</router-link> 
        </nav>
    </div>
</template>

<style scoped>
div{
    position: relative;
    bottom: 0;
    width: 100%;
}
nav {
  margin: 0%;
  padding: 1%;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 1% 5%;
  margin: 0% 1%;
}

 nav a:hover{
   background-color: white;
   color: black;
 }
.row{
  position: relative;
  bottom: 0%;
  width: 100%;
   display: flex;
   background-color: rgb(61, 61, 61);
   height: 40vh;
   
   
 }
 .col{
   flex: 50%;
   color: white;
 }
 .col a{
   color: white;
 }
img{
  height: 30%;
  margin-top: 4%;
  border-radius:50%
}
</style>