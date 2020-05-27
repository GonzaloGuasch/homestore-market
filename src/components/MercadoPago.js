const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'APP_USR-1388689821315510-052714-98367109079dd06e7b89eca3fe494aa6-178004482'
  });

  let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };

  mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = response.body.init_point;
  console.log(response)
}).catch(function(error){
  console.log(error);
});

<form action="/procesar-pago" method="POST">
  <script
   src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
   data-preference-id="$$id$$">
  </script>
</form>