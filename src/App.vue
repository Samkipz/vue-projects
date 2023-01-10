<template>
    <h1> {{ Topic }}</h1>
    <p>Typed text: {{ text }}</p>
    <input type="text" ref="name" v-model="text">
    <div></div>
    <button @click="handleClick"> buttonClick </button>

    <br>
    <div v-if="showBooks">
        <h5><u>Click on a book to hide</u></h5>
        <ul>
            <li v-for="(book, index) in showBooks" v-bind:key="index" :class="{ fav: book.isFav }"
                @click="toggleFav(book)">
                <h3>{{ book.title }}</h3>
                <p> {{ book.author }}</p>
            </li>
        </ul>
    </div>

    <button @click="toggleShowBooks">
        <span v-if="showBooks">Hide All Books</span>
        <span v-else>Show Books</span>
    </button>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            Topic: 'My first vue application',
            text: '',
            url: 'http://books.toscrape.com/',
            books: [
                { title: 'A thousand splendid sunset', author: 'Patrick big', isFav: true },
                { title: 'Meeting Kwamboka', author: 'Juma Konnan', isFav: true },
                { title: 'Many ways no way', author: 'Samkipz', isFav: false },
            ]
        }
    },
    methods: {
        handleClick() {
            alert("Button clicked!")
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        showBooks() {
            return this.books.filter((item) => item.isFav)
        }
    }
}
</script>