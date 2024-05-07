const form = document.getElementById('contact-form')

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const nome = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    const result = `Nome: ${nome} \n E-Mail:${email} \n Mensagem:${message}`
    alert(result);


});
