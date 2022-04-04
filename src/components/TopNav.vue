<template>
    <div>
        <img src="../../images/logo.png" alt="">
        
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/courses">Course Overview</router-link> 
            <router-link to="/instructors">Your Instructors</router-link> 
            <router-link to="/contact">Contact us</router-link> 
        </nav>
        

    </div>
</template>

<style scoped>
div{
    background-color: black;
}
img{
    margin: 0% auto;
}
nav {
  margin: 0%;
  padding: 1%;
  background-color: red;
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
}
 nav a:hover{
   background-color: white;
   color: black;
 }
</style>