"use strict";

function urunkarti() {

    if (localStorage.getItem('tablet-mode')) {
        $('#urunlistesidiv').hide();
    }
    else {
        $('#urunlistesidiv').show();
    }

    document.getElementById('id01').style.display = 'block';
    if (localStorage.getItem('dark-mode')) {
        $('#urunkarti').removeClass().addClass("w3-modal-content dark-mode");
        $('#urunkartitable').removeClass().addClass("table table-striped table-dark");
    }
    else {
        $('#urunkarti').removeClass().addClass("w3-modal-content");
        $('#urunkartitable').removeClass().addClass("table");
    }



}


