<template>
    <header>
        <h2> {{ title }} </h2>
    </header>
    <div>
        <Cards v-for="company in companies" :businessName="company.businessName" :contact="company.contact"
            :phoneNumber="company.phoneNumber" :exportsTo="company.exportsTo" :isBooked="company.isBooked"
            :key="company.id" class="company" :class="{ companyBooked: company.isBooked }"
            @toggleBooked="company.isBooked = !company.isBooked">
            <!-- if the below slot header is not provided, the child component will resort to the fallback -->
            <template v-slot:header>
                {{ company.businessName }}
            </template>
        </Cards>
    </div>
</template>

<script>
import Cards from '../components/Cards.vue'

export default {
    name: "Home",
    data() {
        return {
            title: "Sea Food Companies in Canada",
            companies: [
                { id: 1, businessName: "3t Business Inc.", contact: "Jack Young", phoneNumber: "970-00-324-63", exportsTo: "Asia, Africa, North America", isBooked: true },
                { id: 1, businessName: "Second Company", contact: "Big King", phoneNumber: "970-00-324-63", exportsTo: "Asia, Europe, North America", isBooked: false },
            ]
        }
    },
    components: {
        Cards
    }
}
</script>

<style lang="scss">
.company {
    display: flex;
    flex-direction: column;
    background-color: rgb(183, 193, 202);
    margin: 1vmin 0;
    padding: 1vmin;
    cursor: pointer;
}

.companyBooked {
    background-color: aquamarine;
}
</style>