<template>
    <div style="">
        <img src="../../images/logo.png" alt="" style="background-color:black; width: 20%; padding: 0% 40%">
        
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/courses">Course Overview</router-link> 
            <router-link to="/instructors">Your Instructors</router-link> 
            <router-link to="/contact">Contact us</router-link> 
            <router-link to="/graduation">Post graduation</router-link>
        </nav>
        

    </div>
</template>

<style scoped>
div{
    background-color: black;

}
img{
    margin: 2% auto;
    background-color: chartreuse;
}
nav {
  margin: 0%;
  padding: 1%;
  background-color: rgba(255, 0, 0, 0.641);
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 1.1% 5%;
  margin: 0% .50%;
}

nav a.router-link-exact-active {
  background-color: white;
  color: black;
   border-left: 3px solid black;
  border-right: 3px solid black;
}
 nav a:hover{
   background-color: white;
   color: black;
   border-left: 3px solid black;
  border-right: 3px solid black;
 }
</style>