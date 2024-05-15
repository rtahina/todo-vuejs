<script setup>
    import { ref } from 'vue';
    import { useToDoStore } from "@/Stores/useToDoStore";

    const newTodoItem = ref('');
    const emit = defineEmits(['newitem']);
    const store = useToDoStore();

    const addNewItem = () =>{
        const tempTitle = newTodoItem.value; 
        store.addTodo(tempTitle);
        console.log('Add on form');
        store.isNewItem = !store.isNewItem;
        newTodoItem.value = '';
    }
</script>

<template>
    <form @submit.prevent="">
        <input type="text" @keyup.enter="addNewItem" v-model="newTodoItem" />
        <button @click="addNewItem">Add</button>
    </form>
</template>

<style scoped>
    form {
        margin: 1rem auto;
        display: flex;
        flex-direction: row;
    }
    input {
        flex: 1;
    }
</style>