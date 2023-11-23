<template>
    <button>
        <slot/>
    </button>
</template>

<style scoped lang="scss">
    button {
        background-color: $tertiary-color;
        color: $secondary-color;
        font-family: 'Bebas Neue', display;
        text-align: center;
        padding: 10px 15px;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;

        &:hover {
          background-color: darken($tertiary-color, 10);
        }
    }
</style>