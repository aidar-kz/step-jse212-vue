<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
import MyTransition from '@/components/MyTransition.vue';

const state = ref({
  show1: true,
})


// called before the element is inserted into the DOM.
// use this to set the "enter-from" state of the element
function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}

// called one frame after the element is inserted.
// use this to start the entering animation.
function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  // done()
}

// called when the enter transition has finished.
function onAfterEnter(el) {
  console.log('onAfterEnter()');
}
function onEnterCancelled(el) {
  console.log('onEnterCancelled()');
}

// called before the leave hook.
// Most of the time, you should just use the leave hook
function onBeforeLeave(el) {
  console.log('onBeforeLeave()');
}

// called when the leave transition starts.
// use this to start the leaving animation.
function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
  // console.log('onLeave()');
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  // done()
}

// called when the leave transition has finished and the
// element has been removed from the DOM.
function onAfterLeave(el) {
  console.log('onAfterLeave()');
}

// only available with v-show transitions
function onLeaveCancelled(el) {
  console.log('onLeaveCancelled()');
}
</script>

<template>
  <div class="container p-5">

    <!-- Named Transitions -->
    <section v-if="false">
      <h6>Named Transitions</h6>

      <button class="btn btn-primary" @click="state.show1 = !state.show1">Toggle</button>

      <Transition name="fade" appear>
        <div v-if="state.show1" class="my-class">
          <h1>Привет</h1>
          <h1>Привет</h1>
        </div>
      </Transition>
    </section>

    <div class="my-4" />

    <!-- CSS Transitions -->
    <section v-if="false">
      <h6>CSS Transitions</h6>

      <button class="btn btn-primary" @click="state.show2 = !state.show2">Toggle Slide + Fade</button>

      <Transition name="slide-fade">
        <div v-if="state.show2">
          <h1>Привет</h1>
          <h1>Привет</h1>
        </div>
      </Transition>
    </section>

    <div class="my-4" />

    <!-- CSS Animations -->
    <section v-if="false">
      <h6>CSS Animations</h6>

      <button class="btn btn-primary" @click="state.show3 = !state.show3">Toggle</button>

      <Transition name="bounce">
        <div v-if="state.show3">
          <h1>Привет</h1>
          <h1>Hello here is some bouncy text!</h1>
        </div>
      </Transition>
    </section>

    <div class="my-4" />

    <!-- Custom Transition Classes -->
    <section v-if="false">
      <h6>Custom Transition Classes</h6>

      <button class="btn btn-primary" @click="state.show4 = !state.show4">Toggle</button>

      <Transition name="custom-classes" enter-active-class="animate__animated animate__wobble"
        leave-active-class="animate__animated animate__bounceOutRight">
        <div v-if="state.show4">
          <h1>Привет</h1>
          <h1>Используем кастомные классы</h1>
        </div>
      </Transition>
    </section>

    <div class="my-4" />

    <!-- Nested Transitions and Explicit Transition Durations -->
    <section v-if="false">
      <h6>Nested Transitions and Explicit Transition Durations</h6>

      <button class="btn btn-primary" @click="state.show5 = !state.show5">Toggle</button>

      <Transition name="nested" :duration="{ enter: 500, leave: 800 }">
        <div v-if="state.show5" class="outer">
          <h1 class="inner">Привет</h1>
        </div>
      </Transition>
    </section>

    <div class="my-4" />

    <!-- JavaScript Hooks -->
    <section v-if="false">
      <h6>JavaScript Hooks</h6>

      <button class="btn btn-primary" @click="state.show6 = !state.show6">Toggle</button>

      <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
        @enter-cancelled="onEnterCancelled" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave"
        @leave-cancelled="onLeaveCancelled">
        <div v-if="state.show6">
          <h1>Привет</h1>
        </div>
      </Transition>
    </section>

    <div class="my-4" />

    <!-- Reusable Transitions -->
    <section v-if="false">
      <h6>Reusable Transitions</h6>

      <button class="btn btn-primary" @click="state.show7 = !state.show7">Toggle</button>

      <MyTransition>
        <div v-if="state.show7">
          <h1>Привет</h1>
        </div>
      </MyTransition>
    </section>

  </div>
</template>


<style lang="scss" scoped>
.my-class {
  opacity: 0.5;
}



// Named Transitions

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



/* 
  CSS Transitions

  Enter and leave animations can use different durations and timing functions.
*/

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}



// CSS Animation

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>

<style scoped>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
    Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>

<style>
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>