<template>
  <div class="container">
    <div class="row tops">
      <div class="col item">
        <div class="row">
          <p>Full Name:</p> 
          <input type="text" name="name" id="" placeholder="John Doe">
        </div>
      </div>
      <div class="col item">
        <div class="row">
            <p>Phone Number:</p> 
            <input type="text" name="name" id="" placeholder="(999)888-7654">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col ">
        <textarea name="" id="" cols="72" rows="15" placeholder="Whats your question?" class="tb"></textarea>
      </div>
    </div>
  </div>
</template>

 <style scoped>
 .row{
    display: flex;
 }
 .col{
   flex: 50%;
 }
 .container{
   width: 50%;
   margin: 2% auto;
   background-color: black;
   padding: 2.5%;
 }

 input{
   height:3vh;
   font-size: 120%;
   margin-top: auto;
   margin-bottom: auto;
   margin-left: 2%;
 }
 textarea{
    width: 100%;
   margin: 2% auto;
 }
 p{
   color: white;
 }
 .tops{
   margin-left: 5%;
 }

 </style>