

///////////////////////////////////////
//КВОТА ЦЕЛЕВОЕ И БЕЗ ЭКЗАМЕНОВ ВЫБОРКИ
///////////////////////////////////////



var BachelorNoExamsSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#NoExams").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorNoExamsSelect", data:{ NoExams: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i+1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorZaochNoExamsSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#NoExams").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorZaochNoExamsSelect", data:{ NoExams: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorNoExamsSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#NoExams").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorNoExamsSelectDuplicate", data:{ NoExams: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorZaochNoExamsSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#NoExams").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorZaochNoExamsSelectDuplicate", data:{ NoExams: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


var BachelorKvotaSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Kvota").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorKvotaSelect", data:{ Kvota: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorZaochKvotaSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Kvota").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorZaochKvotaSelect", data:{ Kvota: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorKvotaSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Kvota").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorKvotaSelectDuplicate", data:{ Kvota: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorZaochKvotaSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Kvota").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorZaochKvotaSelectDuplicate", data:{ Kvota: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


var BachelorCelevoeSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Celevoe").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorCelevoeSelect", data:{ Celevoe: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorZaochCelevoeSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Celevoe").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorZaochCelevoeSelect", data:{ Celevoe: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorCelevoeSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Celevoe").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorCelevoeSelectDuplicate", data:{ Celevoe: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorZaochCelevoeSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var bar = $("#Celevoe").val();
    console.log(bar);
    $.ajax({url:"http://localhost:3001/BachelorZaochCelevoeSelectDuplicate", data:{ Celevoe: bar }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Способ поступления</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};
/////////////////////
//Current RANK SELECT NoExams, Kvota, Celevoe, PI, KB, FIIT, MOAIS, IVT, SAU, TotalQuantity, OnlyOriginal
////////////////////
var BachelorCurrentRankKonkursSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var NoExams = $("#NoExams").val();
    var Kvota = $("#Kvota").val();
    var Celevoe = $("#Celevoe").val();
    var PI = $("#PI").val();
    var KB = $("#KB").val();
    var FIIT = $("#FIIT").val();
    var MOAIS = $("#MOAIS").val();
    var IVT = $("#IVT").val();
    var SAU = $("#SAU").val();
    var TotalQuantity = $("#TotalQuantity").val();
    var OnlyOriginal = $("#OnlyOriginal").is(':checked');
    var PISelect = $("#PISelect").is(':checked');
    var KBSelect = $("#KBSelect").is(':checked');
    var FIITSelect = $("#FIITSelect").is(':checked');
    var MOAISSelect = $("#MOAISSelect").is(':checked');
    var IVTSelect = $("#IVTSelect").is(':checked');
    var SAUSelect = $("#SAUSelect").is(':checked');
    console.log(OnlyOriginal);
    $.ajax({url:"http://localhost:3001/BachelorCurrentRankKonkursSelect", data:{
        NoExams: NoExams,
        Kvota: Kvota,
        Celevoe: Celevoe,
        PI: PI,
        KB: KB,
        FIIT: FIIT,
        MOAIS: MOAIS,
        IVT: IVT,
        SAU: SAU,
        TotalQuantity: TotalQuantity,
        OnlyOriginal: OnlyOriginal,
        PISelect: PISelect,
        KBSelect: KBSelect,
        FIITSelect: FIITSelect,
        MOAISSelect: MOAISSelect,
        IVTSelect: IVTSelect,
        SAUSelect: SAUSelect
    }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Проходное направление</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
    },
    error: function (error) {
        console.log(error);
        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
        bootbox.alert(f);
    }
    });
};

var BachelorZaochCurrentRankKonkursSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var NoExams = $("#NoExams").val();
    var Kvota = $("#Kvota").val();
    var Celevoe = $("#Celevoe").val();
    var PI = $("#PI").val();
    var KB = $("#KB").val();
    var FIIT = $("#FIIT").val();
    var MOAIS = $("#MOAIS").val();
    var IVT = $("#IVT").val();
    var SAU = $("#SAU").val();
    var TotalQuantity = $("#TotalQuantity").val();
    var OnlyOriginal = $("#OnlyOriginal").is(':checked');
    var PISelect = $("#PISelect").is(':checked');
    var KBSelect = $("#KBSelect").is(':checked');
    var FIITSelect = $("#FIITSelect").is(':checked');
    var MOAISSelect = $("#MOAISSelect").is(':checked');
    var IVTSelect = $("#IVTSelect").is(':checked');
    var SAUSelect = $("#SAUSelect").is(':checked');
    console.log(OnlyOriginal);
    $.ajax({url:"http://localhost:3001/BachelorZaochCurrentRankKonkursSelect", data:{
        NoExams: NoExams,
        Kvota: Kvota,
        Celevoe: Celevoe,
        PI: PI,
        KB: KB,
        FIIT: FIIT,
        MOAIS: MOAIS,
        IVT: IVT,
        SAU: SAU,
        TotalQuantity: TotalQuantity,
        OnlyOriginal: OnlyOriginal,
        PISelect: PISelect,
        KBSelect: KBSelect,
        FIITSelect: FIITSelect,
        MOAISSelect: MOAISSelect,
        IVTSelect: IVTSelect,
        SAUSelect: SAUSelect
    }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Проходное направление</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
    },
    error: function (error) {
        console.log(error);
        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
        bootbox.alert(f);
    }
    });
};

var BachelorCurrentRankKonkursSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var NoExams = $("#NoExams").val();
    var Kvota = $("#Kvota").val();
    var Celevoe = $("#Celevoe").val();
    var PI = $("#PI").val();
    var KB = $("#KB").val();
    var FIIT = $("#FIIT").val();
    var MOAIS = $("#MOAIS").val();
    var IVT = $("#IVT").val();
    var SAU = $("#SAU").val();
    var TotalQuantity = $("#TotalQuantity").val();
    var OnlyOriginal = $("#OnlyOriginal").is(':checked');
    var PISelect = $("#PISelect").is(':checked');
    var KBSelect = $("#KBSelect").is(':checked');
    var FIITSelect = $("#FIITSelect").is(':checked');
    var MOAISSelect = $("#MOAISSelect").is(':checked');
    var IVTSelect = $("#IVTSelect").is(':checked');
    var SAUSelect = $("#SAUSelect").is(':checked');
    console.log(OnlyOriginal);
    $.ajax({url:"http://localhost:3001/BachelorCurrentRankKonkursSelectDuplicate", data:{
        NoExams: NoExams,
        Kvota: Kvota,
        Celevoe: Celevoe,
        PI: PI,
        KB: KB,
        FIIT: FIIT,
        MOAIS: MOAIS,
        IVT: IVT,
        SAU: SAU,
        TotalQuantity: TotalQuantity,
        OnlyOriginal: OnlyOriginal,
        PISelect: PISelect,
        KBSelect: KBSelect,
        FIITSelect: FIITSelect,
        MOAISSelect: MOAISSelect,
        IVTSelect: IVTSelect,
        SAUSelect: SAUSelect
    }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Проходное направление</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
    },
    error: function (error) {
        console.log(error);
        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
        bootbox.alert(f);
    }
    });
};

var BachelorZaochCurrentRankKonkursSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var NoExams = $("#NoExams").val();
    var Kvota = $("#Kvota").val();
    var Celevoe = $("#Celevoe").val();
    var PI = $("#PI").val();
    var KB = $("#KB").val();
    var FIIT = $("#FIIT").val();
    var MOAIS = $("#MOAIS").val();
    var IVT = $("#IVT").val();
    var SAU = $("#SAU").val();
    var TotalQuantity = $("#TotalQuantity").val();
    var OnlyOriginal = $("#OnlyOriginal").is(':checked');
    var PISelect = $("#PISelect").is(':checked');
    var KBSelect = $("#KBSelect").is(':checked');
    var FIITSelect = $("#FIITSelect").is(':checked');
    var MOAISSelect = $("#MOAISSelect").is(':checked');
    var IVTSelect = $("#IVTSelect").is(':checked');
    var SAUSelect = $("#SAUSelect").is(':checked');
    console.log(OnlyOriginal);
    $.ajax({url:"http://localhost:3001/BachelorZaochCurrentRankKonkursSelectDuplicate", data:{
        NoExams: NoExams,
        Kvota: Kvota,
        Celevoe: Celevoe,
        PI: PI,
        KB: KB,
        FIIT: FIIT,
        MOAIS: MOAIS,
        IVT: IVT,
        SAU: SAU,
        TotalQuantity: TotalQuantity,
        OnlyOriginal: OnlyOriginal,
        PISelect: PISelect,
        KBSelect: KBSelect,
        FIITSelect: FIITSelect,
        MOAISSelect: MOAISSelect,
        IVTSelect: IVTSelect,
        SAUSelect: SAUSelect
    }, success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Баллы математика</th><th>Баллы информатика</th><th>Сумма с обществом</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Проходное направление</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
    },
    error: function (error) {
        console.log(error);
        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
        bootbox.alert(f);
    }
    });
};

/////////////////////////////////////////////
//UPDATE FUN
/////////////////////////////////////////////

