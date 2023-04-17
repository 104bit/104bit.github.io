
script.js:
```javascript
// Formun gönderildiğinde çalışacak fonksiyon
function submitForm(event) {
  event.preventDefault(); // Formun varsayılan submit olayını engelle
  // Form verilerini al
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Form verilerini kullanarak işlemleri gerçekleştir (örneğin: verileri sunucuya gönderme)

  // Formun içeriğini sıfırla
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  alert('Form gönderildi!'); // Kullanıcıya mesaj ver
}

// Formu yakala ve submit olayına event dinleyici ekle
var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', submitForm);
