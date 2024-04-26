<script>
  let desktopNumber = 1;
  let removedTooltip = false;

  function changeDesktop() {
    removedTooltip = true;
    if (desktopNumber === 4) {
      desktopNumber = 1;
    } else {
      desktopNumber += 1;
    }
  }
</script>

<button
  class="container"
  on:click={changeDesktop}
  style={`z-index: ${removedTooltip ? "99" : "0"}; background-image: url(images/desktop_${desktopNumber}.png);`}
>
</button>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
  }
</style>
