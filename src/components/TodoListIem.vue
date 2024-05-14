<template>
    <span class="todo-list-item" :class="{ completed: completed }">{{ title }}</span>
</template>

<script setup>
    const props = defineProps({
        userId: {
            type: Number,
            default: 0
        },
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false
        }
    })
</script>

<style scoped>
.todo-list-item {
    display: block;
    margin-bottom: 0.2rem;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    font-weight: 500;
}
.completed {
    font-weight: normal;
    text-decoration: line-through
}
</style>