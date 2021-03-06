

///////////////////////////////////////
//КВОТА ЦЕЛЕВОЕ И БЕЗ ЭКЗАМЕНОВ ВЫБОРКИ
///////////////////////////////////////

var confirm = function (foo, action) {
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
            if (result) { foo(); }
        }
    });
}

var BachelorNoExamsDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#NoExams").val();
        if ((DecreeNumber == '') || (DecreeProtocol == '') || (DecreeName == '') || (DecreeDateYear == '') || (DecreeDateMonth == '') || (DecreeDateDay == '')) {
            bootbox.alert('Заполните все поля!');
            return;
        }
        $.ajax({
            url: "http://localhost:3001/BachelorNoExamsDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                NoExams: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochNoExamsDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#NoExams").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorZaochNoExamsDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                NoExams: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorNoExamsDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#NoExams").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorNoExamsDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                NoExams: bar
            }, success: function (data) {
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochNoExamsDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#NoExams").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorZaochNoExamsDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                NoExams: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorKvotaDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Kvota").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorKvotaDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Kvota: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochKvotaDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Kvota").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorZaochKvotaDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Kvota: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorKvotaDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Kvota").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorKvotaDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Kvota: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochKvotaDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Kvota").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorZaochKvotaDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Kvota: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};


var BachelorCelevoeDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Celevoe").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorCelevoeDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Celevoe: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochCelevoeDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Celevoe").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorZaochCelevoeDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Celevoe: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};


var BachelorCelevoeDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Celevoe").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorCelevoeDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Celevoe: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochCelevoeDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
        var bar = $("#Celevoe").val();
        console.log(bar);
        $.ajax({
            url: "http://localhost:3001/BachelorZaochCelevoeDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
                Celevoe: bar
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};
/////////////////////
//Current RANK DecreeInsert NoExams, Kvota, Celevoe, PI, KB, FIIT, MOAIS, IVT, SAU, TotalQuantity, OnlyOriginal
////////////////////
var BachelorCurrentRankKonkursDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
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
        var PISelect = $("#PISelect").is(':checked');
        var KBSelect = $("#KBSelect").is(':checked');
        var FIITSelect = $("#FIITSelect").is(':checked');
        var MOAISSelect = $("#MOAISSelect").is(':checked');
        var IVTSelect = $("#IVTSelect").is(':checked');
        var SAUSelect = $("#SAUSelect").is(':checked');
        $.ajax({
            url: "http://localhost:3001/BachelorCurrentRankKonkursDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
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
                PISelect: PISelect,
                KBSelect: KBSelect,
                FIITSelect: FIITSelect,
                MOAISSelect: MOAISSelect,
                IVTSelect: IVTSelect,
                SAUSelect: SAUSelect
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                $("#PISelect").prop('checked', false);
                $("#KBSelect").prop('checked', false);
                $("#FIITSelect").prop('checked', false);
                $("#MOAISSelect").prop('checked', false);
                $("#IVTSelect").prop('checked', false);
                $("#SAUSelect").prop('checked', false);
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochCurrentRankKonkursDecreeInsert = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
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
        var PISelect = $("#PISelect").is(':checked');
        var KBSelect = $("#KBSelect").is(':checked');
        var FIITSelect = $("#FIITSelect").is(':checked');
        var MOAISSelect = $("#MOAISSelect").is(':checked');
        var IVTSelect = $("#IVTSelect").is(':checked');
        var SAUSelect = $("#SAUSelect").is(':checked');
        $.ajax({
            url: "http://localhost:3001/BachelorZaochCurrentRankKonkursDecreeInsert", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
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
                PISelect: PISelect,
                KBSelect: KBSelect,
                FIITSelect: FIITSelect,
                MOAISSelect: MOAISSelect,
                IVTSelect: IVTSelect,
                SAUSelect: SAUSelect
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                $("#PISelect").prop('checked', false);
                $("#KBSelect").prop('checked', false);
                $("#FIITSelect").prop('checked', false);
                $("#MOAISSelect").prop('checked', false);
                $("#IVTSelect").prop('checked', false);
                $("#SAUSelect").prop('checked', false);
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorCurrentRankKonkursDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
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
        var PISelect = $("#PISelect").is(':checked');
        var KBSelect = $("#KBSelect").is(':checked');
        var FIITSelect = $("#FIITSelect").is(':checked');
        var MOAISSelect = $("#MOAISSelect").is(':checked');
        var IVTSelect = $("#IVTSelect").is(':checked');
        var SAUSelect = $("#SAUSelect").is(':checked');
        $.ajax({
            url: "http://localhost:3001/BachelorCurrentRankKonkursDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
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
                PISelect: PISelect,
                KBSelect: KBSelect,
                FIITSelect: FIITSelect,
                MOAISSelect: MOAISSelect,
                IVTSelect: IVTSelect,
                SAUSelect: SAUSelect
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                $("#PISelect").prop('checked', false);
                $("#KBSelect").prop('checked', false);
                $("#FIITSelect").prop('checked', false);
                $("#MOAISSelect").prop('checked', false);
                $("#IVTSelect").prop('checked', false);
                $("#SAUSelect").prop('checked', false);
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};

var BachelorZaochCurrentRankKonkursDecreeInsertDuplicate = function () {
    confirm(function () {
        console.log("ready!");
        var DecreeNumber = $('#DecreeNumber').val();
        var DecreeProtocol = $('#DecreeProtocol').val();
        var DecreeName = $('#DecreeName').val();
        var DecreeDateYear = $('#DecreeDateYear').val();
        var DecreeDateMonth = $('#DecreeDateMonth').val();
        var DecreeDateDay = $('#DecreeDateDay').val();
        var f = '';
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
        var PISelect = $("#PISelect").is(':checked');
        var KBSelect = $("#KBSelect").is(':checked');
        var FIITSelect = $("#FIITSelect").is(':checked');
        var MOAISSelect = $("#MOAISSelect").is(':checked');
        var IVTSelect = $("#IVTSelect").is(':checked');
        var SAUSelect = $("#SAUSelect").is(':checked');
        $.ajax({
            url: "http://localhost:3001/BachelorZaochCurrentRankKonkursDecreeInsertDuplicate", data: {
                DecreeNumber: DecreeNumber,
                DecreeProtocol: DecreeProtocol,
                DecreeName: DecreeName,
                DecreeDateYear: DecreeDateYear,
                DecreeDateMonth: DecreeDateMonth,
                DecreeDateDay: DecreeDateDay,
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
                PISelect: PISelect,
                KBSelect: KBSelect,
                FIITSelect: FIITSelect,
                MOAISSelect: MOAISSelect,
                IVTSelect: IVTSelect,
                SAUSelect: SAUSelect
            }, success: function (data) {
                $('#DecreeNumber').val('');
                $('#DecreeProtocol').val('');
                $('#DecreeName').val('');
                $('#DecreeDateYear').val('');
                $('#DecreeDateMonth').val('');
                $('#DecreeDateDay').val('');
                $("#PISelect").prop('checked', false);
                $("#KBSelect").prop('checked', false);
                $("#FIITSelect").prop('checked', false);
                $("#MOAISSelect").prop('checked', false);
                $("#IVTSelect").prop('checked', false);
                $("#SAUSelect").prop('checked', false);
                console.log(data);
                var jsondate = data;
                f += '</h3>';
                if (jsondate.status)
                { f += 'Протокол с данными ' + ' ' + DecreeNumber + ' ' + DecreeProtocol + ' ' + DecreeName + ' ' + 'добавлен' + '</h3>'; }
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
    }, '"Добавление приказа"')
};