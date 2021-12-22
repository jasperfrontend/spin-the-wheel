<template>
  <div>
    <div class="topbar">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/wof01.png" alt="Spin The Wheel" />
        </router-link>
      </div>
      <div class="site-name">
        <h1><router-link to="/">Spin The Wheel</router-link></h1>
      </div>
      <div class="twitch-link">
        <a href="https://twitch.tv/radiojasper" target="_blank">By RadioJasper</a>
      </div>
    </div>
    <div class="navbar">
      <nav>
        <ul>
          <li><router-link to="/">Current Artists</router-link></li>
          <li><router-link to="/list">List</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
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
.site-name h1 {
  font-size: 24px;
  line-height: 18px;
}
.site-name h1 a {
  color: #fff;
  text-decoration: none;
}
.site-name a {
  color: #ffe07d;
  font-size: 90%;
  padding: 5px;
  margin-right: 10px;
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

.navbar {
  background: #044247;
}
.navbar nav ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  list-style: none;
}
.navbar nav ul a {
  padding: 10px 20px;
  font-size: 80%;
  font-weight: bold;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
}
.navbar nav ul a.router-link-exact-active {
  color: #b1ffc5;
}
@media screen and (max-width: 768px) {
  .topbar {
    font-size: 80%;
  }
}
</style>
