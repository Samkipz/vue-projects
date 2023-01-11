<template>
    <div class="card">
        <header>
            <!-- <h1>This is some header</h1> -->
            <!-- Title hear -->
            <slot name="header">
                <h4>{{ businessName }}</h4>
            </slot>
        </header>
        <article>
            <!-- Body here -->
            <div @click="$emit('toggleBooked')">
                <h5> <strong> Business Name: </strong> {{ businessName }}</h5>
                <h5> <strong> Contact: </strong> {{ contact }}</h5>
                <h5> <strong> Phone Number: </strong> {{ phoneNumber }}</h5>
                <h5> <strong> Exports to: </strong> {{ exportsTo }}</h5>
            </div>
        </article>
        <footer>
            <!-- Footer here -->
        </footer>
    </div>
</template>

<script>

export default {
    name: "card-component",
    props: {
        businessName: String,
        contact: String,
        phoneNumber: String,
        exportsTo: String
    }
}
</script>

<style>

</style>