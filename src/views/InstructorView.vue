<template>
    <div >
        <div class="row thumbnail" @mouseover="david = true" @mouseleave="david = false">
            <img src="../../images/everton_david.jpg" alt="">
            <div class="info">
                <h1>David Everton</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam, iure cupiditate ex rerum sint fugit qui ad autem odio, repellat debitis! Repudiandae, commodi natus quo laborum totam non consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae nulla dignissimos doloremque et quidem possimus eligendi repellendus placeat aspernatur! Et obcaecati eveniet doloremque consequuntur dolorem suscipit error delectus excepturi!</p>
                <div v-show="david">
                    <p>contact test</p>
                </div>
            </div>
        </div>
        <div class="row thumbnail" @mouseover="nate = true" @mouseleave="nate = false">
            <img src="../../images/hardy_nathan.jpg" alt="">
            <div class="info">
                <h1>Nate Hardy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam, iure cupiditate ex rerum sint fugit qui ad autem odio, repellat debitis! Repudiandae, commodi natus quo laborum totam non consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae nulla dignissimos doloremque et quidem possimus eligendi repellendus placeat aspernatur! Et obcaecati eveniet doloremque consequuntur dolorem suscipit error delectus excepturi!</p>
                <div v-show="nate">
                    <p>contact test</p>
                </div>
            </div>
        </div>
        <div class="row thumbnail" @mouseover="shawn = true" @mouseleave="shawn = false">
            <img src="../../images/shawn.jpg" alt="">
            <div class="info">
                <h1>Shawn Porter</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam, iure cupiditate ex rerum sint fugit qui ad autem odio, repellat debitis! Repudiandae, commodi natus quo laborum totam non consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae nulla dignissimos doloremque et quidem possimus eligendi repellendus placeat aspernatur! Et obcaecati eveniet doloremque consequuntur dolorem suscipit error delectus excepturi!</p>
                <div v-show="shawn">
                    <p>contact test</p>
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
     width: 50%;
     margin: 2% auto;
     border: 3px solid red;
     border-radius: 1%;
 }
 .info{
     margin: 0 auto;
     color: white;
 }
 h1{
     text-decoration: underline;
 }
 .thumbnail:hover{
     width: 55%;
 }
</style>