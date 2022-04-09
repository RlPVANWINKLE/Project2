<template>
    <div>
        <h1 style="color:white; margin-top:3%">Please select a job type</h1>
         <div class="row">
            <p @click="typechng('Full Time');" class="type">Full-Time</p>
            <p @click="typechng('Part Time');" class="type">Part-Time</p>
            <p @click="typechng('Intern');" class="type">Internship</p>
        </div>
        <div v-for="(job, index) in jobs" :key="index" class="container">
            <div v-show="type == job.type" class="thumbnail">
                <h1 class="title">{{job.title}}</h1>
                <p v-show="desc" class="desc" id="tab">{{job.view}}</p>
                <div class="row-2">
                    <p class="tab" id="des" @click="descr(index)" >Description</p>
                    <p class="tab" id="requi" @click="req(index)">Requirements</p>
                    <p class="tab" id="dutes" @click="duty(index)">Duties</p>
                    <p class="tab" id="sal" @click="salaries(index)">Salary</p>
                </div>                 
                
            </div>           
        </div>
    </div>
</template>
<script>
import jobs from '../components/PossibleJobs.js'
export default {
    components:{
        
    },
    data(){
        return{
            jobs: jobs,
            type: 'Full Time',
            desc: true,
            description:''
        }
    },
    methods:{
        typechng(typ){
            this.type = typ;
        },
        req(index){
            this.jobs[index].view = jobs[index].requirements;
        },
        descr( index){
            this.jobs[index].view = jobs[index].description;
        },
        duty(index){
            this.jobs[index].view = jobs[index].duties;
        },
        salaries(index){
            this.jobs[index].view = jobs[index].salary;
            
        }
    }
}
</script>
<style scoped>
.thumbnail{
    width: 100%;
    border: 3px solid black;
}
.container{
    width: 45%;
    margin: 2% auto;
    height: 50%;
    
    
}
.row{
    display: flex;
    background-color: white;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    margin-top: 3%;
    margin-bottom: 3%;
    font-weight: bold;
}
.row-2{
    display: flex;
    background-color:rgb(150, 0, 0);
    margin:0% auto;
     border-top: 3px solid black;
}
.row-2:hover{
    cursor: pointer;
    
}
.type{
    margin: 0% auto;
    padding: 1% 10%;
}
.tab{
    margin: 0% auto;
    padding: 2% 8%;
    color: white;
}
.tab:hover{
    background-color: white;
    color: black;
    border-left: 3px solid black;
    border-right: 3px solid black;
}
.type:hover{
    background-color: rgb(150, 0, 0);
    color: white;
    cursor: pointer; 
    border-left: 3px solid black;
    border-right: 3px solid black;   
}
.desc{
    background-color: white;
    padding: 2%;
    margin: 0% auto;
    height: 20vh;
}
.title{
    background-color: white;
    padding: 2%;
    padding-bottom: 0%;
    margin: 0% auto;
}
</style>