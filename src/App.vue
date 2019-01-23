<template>
    <div id="app">
        <div class="row m-b-lg m-t-lg">
            <div class="col-md-8">
                <ProfileCard profileImg="require('./assets/p-ervinne.png')"/>
            </div>
        </div>
        <HelloWorld msg="This profile is under renovation"/>        
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import ProfileCard from './components/widgets/ProfileCard.vue';

    export default {
        name: 'app',
        components: {
            HelloWorld,
            ProfileCard
        },
    }
</script>

<style>
    .text-timeline-icon {
        padding-top: 4px;
    }

    .text-blue {
        font-weight: 900;
        color: #4077DE;
    }

    .text-orange {
        font-weight: 900;
        color: orange;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
