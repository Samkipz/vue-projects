<template>
    <div class="centered">
        <assignments></assignments>
    </div>
</template>

<script>
import Assignments from "./components/Assignments.vue";

export default {
    name: 'App',
    components: {
        Assignments
    }
}
</script>

<style lang="scss" scoped>
// .centered {
//     border-radius: 10px;
//     padding: 20px;
//     position: absolute;
//     top: 50vh;
//     left: 50vw;
//     background-color: rgba(215, 188, 67, 0.759);
// }
</style>