// Inicializa o EmailJS com sua PUBLIC_KEY
emailjs.init('MmlV5QPWGKuK5zdEV');

// Quando o formulário for enviado...
document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio tradicional do formulário (não recarrega a página)

  // Pega os valores dos inputs
  const templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    appointment_date: document.getElementById('date').value,
    appointment_time: document.getElementById('time').value,
    notes: document.getElementById('notes').value
  };

  // Envia o email usando o EmailJS
  emailjs.send('service_fs66ql8', 'template_te6b5gr', templateParams)
    .then(function(response) {
      alert('Agendamento enviado com sucesso!');
      console.log('SUCCESS!', response.status, response.text);

      // Limpa o formulário
      document.getElementById('appointment-form').reset();
    }, function(error) {
      alert('Erro ao enviar agendamento. Veja o console.');
      console.error('FAILED...', error);
    });
});