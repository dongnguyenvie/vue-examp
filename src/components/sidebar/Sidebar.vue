<template>
    <div>
        <nav class="sidebar">
            <ul>
                <li 
                    v-for="(el, index) in 10" :key="index">
                    <a href="#">Lorem Ipsum {{index}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
