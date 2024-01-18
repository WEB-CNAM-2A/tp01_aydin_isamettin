function validation() {
    // Récupération des valeurs des champs
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();

    // Réinitialisation des messages d'erreur
    $('.error-message').remove();

    // Validation du mot de passe
    if (password !== confirmPassword) {
        $('#confirmPassword').after('<div class="error-message" style="color: red;">Les mots de passe ne correspondent pas.</div>');
        return false;
    }

    return true;
}
