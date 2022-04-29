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
 @media screen and (min-width:900px) {
  nav {
    margin: 0%;
    padding: 1%;
    background-color: red;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
  nav a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 1.2% 3%;
    margin: 0% 1%;
    
  }
  img{
    margin: 2% auto;
    background-color: chartreuse;
}
 }
 @media screen and (max-width:900px) {
  nav {
    margin: 0%;
    padding: 1%;
    background-color: red;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
  nav a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 01.5% 1%;
    margin: 0% 1%;
    font-size: 12px;
    
  }
  img{
    margin: 2% auto;
    background-color: chartreuse;
}
 }
 @media screen and (max-width:600px) {
  nav {
    margin: 0%;
    padding: 1%;
    background-color: red;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
  nav a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 2.0% 1%;
    margin: 0% 1%;
    font-size: 10px;
    
  }
  img{
    margin: 2% auto;
    background-color: chartreuse;
}
 }
</style>