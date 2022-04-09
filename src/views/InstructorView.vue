<template>
    <div >
        <transition name="fade">
            <div class="row thumbnail" @mouseover="david = true" @mouseleave="david = false">
            <img src="../../images/everton_david.jpg" alt="">
            <div class="info">
                <h1>David Everton</h1>
                <p>David Everton is the program director. He is the one behind the creation of software development. He has been working for Ogden Weber Tech college for over 10 years now and has a great attitude to help our future and current students succeed. David's Office is always open to questions and a challenge.</p>
                <div v-show="david" class="contact">
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
                <div v-show="nate" class="contact">
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
                <div v-show="shawn" class="contact">
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
 img{
     width: 30%;
 }
 p{
     width: 100%;
     font-size: 150%
 }
 .thumbnail{
     padding: 1%;
     background-color: rgb(61, 61, 61);
     position:relative;
     width: 50%;
     height: auto;
     margin: 2% auto;
     border: 3px solid black;
     transition: width .4s;
 }
 .info{
     margin: 0 auto;
     color: white;
     width: 60%;
 }
 h1{
     text-decoration: underline;
 }
 .thumbnail:hover{
     width: 65%;
 }
 .contact{
     background-color: rgb(123,123,123); 
     margin: 2% auto; 
     padding:2%
 }
 
</style>