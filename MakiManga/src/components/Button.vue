<template>
    <button>
        <slot/>
    </button>
</template>

<style scoped lang="scss">
    button {
        background-color: #5FC2BA;
        color: white;
        font-family: 'Bebas Neue', display;
        text-align: center;
        padding: 10px 15px;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;

        &:hover {
          background-color: darken(#5FC2BA, 10);
        }
    }
</style>