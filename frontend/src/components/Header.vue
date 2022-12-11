<template lang="pug">
#header
    .logo 
        .container
            svg.triangle(viewBox="0 0 100 100")
                polygon(points="50 15, 100 100, 0 100")
        .content Sara
    .navigation
        .navigate Home
        .navigate About
        .navigate Contact
</template>

<script lang="ts">
export default {
    
}
</script>

<style lang="scss">
#header {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    align-items: center;
    .logo {
        .container {
            position: absolute;
            left: 50%;
            transform: translateX(-50%) rotate(180deg);
            top: -18px;
            z-index: 0;
        }
        .triangle {
            height: 4em;
            z-index: 0;
        }
        .content {
            z-index: 1;
        }
        width: 10em;
        text-align: center;
        position: relative;
    }
    background-color: $orange;
    display: flex;
    height: 3em;
    position: fixed;
    top: 0;
    width: 100vw;
    .navigation {
        display: flex;
        .navigate {
            margin-right: 2em;
            border-bottom: 1px solid white;
            border-top: 1px solid white;
        }
    }
}
</style>