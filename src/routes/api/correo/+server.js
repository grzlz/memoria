export async function POST({ request }) {
  const data = await request.json();
  
  console.log(data);

  const response = fetch('http://18.227.26.255:8000/agregarCorreo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })


  return new Response(JSON.stringify({ message: 'Correo enviado exitosamente' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


