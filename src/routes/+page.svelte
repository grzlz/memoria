<script>
  import { onMount } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;

  const palabra1 = "Teuchitlán".split("");
  const palabra2 = "Ceremonia".split("");

  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updateLetters();
  }

  function updateLetters() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const dx = rect.left + rect.width / 2 - mouseX;
      const dy = rect.top + rect.height / 2 - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150;
      const force = dist < maxDist ? (1 - dist / maxDist) * 20 : 0;

      const offsetX = (dx / dist) * force;
      const offsetY = (dy / dist) * force;

      letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  }

  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="main-wrapper">
  <div class="container text-light py-5">
    <div class="row justify-content-center mb-5">
      <div class="col-md-8">
        <input
          type="text"
          class="form-control form-control-lg search-bar"
          placeholder="Buscar en la memoria..."
        />
      </div>
    </div>

    <div class="row justify-content-center align-items-center">
      <div class="col-5 text-end word-container">
        {#each palabra1 as char, i}
          <span class="letter" style="display: inline-block;">{char}</span>
        {/each}
      </div>
      <div class="col-1 text-center">
        <div class="separator"></div>
      </div>
      <div class="col-5 text-start word-container">
        {#each palabra2 as char, i}
          <span class="letter" style="display: inline-block;">{char}</span>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .main-wrapper {
    background-color: #000;
    min-height: 100vh;
    color: white;
    font-family: 'Playfair Display', serif;
    overflow: hidden;
  }

  .search-bar {
    background-color: #111;
    color: white;
    border: 1px solid #555;
    border-radius: 0;
  }

  .search-bar::placeholder {
    color: #888;
  }

  .letter {
    font-size: 2.5rem;
    transition: transform 0.15s ease-out;
    will-change: transform;
    pointer-events: none;
  }

  .separator {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    margin: 1rem auto;
  }
</style>
