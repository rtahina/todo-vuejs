<script setup>
    const props = defineProps({
        message: {
            type: String,
            default: 'There was an error'
        }
    });
</script>

<template>
    <div class="error">{{ props.message }}</div>
</template>

<style scoped>
    .error {
        border: 2px solid red;
        padding: 2rem;
        text-align: center;
        margin:1rem;
        color: red;
    }
</style>