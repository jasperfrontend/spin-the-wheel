<template>
  <header>
    <div class="alert">
      <h1 id="spin-the-wheel-song-requests">Spin The Wheel Song Requests</h1>
      <h2 id="by-radiojasper-https-twitch-tv-radiojasper-">
        By <a href="https://twitch.tv/RadioJasper">RadioJasper</a>
      </h2>
    </div>
  </header>
  <main class="spaced">
    <p class="big">
      Spin The Wheel Song Requests is a gameshow hosted by RadioJasper on Twitch. The goal
      of this music-based game is to bring people together and increase community spirit
      by tightly integrating a traditional song requests show with competitive game
      elements.
    </p>
    <h2 id="how-does-it-work-">How does it work?</h2>
    <p>
      The core functionality are 1) a
      <a href="https://wheelofnames.com/">Wheel of Names</a> with either music
      <a href="https://bit.ly/3FwFfVi">categories &amp; genres</a>,
      <a href="https://bit.ly/3Fh4E5g">artists</a> or
      <a href="https://bit.ly/3qqrf9l">nouns</a> on it and 2) a list of players in a
      waiting list. Every round the two people on top of the list will compete against
      each other. Winner stays on and competes the next round against the next person on
      the list.
    </p>
    <h2 id="start-of-the-round">Start of the round</h2>
    <p>
      Before the start of the round, the 2 players are called out on stream and mentioned
      in chat, to verify their participation this round. When the confirmed their
      participation, they&#39;re added to the top of the screen.
    </p>
    <p>
      <img
        src="https://jasper.monster/sharex/firefox_PDLPQGUUd9.png"
        alt="Active players this round"
      />
      The active players for this round
    </p>
    <h2 id="the-wheel-spin">The Wheel Spin</h2>
    <p>
      When both players are added to the screen, the wheel will show on screen and starts
      spinning. The result of the spin is then also added on top of the screen, below the
      2 active players.
    </p>
    <p>
      <img
        src="https://jasper.monster/sharex/firefox_oYoai6uY3K.png"
        alt="The wheel is on screen"
      />
      The wheel is on screen
    </p>
    <h2 id="the-result-and-song-selection">The result and song selection</h2>
    <p>
      If for example the wheel spin has &quot;hard rock&quot; as result, the 2 players
      each can enter their song request that matches this result best by typing
      <code>!sr</code> and then either a YouTube link or an artist and title, like
      <code>!sr https://www.youtube.com/watch?v=4S_vclBlGZo</code> or
      <code>!sr Lady Gaga Born This Way</code>. The songs will automatically start playing
      in the video player on screen.
    </p>
    <p>
      <img
        src="https://jasper.monster/sharex/firefox_hbDnwB8LuW.png"
        alt="The video player on screen"
      />
      The video player on screen
    </p>
    <h2 id="voting-and-winner-selection">Voting and winner selection</h2>
    <p>
      Somewhere during the 2nd song of the current round, a Twitch poll will appear above
      chat where viewers can vote for the best song of the round. The winner of the poll
      is the winner of the round!
    </p>
    <h2 id="more-information">More information</h2>
    <p>
      Type <code>!wheel</code> in chat to see the wheels being used during these games.
      Type <code>!spin</code> for more information on how to participate!
    </p>
    <h2 id="good-luck-">Good luck!</h2>
    <p>Have fun!</p>

    <p>
      Go check RadioJasper out on
      <a href="https://twitch.tv/radiojasper" target="_blank">Twitch</a>!
    </p>
  </main>
</template>

<style scoped>
main {
  max-width: 65em;
}
main .big {
  font-size: 120%;
}
main p {
  margin-bottom: 2em;
}
</style>
