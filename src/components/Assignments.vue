<template>
    <section class="space-y-6">
        <AssignmentList title="In Progress" :assignments="filters.inProgress"></AssignmentList>
        <AssignmentList title="Completed" :assignments="filters.completed"></AssignmentList>
        <assignment-create @add="add"></assignment-create>
    </section>
</template>

<script>

import AssignmentList from './AssignmentList.vue';
import AssignmentCreate from './AssignmentCreate.vue';
import axios from "axios";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    data() {
        return {
            assignments: [],
            newAssignment: ''
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignments => !assignments.complete),
                completed: this.assignments.filter(assignments => assignments.complete)
            }
        }

    },

    created() {
        axios
            .get('http://localhost:3000/assignments')
            .then(response => {
                console.log(response.data)
                // data = response.data
            })
    },
    methods: {
        add(name) {
            // alert(name)
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                completed: false
            });
            this.newAssignment = '';
        }
    }
}
</script>