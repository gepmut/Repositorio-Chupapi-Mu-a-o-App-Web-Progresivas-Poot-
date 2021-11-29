function login_admin() {
    if ($('#admin').val() == "") {
        var msg = "CAMPO USUARIO VACIO";
        msg_error(msg);
    } else if ($('#admin_password').val() == "") {
        var msg = "CAMPO CONTRASEÑA VACIO";
        msg_error(msg);
    } else {
        var datos = new FormData();
        datos.append("usuario", $('#admin').val());
        datos.append("contrasena", $('#admin_password').val());
        $.ajax({
            url: "ctrl_login_admin",
            type: 'POST',
            processData: false,
            contentType: false,
            data: datos,
            success: function(resp) {
                var resultado = JSON.parse(resp);
                if (resultado.status == 1) {
                    var msg = resultado.mensaje;
                    var url = resultado.url;
                    msg_success(msg, url);
                } else {
                    var msg = resultado.mensaje;
                    msg_error(msg);
                }
            }
        });
    }
}