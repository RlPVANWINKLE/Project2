<template>
  <transistion name="modal-animation">
      <div v-show="modalActive" class="modal">
          <transition name="modal-animation-inner">
              <div v-show="modalActive" class="modal-inner">
                  <p class="icon" @click="close">X</p>
                  <!-- modal content -->
                  <slot />
                  <!-- <button @click="close">Close</button> -->
              </div>
          </transition>
      </div>
  </transistion>
</template>

<script>
export default {
props: ["modalActive"],
setup(props, { emit }) {
    const close = () => {
        emit('close');
    }

    return {close,}
},
};
</script>

<style scoped>
.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72%;
    width: 60%;
    position: fixed;
    top: 15%;
    left: 20%;
    border: 10px solid black;
}
.modal-inner{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(123, 123, 123);
    
}
.icon{
    position: absolute;
    top: -1%;
    right: 1%;
    color: white;
    border: 2px solid white;
    border-radius: 90%;
    padding: 1%;

}
.icon:hover{
    background-color: white;
    color: black;
    cursor: pointer;
}
button:hover{
    cursor: pointer;
}
.modal-animation-enter-active,
.modal-animation-leave-active{
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-leave-to,
.modal-animation-enter-from{
    opacity: 0;
}
.modal-annimation-inner-leave-active{
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-annimation-inner-leave-active{
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-annimation-enter-from{
    opacity: 0;
    transform: scale(0.8);
}
.modal-annimation-leave-to{
    transform: scale(0.8);
}

</style>