var BachelorUpdate = function (id) {
    confirm(function(){
        console.log("ready!"); var f = '';
        var f = '';
        var FirstName = $("#FirstName").val();
        var MiddleName = $("#MiddleName").val();
        var LastName = $("#LastName").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var Check = $("#Check").is(':checked');
        var Discription = $("#Discription").val();
        var AgreementOnTransfer = $("#AgreementOnTransfer").is(':checked');
        var ProcessingOfPersonalData = $("#ProcessingOfPersonalData").is(':checked');
        var Reference = $("#Reference").is(':checked');
        var Policy = $("#Policy").is(':checked');
        var Photo = $("#Photo").val();
        var PassportCopy = $("#PassportCopy").val();
        var INN = $("#INN").val();
        var SNILS = $("#SNILS").val();
        var DocNumber = $("#DocNumber").val();
        var CityName = $("#CityName").val();
        var MethodOfAdmissionID = $("#MethodOfAdmissionID").val();
        var SchoolName = $("#SchoolName").val();
        var SchoolCityName = $("#SchoolCityName").val();
        var Certificate = $("#Certificate").is(':checked');
        var Payment = $("#Payment").is(':checked');
        var WayOfLearning = $("#WayOfLearning").is(':checked');
        var BallRussian = $("#BallRussian").val();
        var BallMathematics = $("#BallMathematics").val();
        var BallInformatics = $("#BallInformatics").val();
        var BallPhysics = $("#BallPhysics").val();
        var BallSocialSciense = $("#BallSocialSciense").val();
        var BallExtraPoints = $("#BallExtraPoints").val();
        var FirstDirection = $("#FirstDirection").val();
        var SecondDirection = $("#SecondDirection").val();
        var ThirdDirection = $("#ThirdDirection").val();
        var MotherFirstName = $("#MotherFirstName").val();
        var MotherMiddleName = $("#MotherMiddleName").val();
        var MotherLastName = $("#MotherLastName").val();
        var FatherFirstName = $("#FatherFirstName").val();
        var FatherMiddleName = $("#FatherMiddleName").val();
        var FatherLastName = $("#FatherLastName").val();
        var MotherPhoneNumber = $("#MotherPhoneNumber").val();
        var FatherPhoneNumber = $("#FatherPhoneNumber").val();
        $.ajax({
            url: "http://localhost:3001/BachelorUpdate", data: {
                PersonID: id,
                FirstName: FirstName,
                MiddleName: MiddleName,
                LastName: LastName,
                PhoneNumber: PhoneNumber,
                Check: Check,
                Discription: Discription,
                AgreementOnTransfer: AgreementOnTransfer,
                ProcessingOfPersonalData: ProcessingOfPersonalData,
                Reference: Reference,
                Policy: Policy,
                Photo: Photo,
                PassportCopy: PassportCopy,
                INN: INN,
                SNILS: SNILS,
                DocNumber: DocNumber,
                CityName: CityName,
                MethodOfAdmissionID: MethodOfAdmissionID,
                SchoolName: SchoolName,
                SchoolCityName: SchoolCityName,
                Certificate: Certificate,
                Payment: Payment,
                WayOfLearning: WayOfLearning,
                BallRussian: BallRussian,
                BallMathematics: BallMathematics,
                BallInformatics: BallInformatics,
                BallPhysics: BallPhysics,
                BallSocialSciense: BallSocialSciense,
                BallExtraPoints: BallExtraPoints,
                FirstDirection: FirstDirection,
                SecondDirection: SecondDirection,
                ThirdDirection: ThirdDirection,
                MotherFirstName: MotherFirstName,
                MotherMiddleName: MotherMiddleName,
                MotherLastName: MotherLastName,
                FatherFirstName: FatherFirstName,
                FatherMiddleName: FatherMiddleName,
                FatherLastName: FatherLastName,
                MotherPhoneNumber: MotherPhoneNumber,
                FatherPhoneNumber: FatherPhoneNumber
            }, success: function (data) {
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Бакалавр ' + LastName + ' ' + FirstName + ' ' + MiddleName + ' обновлен </h3>'; }
                else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                bootbox.alert(f);
                //$("#Conlusion").html(f);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    }, '"Обновление"')
};


var MasterUpdate = function (id) {
    confirm(function(){
        console.log("ready!");
        var f = '';
        var FirstName = $("#FirstName").val();
        var MiddleName = $("#MiddleName").val();
        var LastName = $("#LastName").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var Check = $("#Check").is(':checked');
        var Discription = $("#Discription").val();
        var AgreementOnTransfer = $("#AgreementOnTransfer").is(':checked');
        var ProcessingOfPersonalData = $("#ProcessingOfPersonalData").is(':checked');
        var Reference = $("#Reference").is(':checked');
        var Policy = $("#Policy").is(':checked');
        var Photo = $("#Photo").val();
        var PassportCopy = $("#PassportCopy").val();
        var INN = $("#INN").val();
        var SNILS = $("#SNILS").val();
        var DocNumber = $("#DocNumber").val();
        var CityName = $("#CityName").val();
        var MethodOfAdmissionID = $("#MethodOfAdmissionID").val();
        var Payment = $("#Payment").is(':checked');
        var WayOfLearning = $("#WayOfLearning").is(':checked');
        var Interview = $("#Interview").val();
        var BallExtraPoints = $("#BallExtraPoints").val();
        var UniversityName = $("#UniversityName").val();
        var Speciality = $("#Speciality").val();
        var MotherFirstName = $("#MotherFirstName").val();
        var MotherMiddleName = $("#MotherMiddleName").val();
        var MotherLastName = $("#MotherLastName").val();
        var MotherPhoneNumber = $("#MotherPhoneNumber").val();
        var FatherFirstName = $("#FatherFirstName").val();
        var FatherMiddleName = $("#FatherMiddleName").val();
        var FatherLastName = $("#FatherLastName").val();
        var FatherPhoneNumber = $("#FatherPhoneNumber").val();
        var FirstDirection = $("#FirstDirection").val();
        var SecondDirection = $("#SecondDirection").val();
        var ThirdDirection = $("#ThirdDirection").val();
        $.ajax({
            url: "http://localhost:3001/MasterUpdate", data: {
                PersonID: id,
                FirstName: FirstName,
                MiddleName: MiddleName,
                LastName: LastName,
                PhoneNumber: PhoneNumber,
                Check: Check,
                Discription: Discription,
                AgreementOnTransfer: AgreementOnTransfer,
                ProcessingOfPersonalData: ProcessingOfPersonalData,
                Reference: Reference,
                Policy: Policy,
                Photo: Photo,
                PassportCopy: PassportCopy,
                INN: INN,
                SNILS: SNILS,
                DocNumber: DocNumber,
                CityName: CityName,
                MethodOfAdmissionID: MethodOfAdmissionID,
                Payment: Payment,
                WayOfLearning: WayOfLearning,
                Interview: Interview,
                BallExtraPoints: BallExtraPoints,
                UniversityName: UniversityName,
                Speciality: Speciality,
                MotherFirstName: MotherFirstName,
                MotherMiddleName: MotherMiddleName,
                MotherLastName: MotherLastName,
                MotherPhoneNumber: MotherPhoneNumber,
                FatherFirstName: FatherFirstName,
                FatherMiddleName: FatherMiddleName,
                FatherLastName: FatherLastName,
                FatherPhoneNumber: FatherPhoneNumber,
                FirstDirection: FirstDirection,
                SecondDirection: SecondDirection,
                ThirdDirection: ThirdDirection,
            }, success: function (data) {
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Магистр ' + LastName + ' ' + FirstName + ' ' + MiddleName + ' обновлен </h3>'; }
                else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                bootbox.alert(f);
                //$("#Conlusion").html(f);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    }, '"Обновление"')
};



var PSUpdate = function (id) {
    confirm(function(){
        var f = '';
        var LastName = $("#LastName").val();
        var FirstName = $("#FirstName").val();
        var MiddleName = $("#MiddleName").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var Check = $("#Check").is(':checked');
        var Discription = $("#Discription").val();
        var AgreementOnTransfer = $("#AgreementOnTransfer").is(':checked');
        var ProcessingOfPersonalData = $("#ProcessingOfPersonalData").is(':checked');
        var Reference = $("#Reference").is(':checked');
        var Policy = $("#Policy").is(':checked');
        var Photo = $("#Photo").val();
        var PassportCopy = $("#PassportCopy").val();
        var INN = $("#INN").val();
        var SNILS = $("#SNILS").val();
        var DocNumber = $("#DocNumber").val();
        var CityName = $("#CityName").val();
        var MethodOfAdmissionID = $("#MethodOfAdmissionID").val();
        var BallPhilosophy = $("#BallPhilosophy").val();
        var BallEnglish = $("#BallEnglish").val();
        var BallSpecial = $("#BallSpecial").val();
        var UniversityName = $("#UniversityName").val();
        var Speciality = $("#Speciality").val();
        var MotherFirstName = $("#MotherFirstName").val();
        var MotherMiddleName = $("#MotherMiddleName").val();
        var MotherLastName = $("#MotherLastName").val();
        var MotherPhoneNumber = $("#MotherPhoneNumber").val();
        var FatherFirstName = $("#FatherFirstName").val();
        var FatherMiddleName = $("#FatherMiddleName").val();
        var FatherLastName = $("#FatherLastName").val();
        var FatherPhoneNumber = $("#FatherPhoneNumber").val();
        $.ajax({
            url: "http://localhost:3001/PSUpdate", data: {
                PersonID: id,
                LastName: LastName,
                FirstName: FirstName,
                MiddleName: MiddleName,
                PhoneNumber: PhoneNumber,
                Check: Check,
                Discription: Discription,
                AgreementOnTransfer: AgreementOnTransfer,
                ProcessingOfPersonalData: ProcessingOfPersonalData,
                Reference: Reference,
                Policy: Policy,
                Photo: Photo,
                PassportCopy: PassportCopy,
                INN: INN,
                SNILS: SNILS,
                DocNumber: DocNumber,
                CityName: CityName,
                MethodOfAdmissionID: MethodOfAdmissionID,
                BallPhilosophy: BallPhilosophy,
                BallEnglish: BallEnglish,
                BallSpecial: BallSpecial,
                UniversityName: UniversityName,
                Speciality: Speciality,
                MotherFirstName: MotherFirstName,
                MotherMiddleName: MotherMiddleName,
                MotherLastName: MotherLastName,
                MotherPhoneNumber: MotherPhoneNumber,
                FatherFirstName: FatherFirstName,
                FatherMiddleName: FatherMiddleName,
                FatherLastName: FatherLastName,
                FatherPhoneNumber: FatherPhoneNumber,
            }, success: function (data) {
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Аспирант ' + LastName + ' ' + FirstName + ' ' + MiddleName + ' обновлен </h3>'; }
                else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                bootbox.alert(f);
                //$("#Conlusion").html(f);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    },'"Обновление"')
};




/////////////////////////////////////////////
//DELETE FUN
/////////////////////////////////////////////

var BachelorDelete = function (id) {
    confirm(function () {
        console.log("ready!"); var f = '';
        var f = '';
        $.ajax({
            url: "http://localhost:3001/BachelorDelete", data: {
                PersonID: id,
            },
            success: function (data) {
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Бакалавр  удален </h3>'; }
                else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                bootbox.alert(f);
                //$("#Conlusion").html(f);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    },'"Удаление"')
};



var MasterDelete = function (id) {
    confirm(function () {
        console.log("ready!"); var f = '';
        var f = '';
        $.ajax({
            url: "http://localhost:3001/MasterDelete", data: {
                PersonID: id,
            },
            success: function (data) {
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Магистр удален </h3>'; }
                else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                bootbox.alert(f);
                //$("#Conlusion").html(f);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    }, '"Удаление"')
};


var PSDelete = function (id) {
    confirm(function () {
        console.log("ready!"); var f = '';
        var f = '';
        $.ajax({
            url: "http://localhost:3001/PSDelete", data: {
                PersonID: id,
            },
            success: function (data) {
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Аспирант удален </h3>'; }
                else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                bootbox.alert(f);
                //$("#Conlusion").html(f);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    }, '"Удаление"')
};



//JUST SELECT

var BachelorUpdateDelete = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/BachelorUpdateDelete", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать бакалавра</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Телефонный номер</th><th>ПРОВЕРЕН</th><th>Комментарий</th><th>Согласие на зачисление</th><th>Согласие на обработку персональных данных</th><th>Справка</th><th>Полис</th><th>Количество фото</th><th>Количество копий паспорта</th><th>ИНН</th><th>СНИЛС</th><th>Номер Дела</th><th>Город</th><th>Способ поступления</th><th>Школа</th><th>Город школы</th><th>Оригинал Аттестата</th><th>Подавал на бюжет</th><th>ОЧНОЕ образование</th><th>Баллы русский</th><th>Баллы математика</th><th>Баллы информатика</th><th>Баллы физика</th><th>Баллы обществознание</th><th>Экстра баллы</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Имя мамы</th><th>Отчество мамы</th><th>Фамилия мамы</th><th>Имя папы</th><th>Отчество папы</th><th>Фамилия папы</th><th>Телефон мамы</th><th>Телефон папы</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) { 
            s += '<tr id = "row_' + data.recordset[i].PersonID + '">' + '<th scope="row"> <a href = "./BachelorInsert.html?id=' + (data.recordset[i].PersonID) + '">' + (data.recordset[i].PersonID) + '</a></th>'; 
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                {
                    if ((key == 'Check') || (key == 'AgreementOnTransfer') || (key == 'ProcessingOfPersonalData') || (key == 'Reference') || (key == 'Policy') || (key == 'Certificate') || (key == 'Payment') || (key == 'WayOfLearning')) {
                        if (val == true)
                            s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                        else
                            s += '<td> <input type = "checkbox" disabled/></td>';
                    }
                    else
                    if (key == 'Discription') {
                        s += '<td> <textarea cols = 40 rows = 8 disabled>' + val + '</textarea>' + '</td>';
                    }
                    else s += '<td>' + val + '</td>';

                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};



var MasterUpdateDelete = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/MasterUpdateDelete", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать магистранта</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Телефонный номер</th><th>ПРОВЕРЕН</th><th>Комментарий</th><th>Согласие на зачисление</th><th>Согласие на обработку персональных данных</th><th>Справка</th><th>Полис</th><th>Количество фото</th><th>Количество копий паспорта</th><th>ИНН</th><th>СНИЛС</th><th>Номер Дела</th><th>Город</th><th>Способ поступления</th><th>Подавал на бюджет</th><th>Подавал на ОЧНОЕ</th><th>Интервью</th><th>Экстра баллы</th><th>Университет</th><th>Специальность</th><th>Имя мамы</th><th>Отчество мамы</th><th>Фамилия мамы</th><th>Телефон мамы</th><th>Имя папы</th><th>Отчество папы</th><th>Фамилия папы</th><th>Телефон папы</th><th>Первое нарпавление</th><th>Второе направление</th><th>Третье направление</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr id = "row_' + data.recordset[i].PersonID + '">' + '<th scope="row"> <a href = "./MasterInsert.html?id=' + (data.recordset[i].PersonID) + '">' + (data.recordset[i].PersonID) + '</a></th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID') {
                    if ((key == 'Check') || (key == 'AgreementOnTransfer') || (key == 'ProcessingOfPersonalData') || (key == 'Reference') || (key == 'Policy') || (key == 'Certificate') || (key == 'Payment') || (key == 'WayOfLearning')) {
                        if (val == true)
                            s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                        else
                            s += '<td> <input type = "checkbox" disabled/></td>';
                    }
                    else
                        if ((key == 'Discription') || (key == 'Interview')) {
                            s += '<td> <textarea cols = 40 rows = 8 disabled>' + val + '</textarea>' + '</td>';
                        }
                        else s += '<td>' + val + '</td>';
                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


var PSUpdateDelete = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/PSUpdateDelete", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать аспиранта</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Телефонный номер</th><th>ПРОВЕРЕН</th><th>Комментарий</th><th>Согласие на зачисление</th><th>Согласие на обработку персональных данных</th><th>Справка</th><th>Полис</th><th>Количество фото</th><th>Количество копий паспорта</th><th>ИНН</th><th>СНИЛС</th><th>Номер Дела</th><th>Город</th><th>Способ поступления</th><th>Баллы философия</th><th>Баллы английский</th><th>Специальные баллы</th><th>Университет</th><th>Специальность</th><th>Имя мамы</th><th>Отчество мамы</th><th>Фамилия мамы</th><th>Телефон мамы</th><th>Имя папы</th><th>Отчество папы</th><th>Фамилия папы</th><th>Телефон папы</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr id = "row_' + data.recordset[i].PersonID + '">' + '<th scope="row"> <a href = "./PSInsert.html?id=' + (data.recordset[i].PersonID) + '">' + (data.recordset[i].PersonID) + '</a></th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID') {
                    if ((key == 'Check') || (key == 'AgreementOnTransfer') || (key == 'ProcessingOfPersonalData') || (key == 'Reference') || (key == 'Policy') || (key == 'Certificate') || (key == 'Payment') || (key == 'WayOfLearning')) {
                        if (val == true)
                            s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                        else
                            s += '<td> <input type = "checkbox" disabled/></td>';
                    }
                    else
                        if ((key == 'Discription') || (key == 'Interview')) {
                            s += '<td> <textarea cols = 40 rows = 8 disabled>' + val + '</textarea>' + '</td>';
                        }
                        else s += '<td>' + val + '</td>';
                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


/////////////////////    АЛФАВИТ, ЗАРАНКОВАННАЯ ТАБЛИЦА, ВЫБОРКА КОЛИЧЕСТВА ПО ШКОЛАМ, ПО ГОРОДАМ

var Alphabet = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var Bachelor = $("#Bachelor").is(':checked');
    var Master = $("#Master").is(':checked');
    var PostgradulateStudent = $("#PostgradulateStudent").is(':checked');
    $.ajax({url:"http://localhost:3001/Alphabet",
        data:{ Bachelor: Bachelor, Master: Master, PostgradulateStudent: PostgradulateStudent },
        success:function (data) {
                            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Номер телефона</th><th>Имя мамы</th><th>Отчество мамы</th><th>Фамилия мамы</th><th>Телефон мамы</th><th>Имя папы</th><th>Отчество папы</th><th>Фамилия папы</th><th>Телефон папы</th><th>Бакалавр, магистр, аспирант</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr><th scope="row">' + (i + 1) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID')
                { s += '<td>' + val + '</td>'; }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


var BachelorRank = function () {
    console.log("ready!"); var f = '';
    var s = '';
    var QuantityNoExams = $("#QuantityNoExams").val();
    var QuantityKvota = $("#QuantityKvota").val();
    var QuantityCelevoe = $("#QuantityCelevoe").val();
    $.ajax({url:"http://localhost:3001/BachelorRank",
        data:{ QuantityNoExams: QuantityNoExams, QuantityKvota: QuantityKvota, QuantityCelevoe: QuantityCelevoe },
        success:function (data) {
                            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>ПИ_ранк</th><th>КБ_ранк</th><th>ФИИТ_ранк</th><th>МОАИС_ранк</th><th>ИВТ_ранк</th><th>САУ_ранк</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с математикой</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Метод поступления (итоговый)</th></tr></thead><tbody>';
                            for (var i = 0; i < data.recordset.length; i++) {
                                s += '<tr><th scope="row">' + (i + 1) + '</th>';
                                $.each(data.recordset[i], function (key, val) {
                                    if (key != 'PersonID')
                                    { s += '<td>' + val + '</td>'; }
                                })
                                s += '</tr>';
                            };

                            s += '</tbody></table>';

                            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var SchoolCount = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/SchoolCount",
        success:function (data) {
                            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Школа</th><th>Город</th><th>Подавшие документы</th><th>Поступившие</th></tr></thead><tbody>';
                            for (var i = 0; i < data.recordset.length; i++) {
                                s += '<tr><th scope="row">' + (i + 1) + '</th>';
                                $.each(data.recordset[i], function (key, val) {
                                    if (key != 'PersonID')
                                    { s += '<td>' + val + '</td>'; }
                                })
                                s += '</tr>';
                            };

                            s += '</tbody></table>';

                            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var CityCount = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/CityCount",
        success:function (data) {
                            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Город</th><th>Подавшие документы</th><th>Поступившие</th></tr></thead><tbody>';
                            for (var i = 0; i < data.recordset.length; i++) {
                                s += '<tr><th scope="row">' + (i + 1) + '</th>';
                                $.each(data.recordset[i], function (key, val) {
                                    if (key != 'PersonID')
                                    { s += '<td>' + val + '</td>'; }
                                })
                                s += '</tr>';
                            };

                            s += '</tbody></table>';

                            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


/////////////////////////////////////////////////////////////////////
/////////////////                             ///////////////////////
///////////////// ВЫБОРКА И УДАЛЕНИЕ ПРИКАЗОВ ///////////////////////
/////////////////                             ///////////////////////
/////////////////////////////////////////////////////////////////////


var DecreeSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/DecreeSelect", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать приказ</th><th>#</th><th>Номер приказа</th><th>Данные протокола</th><th>Имя приказа</th><th>Дата приказа</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr id = "row_' + data.recordset[i].DecreeID + '">' + '<td><input class = "kek" type = "checkbox" id = "checkbox_' + data.recordset[i].DecreeID + '"/>' + '</td>' + '<th scope="row">' + (data.recordset[i].DecreeID) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'DecreeID') {
                                s += '<td>' + val + '</td>';
                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var DecreeDelete = function () {
    confirm(function () {
        var list = [];
        $(".kek").each(function (index) {
            if ($(this).is(':checked')) {
                list.push($(this).attr('id').split('_')[1])

            };
        });
        (function _req(i) {
            if (i < list.length) {
                var l = list[i];
                var f = '';
                var obj = {};
                var cycle = $("#row_" + l).children();
                obj.DecreeID = l;
                console.log(obj);
                i++;
                $.ajax({
                    url: "http://localhost:3001/DecreeDelete", data: obj, success: function (data) {
                        console.log(data);
                        var jsondate = data;
                        f += '</h3>';
                        if (jsondate.status)
                        { f += 'Приказ Удален </h3>'; }
                        else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                        bootbox.alert(f);
                        _req(i);
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
                    },
                    error: function (error) {
                        console.log(error);
                        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                        bootbox.alert(f);
                    }
                });
            }
        })(0);
    }, '"Удаление выбранных приказов"')
}


var DecreeSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/DecreeSelectDuplicate", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать приказ</th><th>#</th><th>Номер приказа</th><th>Данные протокола</th><th>Имя приказа</th><th>Дата приказа</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr id = "row_' + data.recordset[i].DecreeID + '">' + '<td><input class = "kek" type = "checkbox" id = "checkbox_' + data.recordset[i].DecreeID + '"/>' + '</td>' + '<th scope="row">' + (data.recordset[i].DecreeID) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'DecreeID') {
                    s += '<td>' + val + '</td>';
                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var DecreeDeleteDuplicate = function () {
    confirm(function () {
        var list = [];
        $(".kek").each(function (index) {
            if ($(this).is(':checked')) {
                list.push($(this).attr('id').split('_')[1])

            };
        });
        (function _req(i) {
            if (i < list.length) {
                var l = list[i];
                var f = '';
                var obj = {};
                var cycle = $("#row_" + l).children();
                obj.DecreeID = l;
                console.log(obj);
                i++;
                $.ajax({
                    url: "http://localhost:3001/DecreeDeleteDuplicate", data: obj, success: function (data) {
                        console.log(data);
                        var jsondate = data;
                        f += '</h3>';
                        if (jsondate.status)
                        { f += 'Приказ Удален </h3>'; }
                        else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                        bootbox.alert(f);
                        _req(i);
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
                    },
                    error: function (error) {
                        console.log(error);
                        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                        bootbox.alert(f);
                    }
                });
            }
        })(0);
    },'"Удаление выбранных приказов"')
}



/////////////////////////////////////////////////////////////////////
/////////////////                               /////////////////////
///////////////// ДАЛЬНЕЙШЕЕ УЧАСТИЕ В КОНКУРСЕ  ////////////////////
/////////////////                               /////////////////////
/////////////////////////////////////////////////////////////////////


var DecreePersonSelect = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/DecreePersonSelect", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать бакалавра</th><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Номер дела</th><th>Участие в другом конкурсе</th><th>Проходное направление</th><th>Номер приказа</th><th>Данные протокола</th><th>Имя приказа</th><th>Дата приказа</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr id = "row_' + data.recordset[i].PersonID + '">' + '<td><input class = "kek" type = "checkbox" id = "checkbox_' + data.recordset[i].PersonID + '"/>' + '</td>' + '<th scope="row">' + (data.recordset[i].PersonID) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID') {
                    if (key == 'ParticipationInAnotherContest') {
                        if (val == true)
                            s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                        else
                            s += '<td> <input type = "checkbox" disabled/></td>';
                    }
                    else
                    s += '<td>' + val + '</td>';
                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorParticipationInAnotherContest = function () {
    confirm(function () {
        var list = [];
        $(".kek").each(function (index) {
            if ($(this).is(':checked')) {
                list.push($(this).attr('id').split('_')[1])

            };
        });
        (function _req(i) {
            if (i < list.length) {
                var l = list[i];
                var f = '';
                var obj = {};
                var cycle = $("#row_" + l).children();
                obj.PersonID = l;
                console.log(obj);
                i++;
                $.ajax({
                    url: "http://localhost:3001/BachelorParticipationInAnotherContest", data: obj, success: function (data) {
                        console.log(data);
                        var jsondate = data;
                        f += '</h3>';
                        if (jsondate.status)
                        { f += 'Бакалавр ' + l + ' продолжит участие в конкурсе </h3>'; }
                        else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                        bootbox.alert(f);
                        _req(i);
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
                    },
                    error: function (error) {
                        console.log(error);
                        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                        bootbox.alert(f);
                    }
                });
            }
        })(0);
    }, '"Дальнейшее участие в конкурсе для выбранных участников"')
}


var DecreePersonSelectDuplicate = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/DecreePersonSelectDuplicate", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать бакалавра</th><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Номер дела</th><th>Участие в другом конкурсе</th><th>Проходное направление</th><th>Номер приказа</th><th>Данные протокола</th><th>Имя приказа</th><th>Дата приказа</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr id = "row_' + data.recordset[i].PersonID + '">' + '<td><input class = "kek" type = "checkbox" id = "checkbox_' + data.recordset[i].PersonID + '"/>' + '</td>' + '<th scope="row">' + (data.recordset[i].PersonID) + '</th>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID') {
                    if (key == 'ParticipationInAnotherContest') {
                        if (val == true)
                            s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                        else
                            s += '<td> <input type = "checkbox" disabled/></td>';
                    }
                    else
                    s += '<td>' + val + '</td>';
                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var BachelorParticipationInAnotherContestDuplicate = function () {
    confirm(function(){
        var list = [];
        $(".kek").each(function (index) {
            if ($(this).is(':checked')) {
                list.push($(this).attr('id').split('_')[1])

            };
        });
        (function _req(i) {
            if (i < list.length) {
                var l = list[i];
                var f = '';
                var obj = {};
                var cycle = $("#row_" + l).children();
                obj.PersonID = l;
                console.log(obj);
                i++;
                $.ajax({
                    url: "http://localhost:3001/BachelorParticipationInAnotherContestDuplicate", data: obj, success: function (data) {
                        console.log(data);
                        var jsondate = data;
                        f += '</h3>';
                        if (jsondate.status)
                        { f += 'Бакалавр ' + l + ' продолжит участие в конкурсе </h3>'; }
                        else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                        bootbox.alert(f);
                        _req(i);
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
                    },
                    error: function (error) {
                        console.log(error);
                        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                        bootbox.alert(f);
                    }
                });
            }
        })(0);
    },'"Дальнейшее участие в конкурсе для выбранных участников"')
}


////////////////////////////////////////////////////////////////////////////////
///////////////// СМЕНА НАПРАВЛЕНИЙ В ЧЕРНОВИКЕ ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var PersonDuplicateDirection = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/PersonDuplicateDirection", success:function (data) {
        s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Выбрать бакалавра</th><th>#</th><th>Новое первое направление</th><th>Новое второе направление</th><th>Новое третье направление</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Номер дела</th><th>Номер приказа</th><th>Данные протокола</th><th>Имя приказа</th><th>Дата приказа</th><th>Участие в другом конкурсе</th><th>Проходное направление</th></tr></thead><tbody>';
        for (var i = 0; i < data.recordset.length; i++) {
            s += '<tr id = "row_' + data.recordset[i].PersonID + '">' + '<td><input class = "kek" type = "checkbox" id = "checkbox_' + data.recordset[i].PersonID + '"/>' + '</td>' + '<th scope="row">' + (data.recordset[i].PersonID) + '</th>' + '<td><select name = "thirddirection"><option>Выберите направление</option><option value = "ПИ">ПИ</option><option value = "КБ">КБ</option><option value = "ФИИТ">ФИИТ</option><option value = "МОАИС">МОАИС</option><option value = "ИВТ">ИВТ</option><option value = "САУ">САУ</option></select></td><td><select name = "thirddirection"><option>Выберите направление</option><option value = "ПИ">ПИ</option><option value = "КБ">КБ</option><option value = "ФИИТ">ФИИТ</option><option value = "МОАИС">МОАИС</option><option value = "ИВТ">ИВТ</option><option value = "САУ">САУ</option></select></td><td><select name = "thirddirection"><option>Выберите направление</option><option value = "ПИ">ПИ</option><option value = "КБ">КБ</option><option value = "ФИИТ">ФИИТ</option><option value = "МОАИС">МОАИС</option><option value = "ИВТ">ИВТ</option><option value = "САУ">САУ</option></select></td>';
            $.each(data.recordset[i], function (key, val) {
                if (key != 'PersonID') {
                    if (key == 'ParticipationInAnotherContest') {
                        if (val == true)
                            s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                        else
                            s += '<td> <input type = "checkbox" disabled/></td>';
                    }
                    else
                        s += '<td>' + val + '</td>';
                }
            })
            s += '</tr>';
        };

        s += '</tbody></table>';

        $("#div").html(s);
    },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var PersonDuplicateChangeDirection = function () {
    confirm(function(){
        var list = [];
        $(".kek").each(function (index) {
            if ($(this).is(':checked')) {
                list.push($(this).attr('id').split('_')[1])

            };
        });
        (function _req(i) {
            if (i < list.length) {
                var l = list[i];
                var f = '';
                var obj = {};
                var cycle = $("#row_" + l).children();
                obj.PersonID = l;
                obj.FirstDirection = cycle.eq(2).find(":first-child").val();
                obj.SecondDirection = cycle.eq(3).find(":first-child").val();
                obj.ThirdDirection = cycle.eq(4).find(":first-child").val();
                console.log(obj);
                i++;
                $.ajax({
                    url: "http://localhost:3001/PersonDuplicateChangeDirection", data: obj, success: function (data) {
                        console.log(data);
                        var jsondate = data;
                        f += '</h3>';
                        if (jsondate.status)
                        { f += 'Направления бакалавра ' + l + ' изменены </h3>'; }
                        else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                        bootbox.alert(f);
                        _req(i);
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', getCookie('Authorization'));
                    },
                    error: function (error) {
                        console.log(error);
                        if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                        bootbox.alert(f);
                    }
                });
            }
        })(0);
    }, '"Смена направлений для выбранных участников"')
}





//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                                     /////////////////////////////
////////////////////////            INSERT PROC              /////////////////////////////
////////////////////////                                     /////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

var BachelorInsert = function () {
    confirm(function(){
        console.log("ready!");
        var f = '';
        var FirstName = $("#FirstName").val();
        var MiddleName = $("#MiddleName").val();
        var LastName = $("#LastName").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var Check = $("#Check").is(':checked');
        var Discription = $("#Discription").val();
        var AgreementOnTransfer = $("#AgreementOnTransfer").is(':checked');
        var ProcessingOfPersonalData = $("#ProcessingOfPersonalData").is(':checked');
        var Reference = $("#Reference").is(':checked');
        var Policy = $("#Policy").is(':checked');
        var Photo = $("#Photo").val();
        var PassportCopy = $("#PassportCopy").val();
        var INN = $("#INN").val();
        var SNILS = $("#SNILS").val();
        var DocNumber = $("#DocNumber").val();
        var CityName = $("#CityName").val();
        var MethodOfAdmissionID = $("#MethodOfAdmissionID").val();
        var SchoolName = $("#SchoolName").val();
        var SchoolCityName = $("#SchoolCityName").val();
        var Certificate = $("#Certificate").is(':checked');
        var Payment = $("#Payment").is(':checked');
        var WayOfLearning = $("#WayOfLearning").is(':checked');
        var BallRussian = $("#BallRussian").val();
        var BallMathematics = $("#BallMathematics").val();
        var BallInformatics = $("#BallInformatics").val();
        var BallPhysics = $("#BallPhysics").val();
        var BallSocialSciense = $("#BallSocialSciense").val();
        var BallExtraPoints = $("#BallExtraPoints").val();
        var FirstDirection = $("#FirstDirection").val();
        var SecondDirection = $("#SecondDirection").val();
        var ThirdDirection = $("#ThirdDirection").val();
        var MotherFirstName = $("#MotherFirstName").val();
        var MotherMiddleName = $("#MotherMiddleName").val();
        var MotherLastName = $("#MotherLastName").val();
        var FatherFirstName = $("#FatherFirstName").val();
        var FatherMiddleName = $("#FatherMiddleName").val();
        var FatherLastName = $("#FatherLastName").val();
        var MotherPhoneNumber = $("#MotherPhoneNumber").val();
        var FatherPhoneNumber = $("#FatherPhoneNumber").val();
        $.ajax({
            url: "http://localhost:3001/BachelorInsert",
            data: {
                FirstName: FirstName,
                MiddleName: MiddleName,
                LastName: LastName,
                PhoneNumber: PhoneNumber,
                Check: Check,
                Discription: Discription,
                AgreementOnTransfer: AgreementOnTransfer,
                ProcessingOfPersonalData: ProcessingOfPersonalData,
                Reference: Reference,
                Policy: Policy,
                Photo: Photo,
                PassportCopy: PassportCopy,
                INN: INN,
                SNILS: SNILS,
                DocNumber: DocNumber,
                CityName: CityName,
                MethodOfAdmissionID: MethodOfAdmissionID,
                SchoolName: SchoolName,
                SchoolCityName: SchoolCityName,
                Certificate: Certificate,
                Payment: Payment,
                WayOfLearning: WayOfLearning,
                BallRussian: BallRussian,
                BallMathematics: BallMathematics,
                BallInformatics: BallInformatics,
                BallPhysics: BallPhysics,
                BallSocialSciense: BallSocialSciense,
                BallExtraPoints: BallExtraPoints,
                FirstDirection: FirstDirection,
                SecondDirection: SecondDirection,
                ThirdDirection: ThirdDirection,
                MotherFirstName: MotherFirstName,
                MotherMiddleName: MotherMiddleName,
                MotherLastName: MotherLastName,
                FatherFirstName: FatherFirstName,
                FatherMiddleName: FatherMiddleName,
                FatherLastName: FatherLastName,
                MotherPhoneNumber: MotherPhoneNumber,
                FatherPhoneNumber: FatherPhoneNumber
            },
            success:function (data) {
                $("#FirstName").val('');
                $("#MiddleName").val('');
                $("#LastName").val('');
                $("#PhoneNumber").val('');
                $("#Check").prop('checked', false)
                $("#Discription").val('');
                $("#AgreementOnTransfer").prop('checked', false)
                $("#ProcessingOfPersonalData").prop('checked', false)
                $("#Reference").prop('checked', false)
                $("#Policy").prop('checked', false)
                $("#Photo").val('');
                $("#PassportCopy").val('');
                $("#INN").val('');
                $("#SNILS").val('');
                $("#DocNumber").val('');
                $("#CityName").val('');
                $("#MethodOfAdmissionID").val('0');
                $("#SchoolName").val('');
                $("#SchoolCityName").val('');
                $("#Certificate").prop('checked', false)
                $("#Payment").prop('checked', false)
                $("#WayOfLearning").prop('checked', false)
                $("#BallRussian").val('');
                $("#BallMathematics").val('');
                $("#BallInformatics").val('');
                $("#BallPhysics").val('');
                $("#BallSocialSciense").val('');
                $("#BallExtraPoints").val('');
                $("#FirstDirection").val('0');
                $("#SecondDirection").val('0');
                $("#ThirdDirection").val('0');
                $("#MotherFirstName").val('');
                $("#MotherMiddleName").val('');
                $("#MotherLastName").val('');
                $("#FatherFirstName").val('');
                $("#FatherMiddleName").val('');
                $("#FatherLastName").val('');
                $("#MotherPhoneNumber").val('');
                $("#FatherPhoneNumber").val('');
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Бакалавр ' + LastName + ' ' + FirstName + ' ' + MiddleName + ' добавлен </h3>'; }
                else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                bootbox.alert(f);
                //$("#Conlusion").html(f);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    }, '"Добавление человека"')
};



var MasterInsert = function () {
    confirm(function(){
        console.log("ready!"); var f = '';
        var f = '';
        var FirstName = $("#FirstName").val();
        var MiddleName = $("#MiddleName").val();
        var LastName = $("#LastName").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var Check = $("#Check").is(':checked');
        var Discription = $("#Discription").val();
        var AgreementOnTransfer = $("#AgreementOnTransfer").is(':checked');
        var ProcessingOfPersonalData = $("#ProcessingOfPersonalData").is(':checked');
        var Reference = $("#Reference").is(':checked');
        var Policy = $("#Policy").is(':checked');
        var Photo = $("#Photo").val();
        var PassportCopy = $("#PassportCopy").val();
        var INN = $("#INN").val();
        var SNILS = $("#SNILS").val();
        var DocNumber = $("#DocNumber").val();
        var CityName = $("#CityName").val();
        var MethodOfAdmissionID = $("#MethodOfAdmissionID").val();
        var Payment = $("#Payment").is(':checked');
        var WayOfLearning = $("#WayOfLearning").is(':checked');
        var Interview = $("#Interview").val();
        var BallExtraPoints = $("#BallExtraPoints").val();
        var UniversityName = $("#UniversityName").val();
        var Speciality = $("#Speciality").val();
        var MotherFirstName = $("#MotherFirstName").val();
        var MotherMiddleName = $("#MotherMiddleName").val();
        var MotherLastName = $("#MotherLastName").val();
        var MotherPhoneNumber = $("#MotherPhoneNumber").val();
        var FatherFirstName = $("#FatherFirstName").val();
        var FatherMiddleName = $("#FatherMiddleName").val();
        var FatherLastName = $("#FatherLastName").val();
        var FatherPhoneNumber = $("#FatherPhoneNumber").val();
        var FirstDirection = $("#FirstDirection").val();
        var SecondDirection = $("#SecondDirection").val();
        var ThirdDirection = $("#ThirdDirection").val();
        $.ajax({url:"http://localhost:3001/MasterInsert", data:{
            FirstName: FirstName,
            MiddleName: MiddleName,
            LastName: LastName,
            PhoneNumber: PhoneNumber,
            Check: Check,
            Discription: Discription,
            AgreementOnTransfer: AgreementOnTransfer,
            ProcessingOfPersonalData: ProcessingOfPersonalData,
            Reference: Reference,
            Policy: Policy,
            Photo: Photo,
            PassportCopy: PassportCopy,
            INN: INN,
            SNILS: SNILS,
            DocNumber: DocNumber,
            CityName: CityName,
            MethodOfAdmissionID: MethodOfAdmissionID,
            Payment: Payment,
            WayOfLearning: WayOfLearning,
            Interview: Interview,
            BallExtraPoints: BallExtraPoints,
            UniversityName: UniversityName,
            Speciality: Speciality,
            MotherFirstName: MotherFirstName,
            MotherMiddleName: MotherMiddleName,
            MotherLastName: MotherLastName,
            MotherPhoneNumber: MotherPhoneNumber,
            FatherFirstName: FatherFirstName,
            FatherMiddleName: FatherMiddleName,
            FatherLastName: FatherLastName,
            FatherPhoneNumber: FatherPhoneNumber,
            FirstDirection: FirstDirection,
            SecondDirection: SecondDirection,
            ThirdDirection: ThirdDirection,
        }, success: function (data) {
            $("#FirstName").val('');
            $("#MiddleName").val('');
            $("#LastName").val('');
            $("#PhoneNumber").val('');
            $("#Check").prop('checked', false);
            $("#Discription").val('');
            $("#AgreementOnTransfer").prop('checked', false);
            $("#ProcessingOfPersonalData").prop('checked', false);
            $("#Reference").prop('checked', false);
            $("#Policy").prop('checked', false);
            $("#Photo").val('');
            $("#PassportCopy").val('');
            $("#INN").val('');
            $("#SNILS").val('');
            $("#DocNumber").val('');
            $("#CityName").val('');
            $("#MethodOfAdmissionID").val('0');
            $("#Payment").prop('checked', false);
            $("#WayOfLearning").prop('checked', false);
            $("#Interview").val('');
            $("#BallExtraPoints").val('');
            $("#UniversityName").val('');
            $("#Speciality").val('');
            $("#MotherFirstName").val('');
            $("#MotherMiddleName").val('');
            $("#MotherLastName").val('');
            $("#MotherPhoneNumber").val('');
            $("#FatherFirstName").val('');
            $("#FatherMiddleName").val('');
            $("#FatherLastName").val('');
            $("#FatherPhoneNumber").val('');
            $("#FirstDirection").val('0');
            $("#SecondDirection").val('0');
            $("#ThirdDirection").val('0');
            console.log(data);
            var jsondate = data;
            f += '</h3>';
            if (jsondate.status)
            { f += 'Магистр ' + LastName + ' ' + FirstName + ' ' + MiddleName + ' добавлен </h3>'; }
            else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
            bootbox.alert(f);
            //$("#Conlusion").html(f);
        },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    }, '"Добавление человека"')
};



var PSInsert = function () {
    confirm(function(){
        console.log("ready!"); var f = '';
        var f = '';
        var LastName = $("#LastName").val();
        var FirstName = $("#FirstName").val();
        var MiddleName = $("#MiddleName").val();
        var PhoneNumber = $("#PhoneNumber").val();
        var Check = $("#Check").is(':checked');
        var Discription = $("#Discription").val();
        var AgreementOnTransfer = $("#AgreementOnTransfer").is(':checked');
        var ProcessingOfPersonalData = $("#ProcessingOfPersonalData").is(':checked');
        var Reference = $("#Reference").is(':checked');
        var Policy = $("#Policy").is(':checked');
        var Photo = $("#Photo").val();
        var PassportCopy = $("#PassportCopy").val();
        var INN = $("#INN").val();
        var SNILS = $("#SNILS").val();
        var DocNumber = $("#DocNumber").val();
        var CityName = $("#CityName").val();
        var MethodOfAdmissionID = $("#MethodOfAdmissionID").val();
        var BallPhilosophy = $("#BallPhilosophy").val();
        var BallEnglish = $("#BallEnglish").val();
        var BallSpecial = $("#BallSpecial").val();
        var UniversityName = $("#UniversityName").val();
        var Speciality = $("#Speciality").val();
        var MotherFirstName = $("#MotherFirstName").val();
        var MotherMiddleName = $("#MotherMiddleName").val();
        var MotherLastName = $("#MotherLastName").val();
        var MotherPhoneNumber = $("#MotherPhoneNumber").val();
        var FatherFirstName = $("#FatherFirstName").val();
        var FatherMiddleName = $("#FatherMiddleName").val();
        var FatherLastName = $("#FatherLastName").val();
        var FatherPhoneNumber = $("#FatherPhoneNumber").val();
        $.ajax({url:"http://localhost:3001/PSInsert", data:{
            LastName: LastName,
            FirstName: FirstName,
            MiddleName: MiddleName,
            PhoneNumber: PhoneNumber,
            Check: Check,
            Discription: Discription,
            AgreementOnTransfer: AgreementOnTransfer,
            ProcessingOfPersonalData: ProcessingOfPersonalData,
            Reference: Reference,
            Policy: Policy,
            Photo: Photo,
            PassportCopy: PassportCopy,
            INN: INN,
            SNILS: SNILS,
            DocNumber: DocNumber,
            CityName: CityName,
            MethodOfAdmissionID: MethodOfAdmissionID,
            BallPhilosophy: BallPhilosophy,
            BallEnglish: BallEnglish,
            BallSpecial: BallSpecial,
            UniversityName: UniversityName,
            Speciality: Speciality,
            MotherFirstName: MotherFirstName,
            MotherMiddleName: MotherMiddleName,
            MotherLastName: MotherLastName,
            MotherPhoneNumber: MotherPhoneNumber,
            FatherFirstName: FatherFirstName,
            FatherMiddleName: FatherMiddleName,
            FatherLastName: FatherLastName,
            FatherPhoneNumber: FatherPhoneNumber,
        }, success: function (data) {
            $("#LastName").val('');
            $("#FirstName").val('');
            $("#MiddleName").val('');
            $("#PhoneNumber").val('');
            $("#Check").prop('checked', false);
            $("#Discription").val('');
            $("#AgreementOnTransfer").prop('checked', false);
            $("#ProcessingOfPersonalData").prop('checked', false);
            $("#Reference").prop('checked', false);
            $("#Policy").prop('checked', false);
            $("#Photo").val('');
            $("#PassportCopy").val('');
            $("#INN").val('');
            $("#SNILS").val('');
            $("#DocNumber").val('');
            $("#CityName").val('');
            $("#MethodOfAdmissionID").val('0');
            $("#BallPhilosophy").val('');
            $("#BallEnglish").val('');
            $("#BallSpecial").val('');
            $("#UniversityName").val('');
            $("#Speciality").val('');
            $("#MotherFirstName").val('');
            $("#MotherMiddleName").val('');
            $("#MotherLastName").val('');
            $("#MotherPhoneNumber").val('');
            $("#FatherFirstName").val('');
            $("#FatherMiddleName").val('');
            $("#FatherLastName").val('');
            $("#FatherPhoneNumber").val('');
            console.log(data);
            var jsondate = data;
            f += '</h3>';
            if (jsondate.status)
            { f += 'Аспирант ' + LastName + ' ' + FirstName + ' ' + MiddleName + ' добавлен </h3>'; }
            else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
            bootbox.alert(f);
            //$("#Conlusion").html(f);
        },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', getCookie('Authorization'));
            },
            error: function (error) {
                console.log(error);
                if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                bootbox.alert(f);
            }
        });
    },'"Добавление человека"')
};

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                                     /////////////////////////////
////////////////////////    ИНФА ПО МАГИСТРАМ И АСПИРАНТАМ   /////////////////////////////
////////////////////////                                     /////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

var MasterBriefInformation = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/MasterBriefInformation",
        success:function (data) {
            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Университет</th><th>Специальность</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th></tr></thead><tbody>';
            for (var i = 0; i < data.recordset.length; i++) {
                s += '<tr><th scope="row">' + (i + 1) + '</th>';
                $.each(data.recordset[i], function (key, val) {
                    if (key != 'PersonID')
                    { s += '<td>' + val + '</td>'; }
                })
                s += '</tr>';
            };

            s += '</tbody></table>';

            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};



var PSBriefInformation = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/PostgradulateStudentBriefInformation",
        success:function (data) {
            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Университет</th><th>Специальность</th><th>Баллы философия</th><th>Баллы английский</th><th>Специальные баллы</th><th>Сумма баллов</th></tr></thead><tbody>';
            for (var i = 0; i < data.recordset.length; i++) {
                s += '<tr><th scope="row">' + (i + 1) + '</th>';
                $.each(data.recordset[i], function (key, val) {
                    if (key != 'PersonID')
                    { s += '<td>' + val + '</td>'; }
                })
                s += '</tr>';
            };

            s += '</tbody></table>';

            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                                     /////////////////////////////
////////////////////////         Бакалавры с обществом       /////////////////////////////
////////////////////////                                     /////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

var BachelorSocialSciense = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({url:"http://localhost:3001/BachelorSocialSciense",
        success:function (data) {
            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>#</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Сумма с обществознанием</th><th>Аттестат</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Комментарий</th><th>Метод поступления</th></tr></thead><tbody>';
            for (var i = 0; i < data.recordset.length; i++) {
                s += '<tr><th scope="row">' + (i + 1) + '</th>';
                $.each(data.recordset[i], function (key, val) {
                    if (key != 'PersonID')
                    { s += '<td>' + val + '</td>'; }
                })
                s += '</tr>';
            };

            s += '</tbody></table>';

            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};



var DuplicateUpdate = function () {
    confirm(function(){
        console.log("ready!"); var f = '';
        var f = '';
        $.ajax(
            {
                url:"http://localhost:3001/DuplicateUpdate",
                success:function (data) {
                    console.log(data);
                    var jsondate = data;
                    f += '</h3>';
                    if (jsondate.status)
                    { f += 'Черновик обновлен </h3>'; }
                    else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
                    bootbox.alert(f);
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', getCookie('Authorization'));
                },
                error: function (error) {
                    console.log(error);
                    if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
                    bootbox.alert(f);
                }
            });
    }, '"обновление черновика"')
    };


function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


var Bachelor = function (id) {
    console.log("ready!");
    var f = '';
    var s = '';
    $.ajax({
        url: "http://localhost:3001/Bachelor",
        data:{PersonID: id},
        success: function (data) {
            var MethodOfAdmissionID;
            var FirstDirection;
            var SecondDirection;
            var ThirdDirection;
            if (data.recordset[0].MethodName == 'БЕЗ ЭКЗАМЕНОВ') MethodOfAdmissionID = 1;
            if (data.recordset[0].MethodName == 'КВОТА') MethodOfAdmissionID = 2;
            if (data.recordset[0].MethodName == 'ЦЕЛЕВОЕ') MethodOfAdmissionID = 3;
            if (data.recordset[0].MethodName == 'КОНКУРС') MethodOfAdmissionID = 4;
            if (data.recordset[0].FirstDirection == 'ПИ') FirstDirection = 1;
            if (data.recordset[0].FirstDirection == 'КБ') FirstDirection = 2;
            if (data.recordset[0].FirstDirection == 'ФИИТ') FirstDirection = 3;
            if (data.recordset[0].FirstDirection == 'МОАИС') FirstDirection = 4;
            if (data.recordset[0].FirstDirection == 'ИВТ') FirstDirection = 5;
            if (data.recordset[0].FirstDirection == 'САУ') FirstDirection = 6;
            if (data.recordset[0].SecondDirection == 'ПИ') SecondDirection = 1;
            if (data.recordset[0].SecondDirection == 'КБ') SecondDirection = 2;
            if (data.recordset[0].SecondDirection == 'ФИИТ') SecondDirection = 3;
            if (data.recordset[0].SecondDirection == 'МОАИС') SecondDirection = 4;
            if (data.recordset[0].SecondDirection == 'ИВТ') SecondDirection = 5;
            if (data.recordset[0].SecondDirection == 'САУ') SecondDirection = 6;
            if (data.recordset[0].ThirdDirection == 'ПИ') ThirdDirection = 1;
            if (data.recordset[0].ThirdDirection == 'КБ') ThirdDirection = 2;
            if (data.recordset[0].ThirdDirection == 'ФИИТ') ThirdDirection = 3;
            if (data.recordset[0].ThirdDirection == 'МОАИС') ThirdDirection = 4;
            if (data.recordset[0].ThirdDirection == 'ИВТ') ThirdDirection = 5;
            if (data.recordset[0].ThirdDirection == 'САУ') ThirdDirection = 6;
            $("#FirstName").val(data.recordset[0].FirstName);
            $("#MiddleName").val(data.recordset[0].MiddleName);
            $("#LastName").val(data.recordset[0].LastName);
            $("#PhoneNumber").val(data.recordset[0].PhoneNumber)
            $("#Check").attr('checked', data.recordset[0].Check)
            $("#Discription").val(data.recordset[0].Discription)
            $("#AgreementOnTransfer").attr('checked', data.recordset[0].AgreementOnTransfer)
            $("#ProcessingOfPersonalData").attr('checked', data.recordset[0].ProcessingOfPersonalData)
            $("#Reference").attr('checked', data.recordset[0].Reference)
            $("#Policy").attr('checked', data.recordset[0].Policy)
            $("#Photo").val(data.recordset[0].Photo)
            $("#PassportCopy").val(data.recordset[0].PassportCopy)
            $("#INN").val(data.recordset[0].INN)
            $("#SNILS").val(data.recordset[0].SNILS)
            $("#DocNumber").val(data.recordset[0].DocNumber)
            $("#CityName").val(data.recordset[0].CityName)
            $("#MethodOfAdmissionID").val(MethodOfAdmissionID);
            $("#SchoolName").val(data.recordset[0].SchoolName);
            $("#SchoolCityName").val(data.recordset[0].SchoolCity);
            $("#Certificate").attr('checked', data.recordset[0].Certificate)
            $("#Payment").attr('checked', data.recordset[0].Payment)
            $("#WayOfLearning").attr('checked', data.recordset[0].WayOfLearning)
            $("#BallRussian").val(data.recordset[0].BallRussian);
            $("#BallMathematics").val(data.recordset[0].BallMathematics);
            $("#BallInformatics").val(data.recordset[0].BallInformatics);
            $("#BallPhysics").val(data.recordset[0].BallPhysics);
            $("#BallSocialSciense").val(data.recordset[0].BallSocialSciense);
            $("#BallExtraPoints").val(data.recordset[0].BallExtraPoints);
            $("#FirstDirection").val(FirstDirection);
            $("#SecondDirection").val(SecondDirection);
            $("#ThirdDirection").val(ThirdDirection);
            $("#MotherFirstName").val(data.recordset[0].MotherFirstName);
            $("#MotherMiddleName").val(data.recordset[0].MotherMiddleName);
            $("#MotherLastName").val(data.recordset[0].MotherLastName);
            $("#FatherFirstName").val(data.recordset[0].FatherFirstName);
            $("#FatherMiddleName").val(data.recordset[0].FatherMiddleName);
            $("#FatherLastName").val(data.recordset[0].FatherLastName);
            $("#MotherPhoneNumber").val(data.recordset[0].MotherPhoneNumber);
            $("#FatherPhoneNumber").val(data.recordset[0].FatherPhoneNumber);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


var Master = function (id) {
    console.log("ready!");
    var f = '';
    var s = '';
    $.ajax({
        url: "http://localhost:3001/Master",
        data: { PersonID: id },
        success: function (data) {
            var MethodOfAdmissionID;
            var FirstDirection;
            var SecondDirection;
            var ThirdDirection;
            if (data.recordset[0].MethodName == 'БЕЗ ЭКЗАМЕНОВ') MethodOfAdmissionID = 1;
            if (data.recordset[0].MethodName == 'КВОТА') MethodOfAdmissionID = 2;
            if (data.recordset[0].MethodName == 'ЦЕЛЕВОЕ') MethodOfAdmissionID = 3;
            if (data.recordset[0].MethodName == 'КОНКУРС') MethodOfAdmissionID = 4;
            if (data.recordset[0].FirstDirection == 'ИВТ') FirstDirection = 5;
            if (data.recordset[0].FirstDirection == 'ПМИ') FirstDirection = 7;
            if (data.recordset[0].FirstDirection == 'ПЕД ОБР') FirstDirection = 8;
            if (data.recordset[0].SecondDirection == 'ИВТ') SecondDirection = 5;
            if (data.recordset[0].SecondDirection == 'ПМИ') SecondDirection = 7;
            if (data.recordset[0].SecondDirection == 'ПЕД ОБР') SecondDirection = 8;
            if (data.recordset[0].ThirdDirection == 'ИВТ') ThirdDirection = 5;
            if (data.recordset[0].ThirdDirection == 'ПМИ') ThirdDirection = 7;
            if (data.recordset[0].ThirdDirection == 'ПЕД ОБР') ThirdDirection = 8;
            $("#FirstName").val(data.recordset[0].FirstName);
            $("#MiddleName").val(data.recordset[0].MiddleName);
            $("#LastName").val(data.recordset[0].LastName);
            $("#PhoneNumber").val(data.recordset[0].PhoneNumber);
            $("#Check").attr('checked', data.recordset[0].Check)
            $("#Discription").val(data.recordset[0].Discription);
            $("#AgreementOnTransfer").attr('checked', data.recordset[0].AgreementOnTransfer)
            $("#ProcessingOfPersonalData").attr('checked', data.recordset[0].ProcessingOfPersonalData)
            $("#Reference").attr('checked', data.recordset[0].Reference)
            $("#Policy").attr('checked', data.recordset[0].Policy)
            $("#Photo").val(data.recordset[0].Photo);
            $("#PassportCopy").val(data.recordset[0].PassportCopy);
            $("#INN").val(data.recordset[0].INN);
            $("#SNILS").val(data.recordset[0].SNILS);
            $("#DocNumber").val(data.recordset[0].DocNumber);
            $("#CityName").val(data.recordset[0].CityName);
            $("#MethodOfAdmissionID").val(MethodOfAdmissionID);
            $("#Payment").attr('checked', data.recordset[0].Payment)
            $("#WayOfLearning").attr('checked', data.recordset[0].WayOfLearning)
            $("#Interview").val(data.recordset[0].Interview);
            $("#BallExtraPoints").val(data.recordset[0].BallExtraPoints);
            $("#UniversityName").val(data.recordset[0].UniversityName);
            $("#Speciality").val(data.recordset[0].Speciality);
            $("#MotherFirstName").val(data.recordset[0].MotherFirstName);
            $("#MotherMiddleName").val(data.recordset[0].MotherMiddleName);
            $("#MotherLastName").val(data.recordset[0].MotherLastName);
            $("#MotherPhoneNumber").val(data.recordset[0].MotherPhoneNumber);
            $("#FatherFirstName").val(data.recordset[0].FatherFirstName);
            $("#FatherMiddleName").val(data.recordset[0].FatherMiddleName);
            $("#FatherLastName").val(data.recordset[0].FatherLastName);
            $("#FatherPhoneNumber").val(data.recordset[0].FatherPhoneNumber);
            $("#FirstDirection").val(FirstDirection);
            $("#SecondDirection").val(SecondDirection);
            $("#ThirdDirection").val(ThirdDirection);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


var PS = function (id) {
    console.log("ready!");
    var f = '';
    var s = '';
    $.ajax({
        url: "http://localhost:3001/PS",
        data: { PersonID: id },
        success: function (data) {
            var MethodOfAdmissionID;
            var FirstDirection;
            var SecondDirection;
            var ThirdDirection;
            if (data.recordset[0].MethodName == 'БЕЗ ЭКЗАМЕНОВ') MethodOfAdmissionID = 1;
            if (data.recordset[0].MethodName == 'КВОТА') MethodOfAdmissionID = 2;
            if (data.recordset[0].MethodName == 'ЦЕЛЕВОЕ') MethodOfAdmissionID = 3;
            if (data.recordset[0].MethodName == 'КОНКУРС') MethodOfAdmissionID = 4;
            $("#LastName").val(data.recordset[0].LastName);
            $("#FirstName").val(data.recordset[0].FirstName);
            $("#MiddleName").val(data.recordset[0].MiddleName);
            $("#PhoneNumber").val(data.recordset[0].PhoneNumber);
            $("#Check").attr('checked', data.recordset[0].Check);
            $("#Discription").val(data.recordset[0].Discription);
            $("#AgreementOnTransfer").attr('checked', data.recordset[0].AgreementOnTransfer)
            $("#ProcessingOfPersonalData").attr('checked', data.recordset[0].ProcessingOfPersonalData)
            $("#Reference").attr('checked', data.recordset[0].Reference)
            $("#Policy").attr('checked', data.recordset[0].Policy)
            $("#Photo").val(data.recordset[0].Photo);
            $("#PassportCopy").val(data.recordset[0].PassportCopy);
            $("#INN").val(data.recordset[0].INN);
            $("#SNILS").val(data.recordset[0].SNILS);
            $("#DocNumber").val(data.recordset[0].DocNumber);
            $("#CityName").val(data.recordset[0].CityName);
            $("#MethodOfAdmissionID").val(MethodOfAdmissionID);
            $("#BallPhilosophy").val(data.recordset[0].BallPhilosophy);
            $("#BallEnglish").val(data.recordset[0].BallEnglish);
            $("#BallSpecial").val(data.recordset[0].BallSpecial);
            $("#UniversityName").val(data.recordset[0].UniversityName);
            $("#Speciality").val(data.recordset[0].Speciality);
            $("#MotherFirstName").val(data.recordset[0].MotherFirstName);
            $("#MotherMiddleName").val(data.recordset[0].MotherMiddleName);
            $("#MotherLastName").val(data.recordset[0].MotherLastName);
            $("#MotherPhoneNumber").val(data.recordset[0].MotherPhoneNumber);
            $("#FatherFirstName").val(data.recordset[0].FatherFirstName);
            $("#FatherMiddleName").val(data.recordset[0].FatherMiddleName);
            $("#FatherLastName").val(data.recordset[0].FatherLastName);
            $("#FatherPhoneNumber").val(data.recordset[0].FatherPhoneNumber);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

var confirm = function(foo, action){
    bootbox.confirm({
        message: "Подтвердите действие " + action,
        buttons: {
            confirm: {
                label: 'Продолжить',
                className: 'btn-success'
            },
            cancel: {
                label: 'Отмена',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) { foo();}
        }
    });
}

//SELECT DELETED

var BachelorDeleted = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({
        url: "http://localhost:3001/BachelorDeleted", success: function (data) {
            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Дата удаления</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Телефонный номер</th><th>ПРОВЕРЕН</th><th>Комментарий</th><th>Согласие на зачисление</th><th>Согласие на обработку персональных данных</th><th>Справка</th><th>Полис</th><th>Количество фото</th><th>Количество копий паспорта</th><th>ИНН</th><th>СНИЛС</th><th>Номер Дела</th><th>Город</th><th>Способ поступления</th><th>Школа</th><th>Город школы</th><th>Оригинал Аттестата</th><th>Подавал на бюжет</th><th>ОЧНОЕ образование</th><th>Баллы русский</th><th>Баллы математика</th><th>Баллы информатика</th><th>Баллы физика</th><th>Баллы обществознание</th><th>Экстра баллы</th><th>Первое направление</th><th>Второе направление</th><th>Третье направление</th><th>Имя мамы</th><th>Отчество мамы</th><th>Фамилия мамы</th><th>Имя папы</th><th>Отчество папы</th><th>Фамилия папы</th><th>Телефон мамы</th><th>Телефон папы</th></tr></thead><tbody>';
            for (var i = 0; i < data.recordset.length; i++) {
                s += '<tr>';
                $.each(data.recordset[i], function (key, val) {
                    if (key != 'PersonID') {
                        if ((key == 'Check') || (key == 'AgreementOnTransfer') || (key == 'ProcessingOfPersonalData') || (key == 'Reference') || (key == 'Policy') || (key == 'Certificate') || (key == 'Payment') || (key == 'WayOfLearning')) {
                            if (val == true)
                                s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                            else
                                s += '<td> <input type = "checkbox" disabled/></td>';
                        }
                        else
                            if (key == 'Discription') {
                                s += '<td> <textarea cols = 40 rows = 8 disabled>' + val + '</textarea>' + '</td>';
                            }
                            else s += '<td>' + val + '</td>';

                    }
                })
                s += '</tr>';
            };

            s += '</tbody></table>';

            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};



var MasterDeleted = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({
        url: "http://localhost:3001/MasterDeleted", success: function (data) {
            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Дата удаления</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Телефонный номер</th><th>ПРОВЕРЕН</th><th>Комментарий</th><th>Согласие на зачисление</th><th>Согласие на обработку персональных данных</th><th>Справка</th><th>Полис</th><th>Количество фото</th><th>Количество копий паспорта</th><th>ИНН</th><th>СНИЛС</th><th>Номер Дела</th><th>Город</th><th>Способ поступления</th><th>Подавал на бюджет</th><th>Подавал на ОЧНОЕ</th><th>Интервью</th><th>Экстра баллы</th><th>Университет</th><th>Специальность</th><th>Имя мамы</th><th>Отчество мамы</th><th>Фамилия мамы</th><th>Телефон мамы</th><th>Имя папы</th><th>Отчество папы</th><th>Фамилия папы</th><th>Телефон папы</th><th>Первое нарпавление</th><th>Второе направление</th><th>Третье направление</th></tr></thead><tbody>';
            for (var i = 0; i < data.recordset.length; i++) {
                s += '<tr>';
                $.each(data.recordset[i], function (key, val) {
                    if (key != 'PersonID') {
                        if ((key == 'Check') || (key == 'AgreementOnTransfer') || (key == 'ProcessingOfPersonalData') || (key == 'Reference') || (key == 'Policy') || (key == 'Certificate') || (key == 'Payment') || (key == 'WayOfLearning')) {
                            if (val == true)
                                s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                            else
                                s += '<td> <input type = "checkbox" disabled/></td>';
                        }
                        else
                            if ((key == 'Discription') || (key == 'Interview')) {
                                s += '<td> <textarea cols = 40 rows = 8 disabled>' + val + '</textarea>' + '</td>';
                            }
                            else s += '<td>' + val + '</td>';
                    }
                })
                s += '</tr>';
            };

            s += '</tbody></table>';

            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};


var PSDeleted = function () {
    console.log("ready!"); var f = '';
    var s = '';
    $.ajax({
        url: "http://localhost:3001/PSDeleted", success: function (data) {
            s += '<table class="table table-striped"><thead class="thead-inverse"><tr><th>Дата удаления</th><th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Телефонный номер</th><th>ПРОВЕРЕН</th><th>Комментарий</th><th>Согласие на зачисление</th><th>Согласие на обработку персональных данных</th><th>Справка</th><th>Полис</th><th>Количество фото</th><th>Количество копий паспорта</th><th>ИНН</th><th>СНИЛС</th><th>Номер Дела</th><th>Город</th><th>Способ поступления</th><th>Баллы философия</th><th>Баллы английский</th><th>Специальные баллы</th><th>Университет</th><th>Специальность</th><th>Имя мамы</th><th>Отчество мамы</th><th>Фамилия мамы</th><th>Телефон мамы</th><th>Имя папы</th><th>Отчество папы</th><th>Фамилия папы</th><th>Телефон папы</th></tr></thead><tbody>';
            for (var i = 0; i < data.recordset.length; i++) {
                s += '<tr>';
                $.each(data.recordset[i], function (key, val) {
                    if (key != 'PersonID') {
                        if ((key == 'Check') || (key == 'AgreementOnTransfer') || (key == 'ProcessingOfPersonalData') || (key == 'Reference') || (key == 'Policy') || (key == 'Certificate') || (key == 'Payment') || (key == 'WayOfLearning')) {
                            if (val == true)
                                s += '<td> <input type = "checkbox" checked ="checked" disabled/></td>';
                            else
                                s += '<td> <input type = "checkbox" disabled/></td>';
                        }
                        else
                            if ((key == 'Discription') || (key == 'Interview')) {
                                s += '<td> <textarea cols = 40 rows = 8 disabled>' + val + '</textarea>' + '</td>';
                            }
                            else s += '<td>' + val + '</td>';
                    }
                })
                s += '</tr>';
            };

            s += '</tbody></table>';

            $("#div").html(s);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', getCookie('Authorization'));
        },
        error: function (error) {
            console.log(error);
            if (error.status == 401) f += '<h3>Ошибка авторизации</h3>'
            bootbox.alert(f);
        }
    });
};

/*
var Auth = function () {
    console.log("ready!"); var f = '';
    var f = '';
    var Login = $("#Login").val();
    var Password = $("#Password").val();
    var basicAuthorization = 'Basic ' + btoa(Login + ":" + Password);
    $.ajax({
        url: "http://localhost:3001/Auth",
        type: "POST",
        data: { Login: Login, Password: Password },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', basicAuthorization);
        },
        success: function (data) {
            console.log(data);
            var jsondate = data;
            f += '</h3>';
            if (jsondate.status) {
                document.cookie = "Authorization=" + basicAuthorization;
                f += 'Успешно!</h3>';
            }
            else { f += 'Произошла ошибка: ' + jsondate.originalError.info.message + '</h3>'; }
            bootbox.alert(f);
        }
    });
};
*/