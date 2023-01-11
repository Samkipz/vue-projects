<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/details">Details</router-link> |
        <router-link to="/join-us">Join Us</router-link>
    </nav>
    <div class="container">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>
