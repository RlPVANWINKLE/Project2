<template>
    <div>
        <div class="row">
          <div class="col" style="margin: 1% auto; 2%">
            <h2>Common links</h2>
            <ul>
              <li class="common"><router-link to="/">Home</router-link></li>
              <li class="common"><a href="">Ogden Weber Tech Home</a></li>
              <li class="common"><a href="">Campus Security</a></li>
              <li class="common"><a href="">Contact Ogden Weber Tech Colleg</a></li>
            </ul>
            
            
          </div>
          <div class="col">
            <img src="../../images/otech.jpg" class="otech">
            <h3>Ogden Weber Tech College</h3>
            <p>200 N Washington Blvd</p>
            <p>Ogden, Utah 84404</p>
            <p>801-627-8300</p>
          </div>
          <div class="col">
            <h2>Connect with us</h2>
            <ul>
              <li class="social"> <a href="https://www.facebook.com/OgdenWeberTech/"><img src="../../images/fb.png" alt="">Facebook</a> </li>
              <li class="social"> <a href="https://www.youtube.com/user/OgdenWeberTech"><img src="../../images/YT.png" alt="">YouTube</a> </li>
              <li class="social"> <a href="https://www.instagram.com/OgdenWeberTech/"><img src="../../images/IG.png" alt="">Instagram</a> </li>
              <li class="social"> <a href="https://twitter.com/OgdenWeberTech"><img src="../../images/twt.png" alt="">Twitter</a> </li>
            </ul>
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
  border-top: 1px solid white;
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
.otech{
  height: 30%;
  margin-top: 4%;
  
}
li{
  list-style: none;
}
li .otech{
  width: 5%;
  margin-right: 2%;
  border-radius:0%;
}
ul .common{
  margin-left: 32%;
}
.common{
  margin: 3%;
  text-align: start;
}
.social{
  margin-left: 32%;
  text-align: start;
  margin-bottom: 2%;
}
.social a img{
  width: 10%;
  margin-right: 5%;
  margin-top: 10px;
}
.social a{
  font-weight: bold;
}

</style>