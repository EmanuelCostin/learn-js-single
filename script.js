function submitForm() {
    var name = document.getElementById("name").value;
    var details = document.getElementById("details").value;

    // Trimite pe e-mail
    var gmailSubject = "Formular de Contact";
    var gmailBody = "Nume: " + name + "\nDetalii: " + details;
    window.location.href =
        "mailto:emanuelcostin0@gmail.com?subject=" +
        encodeURIComponent(gmailSubject) +
        "&body=" +
        encodeURIComponent(gmailBody);

    // Trimite ca SMS (poate necesita permisiunea utilizatorului)
    var smsBody = "Nume: " + name + "\nDetalii: " + details;
    window.location.href =
        "sms:+0756972880?body=" + encodeURIComponent(smsBody);
}