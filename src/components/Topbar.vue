<template>
    <div class="topbar">
        <div class="logo">
            <router-link to="/"><img src="@/assets/wof01.png" alt="Spin The Wheel"></router-link>
        </div>
        <div class="site-name">
            <h1>Spin The Wheel</h1>
            <router-link to="/">Current Artists</router-link> | <router-link to="/about">About</router-link>
        </div>
        <div class="twitch-link">
            <a href="https://twitch.tv/radiojasper" target="_blank">By RadioJasper</a>
        </div>
    </div>
</template>

<style scoped>
.topbar {
    background: #021f21;
    color: rgb(246, 244, 255);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
.topbar .logo {
    flex-basis: 5vw;
}
.logo img {
    width: 60px;
    display: block;
    padding: 8px;
}
.site-name {
    flex-basis: 55vw;
    padding: 6px 0 0;
}
.site-name h1 {
    font-size: 24px;
    line-height: 18px;
}
.site-name a {
    color: #FFE07D;
    font-size: 80%;
    text-decoration: none;
}
.twitch-link {
    flex-basis: 40vw;
    text-align: right;
    padding-right: 1em;
}
.twitch-link a {
    color: #fff;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    .topbar {
        font-size: 80%;
    }
}
</style>