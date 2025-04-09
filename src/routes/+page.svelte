<script>
    let email = '';
    let submitted = false;
  
    async function handleSubmit(e) {
    if (email) {
        try {
        const response = await fetch('/api/correo', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo: email })
        });

        if (response.ok) {
            submitted = true;
            email = '';
        } else {
            console.error('Error al enviar el correo:', await response.text());
        }
        } catch (error) {
        console.error('Error de red:', error);
        }
    }
    }

  </script>
  
  <svelte:head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Source+Sans+3&display=swap"
      rel="stylesheet"
    />
  </svelte:head>
  
  <div class="bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
    <div class="text-center" style="max-width: 600px;">
      <h1 class="display-4 mb-3 title">Archivo de memoria en construcción</h1>
      <p class="lead mb-4 fw-light">
        No podemos olvidar lo que no se debe olvidar.
      </p>
  
      {#if submitted}
        <div class="alert alert-success" role="alert">
          Gracias. Te notificaremos cuando estemos en línea.
        </div>
      {:else}
      <form on:submit|preventDefault={handleSubmit} class="w-100">
        <div class="d-flex flex-column flex-sm-row gap-2 mb-3 shadow-sm">
          <input
            type="email"
            bind:value={email}
            class="form-control email-input"
            placeholder="tu@email.com"
            required
          />
          <button class="btn btn-outline-light" type="submit">
            Notificarme cuando esté listo
          </button>
        </div>
      </form>
      {/if}
  
      <p class="small text-muted mt-4">
        Sin spam. Solo memoria.
      </p>
    </div>
  </div>
  
  <style>
    .title {
      font-family: 'Playfair Display', serif;
      letter-spacing: 1px;
    }
  
    .lead {
      font-family: 'Source Sans 3', sans-serif;
      font-size: 1.1rem;
      color: #ccc;
    }
  
    .email-input {
      background-color: #2c2c2c;
      border: 1px solid #555;
      color: white;
    }
  
    .email-input::placeholder {
      color: #aaa;
    }
  
    button.btn {
      border-color: #888;
      color: #eee;
    }
  
    button.btn:hover {
      background-color: #444;
    }
  
    .alert-success {
      background-color: #234c2c;
      border-color: #1e3f26;
      color: #cdeac0;
    }
  </style>
  