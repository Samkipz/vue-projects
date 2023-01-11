<template>
    <div class="card">
        <header>
            <!-- Title hear -->
        </header>
        <article>
            <!-- Body here @click="$emit('enlarge-text')" -->
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