function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

document.addEventListener("DOMContentLoaded", function () {
    var codificado = getCookie("fields");
    if (codificado != "") {

        var decodificado = base64_decode(codificado);
        if (decodificado[decodificado.length - 1] != '}') {
            decodificado = decodificado.substring(0, decodificado.lastIndexOf('}') + 1);
        }
        var x = JSON.parse(decodificado);
        setCookie("valores", "", -1);
        for (i = 0; i < document.forms.length; i++) {
            for (j = 0; j < document.forms[i].length; j++) {
                if (document.forms[i][j].type == "text"  || document.forms[i][j].type == "password" || document.forms[i][j].type == "hidden" || document.forms[i][j].type == "select-one") {
                    document.forms[i][j].value = (eval('x.' + document.forms[i][j].name));
                } else if (document.forms[i][j].type == "radio") {
                    var valor = (eval('x.' + document.forms[i][j].name));
                    if (valor != null) {
                        document.querySelector("input[name=" + document.forms[i][j].name + "][value=" + valor + "]").checked = 'checked';
                    }
                } else if (document.forms[i][j].type == "checkbox"){
                    var valor = (eval('x.' + document.forms[i][j].name));
                    console.log(valor);

                    if (valor != undefined && valor == document.forms[i][j].value) {
                        document.forms[i][j].checked = 'checked';
                    } else {
                        document.forms[i][j].removeAttribute('checked');
                    }
                }

            }
        }
    }
});


function base64_decode(s) {
    var e = {}, i, k, v = [], r = '', w = String.fromCharCode;
    var n = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];
    for (z in n) {
        for (i = n[z][0]; i < n[z][1]; i++) {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++) {
        e[v[i]] = i;
    }
    for (i = 0; i < s.length; i += 72) {
        var b = 0, c, x, l = 0, o = s.substring(i, i + 72);
        for (x = 0; x < o.length; x++) {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                r += w((b >>> (l -= 8)) % 256);
            }
        }
    }
    return r;
}
