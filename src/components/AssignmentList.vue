<template>
    <section v-show="assignments.length" class="mt-8">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span> ({{ assignments.length }})</span>
        </h2>

        <assignment-tags v-model:currentTag="currentTag" :initial-tags="assignments.map(a => a.tag)"></assignment-tags>

        <ul class="border border-gray-600 divide-y divide-gray-600">
            <assignment-item v-for="assignment in filteredAssignments" :key="assignment.id"
                :assignment="assignment"></assignment-item>
        </ul>
    </section>
</template>

<script>

import AssignmentItem from './AssignmentItem.vue';
import AssignmentTags from './AssignmentTags.vue';

export default {
    data() {
        return {
            currentTag: 'all'
        }
    },
    components: {
        AssignmentItem,
        AssignmentTags
    },
    props: {
        assignments: Array,
        title: String,
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },


    }
}

</script>