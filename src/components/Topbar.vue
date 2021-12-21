<template>
    <div class="topbar">
        <div class="logo">
            <a href="/"><img src="@/assets/wof01.png" alt="Spin The Wheel"></a>
        </div>
        <div class="site-name">
            <h2>Spin The Wheel</h2>
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