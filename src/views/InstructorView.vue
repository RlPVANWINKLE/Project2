<template>
    <div >
        <transition name="fade">
            <div class="row thumbnail" @mouseover="david = true" @mouseleave="david = false">
            <img src="../../images/everton_david.jpg" alt="">
            <div class="info">
                <h1>David Everton</h1>
                <p>David Everton is the program director. He is the one behind the creation of software development. He has been working for Ogden Weber Tech college for over 10 years now and has a great attitude to help our future and current students succeed. David's Office is always open to questions and a challenge.</p>
                <div class="contact">
                    <p>DAVID EVERTON:</p>
                    <p>Email: David.Everton@otech.edu</p>
                    <p>Office hours: M-F 8:00 AM - 3:00 PM</p>
                </div>
            </div>
        </div>
        </transition>
        
        <div class="row thumbnail" @mouseover="nate = true" @mouseleave="nate = false">
            <img src="../../images/hardy_nathan.jpg" alt="">
            <div class="info">
                <h1>Nate Hardy</h1>
                <p>Nate is our Day instructor. Nate was at one point a student within the Software development program at Ogden Weber Tech college. He is Very patient. Nate is knowledgable with the concepts and details of programming. Nate will always get to the point and make sure you understand what is happening before allowing you to continue on.</p>
                <div class="contact">
                    <p>NATE HARDY:</p>
                    <p>Email: Nathan.Hardy@otech.edu</p>
                    <p>Office hours: M-F 8:00 AM - 3:00 PM</p>
                </div>
            </div>
        </div>
        <div class="row thumbnail" @mouseover="shawn = true" @mouseleave="shawn = false">
            <img src="../../images/shawn.jpg" alt="">
            <div class="info">
                <h1>Shawn Porter</h1>
                <p>Shawn is our night instructor. Shawn is very patient and open about ways to improve your code. He is very knowledgable in coding. Shawn is always willing to give a quick refresher or lesson in order to shopw you how to do sonmething. He will always be there to help you out.</p>
                <div class="contact">
                    <p>Shawn Porter:</p>
                    <p>Email: Shawn.Porter@otech.edu</p>
                    <p>Office hours: M-TH 5:00 PM - 8:00 PM</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return{
            david: false,
            nate:false,
            shawn:false
        }
    }
}
</script>


<style scoped>
.row{
   display: flex;
 }
 .col{
   flex: 50%;
 }
 .thumbnail{
     background-color: rgb(61, 61, 61);
     position:relative;
     border: 3px solid white;
 }
 .info{
     color: white;
 }
 h1{
     text-decoration: underline;
 }
 .thumbnail:hover{
     border: 3px solid red;
 }
 .contact{
     background-color: rgb(123,123,123); 
 }
 @media screen and (min-width: 900px) {
     .contact{
        margin: 2% 10%; 
        padding:1%;
        font-size: 85%;
    }
    .info{
        margin: 0 auto;
        width: 80%;
    }
     .thumbnail{
        padding: 1%;
        width: 65%;
        height: 40vh;
        margin: 2% auto;
    }
     img{
     width: 35%;
    }
    p{
        width: 90%;
        font-size: 130%;
        margin: 0 auto;
    }
 }
  @media screen and (max-width: 1100px) {
        .contact{
        margin: 2% 10%; 
        padding:1%
    }
    .info{
        margin: 0 auto;
        width: 70%;
    }
     .thumbnail{
        padding: 1%;
        width: 65%;
        height: 40vh;
        margin: 2% auto;
    }
     img{
     width: 35%;
    }
    p{
        width: 90%;
        font-size: 120%;
        margin: 0 auto;
    }
  }
    @media screen and (max-width: 900px) {
        .contact{
      display: none;
    }
    .info{
        margin: 0 auto;
        width: 70%;
    }
     .thumbnail{
        padding: 1%;
        width: 80%;
        height: 30vh;
        margin: 2% auto;
    }
     img{
     width: 35%;
    }
    p{
        width: 90%;
        font-size: 90%;
        margin: 0 auto;
    }
 }
     @media screen and (max-width: 600px) {
        .contact{
      display: none;
    }
    .info{
        margin: 0 auto;
        width: 70%;
    }
     .thumbnail{
        display: inline-flex;
        flex-wrap: wrap;
        width: 50%;
        height: 40vh;
        margin: 2% auto;
    }
     img{
     width: 50%;
     margin: 0 auto;
    }
    p{
        width: 100%;
        font-size: 75%;
    }
    .info h1{
        font-size: 100%;
    }
 }
</style>