"use strict";

function musterikarti() {
    document.getElementById('id01').style.display = 'block';
    if (localStorage.getItem('dark-mode')) {
        $('#musterkikarti').removeClass().addClass("w3-modal-content dark-mode");
    }
    else {
        $('#musterkikarti').removeClass().addClass("w3-modal-content");
    }
}

function musteribul() {
    document.getElementById('id02').style.display = 'block';
    if (localStorage.getItem('dark-mode')) {
        $('#musteribul').removeClass().addClass("w3-modal-content dark-mode");
        $('#musteribultable').removeClass().addClass("table table-striped table-dark");
    }
    else {
        $('#musteribul').removeClass().addClass("w3-modal-content");
        $('#musteribultable').removeClass().addClass("table");
    }
}

function musterilistesi() {
    const windowFeatures = "left=0,top=0,width=800,height=800";
    const handle = window.open(
        "MusteriListesi",
        "mozillaWindow",
        windowFeatures
    );
    if (!handle) {
        alert("Sayfa Bulunamadı!!!");
    }
}