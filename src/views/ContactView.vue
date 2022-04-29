<template>
  <div class="container">
    <form action="action_page.php">

      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name..">

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">

      <label for="subject">Tell us what you need</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

      <input type="submit" value="Submit">

    </form>
</div>
</template>

 <style scoped>
   input[type=text], select, textarea {
  width: 100%; 
  padding: 12px; 
  border: 1px solid #ccc; 
  border-radius: 4px;
  box-sizing: border-box; 
  margin-top: 6px;
  margin-bottom: 16px; 
  resize: vertical; 
  font-size: 15px
}
input[type=submit] {
  background-color: red;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: yellow;
  color: black;
}
.container {
  background-color: #c8c8c8;
  padding: 20px;
  width: 70%;
  margin: 5% auto;
  border: 3px solid black;
}
label{
  float: left;
  font-weight: bolder;
  font-size: 20px;
}



 </style>