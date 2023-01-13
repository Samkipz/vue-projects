<template>
    <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
            <input placeholder="Add New Assignment" v-model="newAssignment" class="p-2" />
            <button type="submit" class="bg-white p-2 border-l"> Add </button>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        return {
            newAssignment: ''
        }
    },
    props: {
        assignments: Array
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}

</script>