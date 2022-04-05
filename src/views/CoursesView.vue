<template>
    <ModalDef @close="toggleModal(); reqshow=false ; courseshow=false; desshow=true" :modalActive="modalActive">
        <div class="modal-content">
            <h1 class="moheader">{{header}}</h1>
            <div class="h2_row">
                <h2 @click="desshow = !desshow; courseshow=false;reqshow=false">Description</h2>
                <h2 @click="reqshow = !reqshow; courseshow=false; desshow=false">Requirements/supplies</h2>
                <h2 @click="courseshow = !courseshow; desshow=false;reqshow=false ">Course Overview</h2>
                
            </div>
            <div class="con_col">
                <p v-show="desshow">{{description}}</p>                
                <p v-show="reqshow">hello world</p>
                <p v-show="courseshow">HELLOWORLD</p>
            </div>
            
        </div>
    </ModalDef>
    <div class="bg">
        <div>
            <h1>Software Technology</h1>
            <div class="chart">
                <div class="row top"> <p class="col prog">Program #</p><p class="col prog">Program Name</p><p class="col hours">Hours</p> <p class="col mod">Modules</p> <p class="col pre">Prerequisites</p></div>
                <div v-for="(item, index) in items" :key="index" class="row">
                    <p class="col light">{{item.name}}</p> 
                    <p @click="toggleModal(); modalcontent(item)" class="col beige">{{item.title}}</p>
                    <p class="col light">{{item.hours}}</p>
                    <p class="col dark">{{item.modules}}</p>
                    <p class="col light">{{item.prereq}}</p>
                </div>
                <div class="row bottom"> <p class="col "></p><p class="col "></p><p class="col hour">960.00</p> <p class="col "></p> <p class="col "></p></div>
            </div>     
        </div>       
    </div>
    

</template>
<script>
import Modal from '../components/ModalDef.vue'
import {ref} from 'vue'
import items from '../components/ClassData.js'
export default {
    name:"CourseOverview",
    components:{
        ModalDef: Modal,
    },
    setup(){
        const modalActive = ref(false);
        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        }
        return {modalActive, toggleModal,};
    },
    methods:{
        modalcontent(item){
            this.header = item.title;
            this.description=item.desc;
        }
    },
    data(){
        return{
            items: items,
            header: "",
            description: "",
            desshow: true,
            reqshow: false,
            courseshow: false,
        }
    },
}
</script>
<style scoped>
 .row{
   display: flex;
   width: 75%;
   margin: 0% auto;
 }
 .col{
   flex: 50%;
   border: 1px solid black;
 }
 h1{
     color: white;
     text-decoration: underline;
     background-color: rgb(61, 61, 61);
     margin: 0% auto;
     padding: 2%;
 }
 p{
     margin: 0% auto;
     padding: 1% 0%;
     color: black;
 }
 .chart{
     margin: 3% auto 3%;
 }
 .top{
     background-color: red;
     text-decoration: underline;
     font-size: 150%;
 } 
 .bottom{
     background-color: rgb(61, 61, 61);
     text-decoration: none;
     font-size: 150%;
     color: white;
     margin-top: 0;
 } 
 .dark-1{
     background-color: rgb(36, 36, 36);
 }
 .light{
     background-color: rgb(218, 218, 218);
 }
.hour{
    background-color: rgb(123, 123, 123);
}
.dark{
    background-color: rgb(140, 140, 140);
}
/* .modal-content{
    display: flex;
    flex-direction: column;  
} */
.h2_row{
    display: flex;
    width: 100%;
    margin: 0% auto; 
}
h2{
    margin: 0% auto 0%;
    color: black;
    background-color: rgb(180, 180, 180);
    padding: 3%;
    width: 27%;
}
h2:hover{
    cursor: pointer;
    text-decoration: underline;
}
h2:active{
    background-color: white;
    color: black;
}
.con_col{
    display: flex;
    background-color: rgb(180, 180, 180);
    margin: 0% auto;
    padding: 3%;
    border: 1px solid black;
    
}
.con_col p{
    color: black;
    width: 80%;
    font-size: 25px;
}
h1.moheader{
    background-color: none;
    margin: 2% 10%;
}
.beige{
    background-color: beige;
}
.beige:hover{
    background-color: rgb(123, 123, 123);
    text-decoration: underline;
    color: white;
    cursor: pointer;
}
.all{
    border: 5px solid black;
    
}
.bg{
    background-color: white;
    height: 90vh;
}

</style>