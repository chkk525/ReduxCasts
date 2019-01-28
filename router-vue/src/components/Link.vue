<template>
    <router-linki class="link" :to="to">{{ label }}</router-linki>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: '/'
        },
        label: {
            type: String,
            default: ''
        }
    }
}
</script>
