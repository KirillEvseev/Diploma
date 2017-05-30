var express = require('express');
var app = express();



var basicAuth = require('express-basic-auth');
var fs = require('fs');



app.use(express.static(__dirname + '/ui'));

app.use(basicAuth({
    //users: { 'admin': 'admin' },
    authorizeAsync: true,
    authorizer: getAuthLib,
    unauthorizedResponse: function (req) { return fs.readFileSync('./ui/Auth.html', 'utf8'); }
}));

const sql = require("mssql");

var dbConfig = {
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    server: process.env.DBSERVER,
    port: process.env.DBPORT,
    database: process.env.DATABASE
};


function getAuthLib(Login, Password, callback) {
    const conn = new sql.ConnectionPool(dbConfig);
    conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Login', Login);
        req.input('Password', Password);
        req.execute('scc.usp_auth').then(function () {
            conn.close();
            callback(null,true);
        })
        .catch(function (err) {
            conn.close();
            callback(null, false);
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}



////////////////////////////////////////
//NoExams SELECT
////////////////////////////////////////


function getBachelorNoExamsSelect(bar, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_NoExams_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorNoExamsSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorNoExamsSelect(res, req.query.NoExams);
});


function getBachelorZaochNoExamsSelect(bar, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_Zaoch_NoExams_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochNoExamsSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochNoExamsSelect(res, req.query.NoExams);
});



function getBachelorNoExamsSelectDuplicate(bar, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_NoExams_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}


app.get('/BachelorNoExamsSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorNoExamsSelectDuplicate(res, req.query.NoExams);
});

function getBachelorZaochNoExamsSelectDuplicate(bar, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_Zaoch_NoExams_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochNoExamsSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochNoExamsSelectDuplicate(res, req.query.NoExams);
});

////////////////////////////////////////
//KVOTA SELECT
////////////////////////////////////////

function getBachelorKvotaSelect(bar, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Kvota_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorKvotaSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorKvotaSelect(res, req.query.Kvota);
});


function getBachelorKvotaSelectDuplicate(bar, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Kvota_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorKvotaSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorKvotaSelectDuplicate(res, req.query.Kvota);
});



function getBachelorZaochKvotaSelect(bar, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Zaoch_Kvota_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochKvotaSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochKvotaSelect(res, req.query.Kvota);
});


function getBachelorZaochKvotaSelectDuplicate(bar, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Zaoch_Kvota_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochKvotaSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochKvotaSelectDuplicate(res, req.query.Kvota);
});


////////////////////////////////////////
//Celevoe SELECT
////////////////////////////////////////

function getBachelorCelevoeSelect(bar, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Celevoe_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCelevoeSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCelevoeSelect(res, req.query.Celevoe);
});


function getBachelorCelevoeSelectDuplicate(bar, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Celevoe_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCelevoeSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCelevoeSelectDuplicate(res, req.query.Celevoe);
});



function getBachelorZaochCelevoeSelect(bar, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Zaoch_Celevoe_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCelevoeSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCelevoeSelect(res, req.query.Celevoe);
});


function getBachelorZaochCelevoeSelectDuplicate(bar, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Zaoch_Celevoe_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCelevoeSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCelevoeSelectDuplicate(res, req.query.Celevoe);
});




////////////////////////////////////////
//Current Rank SELECT
////////////////////////////////////////

function getBachelorCurrentRankKonkursSelect(bar, NoExams, Kvota, Celevoe, PI, KB, FIIT, MOAIS, IVT, SAU,TotalQuantity, OnlyOriginal, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('OnlyOriginal', sql.NVarChar, OnlyOriginal);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_CurrentRank_Konkurs_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCurrentRankKonkursSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCurrentRankKonkursSelect(res, req.query.NoExams, req.query.Kvota, req.query.Celevoe, req.query.PI, req.query.KB, req.query.FIIT, req.query.MOAIS, req.query.IVT, req.query.SAU, req.query.TotalQuantity, req.query.OnlyOriginal, req.query.PISelect, req.query.KBSelect, req.query.FIITSelect, req.query.MOAISSelect, req.query.IVTSelect, req.query.SAUSelect);
});

function getBachelorZaochCurrentRankKonkursSelect(bar, NoExams, Kvota, Celevoe, PI, KB, FIIT, MOAIS, IVT, SAU, TotalQuantity, OnlyOriginal, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('OnlyOriginal', sql.NVarChar, OnlyOriginal);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_Zaoch_CurrentRank_Konkurs_Select').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCurrentRankKonkursSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCurrentRankKonkursSelect(res, req.query.NoExams, req.query.Kvota, req.query.Celevoe, req.query.PI, req.query.KB, req.query.FIIT, req.query.MOAIS, req.query.IVT, req.query.SAU, req.query.TotalQuantity, req.query.OnlyOriginal, req.query.PISelect, req.query.KBSelect, req.query.FIITSelect, req.query.MOAISSelect, req.query.IVTSelect, req.query.SAUSelect);
});


function getBachelorCurrentRankKonkursSelectDuplicate(bar, NoExams, Kvota, Celevoe, PI, KB, FIIT, MOAIS, IVT, SAU, TotalQuantity, OnlyOriginal, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('OnlyOriginal', sql.NVarChar, OnlyOriginal);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_CurrentRank_Konkurs_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCurrentRankKonkursSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCurrentRankKonkursSelectDuplicate(res, req.query.NoExams, req.query.Kvota, req.query.Celevoe, req.query.PI, req.query.KB, req.query.FIIT, req.query.MOAIS, req.query.IVT, req.query.SAU, req.query.TotalQuantity, req.query.OnlyOriginal, req.query.PISelect, req.query.KBSelect, req.query.FIITSelect, req.query.MOAISSelect, req.query.IVTSelect, req.query.SAUSelect);
});


function getBachelorZaochCurrentRankKonkursSelectDuplicate(bar, NoExams, Kvota, Celevoe, PI, KB, FIIT, MOAIS, IVT, SAU, TotalQuantity, OnlyOriginal, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('OnlyOriginal', sql.NVarChar, OnlyOriginal);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_Zaoch_CurrentRank_Konkurs_Select_Duplicate').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCurrentRankKonkursSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCurrentRankKonkursSelectDuplicate(res, req.query.NoExams, req.query.Kvota, req.query.Celevoe, req.query.PI, req.query.KB, req.query.FIIT, req.query.MOAIS, req.query.IVT, req.query.SAU, req.query.TotalQuantity, req.query.OnlyOriginal, req.query.PISelect, req.query.KBSelect, req.query.FIITSelect, req.query.MOAISSelect, req.query.IVTSelect, req.query.SAUSelect);
});



////////////////////////////////////////
//NoExams DecreeInsert
////////////////////////////////////////


function getBachelorNoExamsDecreeInsert(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        const req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_NoExams_DecreeInsert').then(function () {
            bar.send({ status: 'okay' });
            conn.close();
        })
            .catch(function (err) {
                conn.close();
                bar.send(err);
            });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorNoExamsDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorNoExamsDecreeInsert(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.NoExams);
});


function getBachelorZaochNoExamsDecreeInsert(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_Zaoch_NoExams_DecreeInsert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochNoExamsDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochNoExamsDecreeInsert(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.NoExams);
});



function getBachelorNoExamsDecreeInsertDuplicate(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_NoExams_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}


app.get('/BachelorNoExamsDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorNoExamsDecreeInsertDuplicate(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.NoExams);
});

function getBachelorZaochNoExamsDecreeInsertDuplicate(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, NoExams) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.execute('scc.usp_Bachelor_Zaoch_NoExams_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochNoExamsDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochNoExamsDecreeInsertDuplicate(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.NoExams);
});

////////////////////////////////////////
//KVOTA DecreeInsert
////////////////////////////////////////

function getBachelorKvotaDecreeInsert(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Kvota_DecreeInsert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorKvotaDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorKvotaDecreeInsert(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Kvota);
});


function getBachelorKvotaDecreeInsertDuplicate(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Kvota_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorKvotaDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorKvotaDecreeInsertDuplicate(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Kvota);
});



function getBachelorZaochKvotaDecreeInsert(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Zaoch_Kvota_DecreeInsert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochKvotaDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochKvotaDecreeInsert(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Kvota);
});


function getBachelorZaochKvotaDecreeInsertDuplicate(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Kvota) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Kvota', sql.Int, Kvota);
        req.execute('scc.usp_Bachelor_Zaoch_Kvota_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochKvotaDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochKvotaDecreeInsertDuplicate(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Kvota);
});


////////////////////////////////////////
//Celevoe DecreeInsert
////////////////////////////////////////

function getBachelorCelevoeDecreeInsert(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Celevoe_DecreeInsert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCelevoeDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCelevoeDecreeInsert(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Celevoe);
});


function getBachelorCelevoeDecreeInsertDuplicate(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Celevoe_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCelevoeDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCelevoeDecreeInsertDuplicate(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Celevoe);
});



function getBachelorZaochCelevoeDecreeInsert(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Zaoch_Celevoe_DecreeInsert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCelevoeDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCelevoeDecreeInsert(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Celevoe);
});


function getBachelorZaochCelevoeDecreeInsertDuplicate(bar, DecreeNumber, DecreeProtocol, DecreeName, DecreeDateYear, DecreeDateMonth, DecreeDateDay, Celevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('Celevoe', sql.Int, Celevoe);
        req.execute('scc.usp_Bachelor_Zaoch_Celevoe_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCelevoeDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCelevoeDecreeInsertDuplicate(res, req.query.DecreeNumber, req.query.DecreeProtocol, req.query.DecreeName, req.query.DecreeDateYear, req.query.DecreeDateMonth, req.query.DecreeDateDay, req.query.Celevoe);
});




////////////////////////////////////////
//Current Rank DecreeInsert
////////////////////////////////////////

function getBachelorCurrentRankKonkursDecreeInsert(bar,
                                                    DecreeNumber,
                                                    DecreeProtocol,
                                                    DecreeName,
                                                    DecreeDateYear,
                                                    DecreeDateMonth,
                                                    DecreeDateDay,
                                                    NoExams,
                                                    Kvota,
                                                    Celevoe,
                                                    PI,
                                                    KB,
                                                    FIIT,
                                                    MOAIS,
                                                    IVT,
                                                    SAU,
                                                    TotalQuantity, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_CurrentRank_Konkurs_DecreeInsert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCurrentRankKonkursDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCurrentRankKonkursDecreeInsert(res,
                                              req.query.DecreeNumber,
                                              req.query.DecreeProtocol,
                                              req.query.DecreeName,
                                              req.query.DecreeDateYear,
                                              req.query.DecreeDateMonth,
                                              req.query.DecreeDateDay,
                                              req.query.NoExams,
                                              req.query.Kvota,
                                              req.query.Celevoe,
                                              req.query.PI,
                                              req.query.KB,
                                              req.query.FIIT,
                                              req.query.MOAIS,
                                              req.query.IVT,
                                              req.query.SAU,
                                              req.query.TotalQuantity,
                                              req.query.PISelect,
                                              req.query.KBSelect,
                                              req.query.FIITSelect,
                                              req.query.MOAISSelect,
                                              req.query.IVTSelect,
                                              req.query.SAUSelect);
});

function getBachelorZaochCurrentRankKonkursDecreeInsert(bar,
                                                        DecreeNumber,
                                                        DecreeProtocol,
                                                        DecreeName,
                                                        DecreeDateYear,
                                                        DecreeDateMonth,
                                                        DecreeDateDay,
                                                        NoExams,
                                                        Kvota,
                                                        Celevoe,
                                                        PI,
                                                        KB,
                                                        FIIT,
                                                        MOAIS,
                                                        IVT,
                                                        SAU,
                                                        TotalQuantity, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_Zaoch_CurrentRank_Konkurs_DecreeInsert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCurrentRankKonkursDecreeInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCurrentRankKonkursDecreeInsert(res,
                                                   req.query.DecreeNumber,
                                                   req.query.DecreeProtocol,
                                                   req.query.DecreeName,
                                                   req.query.DecreeDateYear,
                                                   req.query.DecreeDateMonth,
                                                   req.query.DecreeDateDay,
                                                   req.query.NoExams,
                                                   req.query.Kvota,
                                                   req.query.Celevoe,
                                                   req.query.PI,
                                                   req.query.KB,
                                                   req.query.FIIT,
                                                   req.query.MOAIS,
                                                   req.query.IVT,
                                                   req.query.SAU,
                                                   req.query.TotalQuantity,
                                                  req.query.PISelect,
                                                  req.query.KBSelect,
                                                  req.query.FIITSelect,
                                                  req.query.MOAISSelect,
                                                  req.query.IVTSelect,
                                                  req.query.SAUSelect);
});


function getBachelorCurrentRankKonkursDecreeInsertDuplicate(bar,
                                                            DecreeNumber,
                                                            DecreeProtocol,
                                                            DecreeName,
                                                            DecreeDateYear,
                                                            DecreeDateMonth,
                                                            DecreeDateDay,
                                                            NoExams,
                                                            Kvota,
                                                            Celevoe,
                                                            PI,
                                                            KB,
                                                            FIIT,
                                                            MOAIS,
                                                            IVT,
                                                            SAU,
                                                            TotalQuantity, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_CurrentRank_Konkurs_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorCurrentRankKonkursDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorCurrentRankKonkursDecreeInsertDuplicate(res,
                                                        req.query.DecreeNumber,
                                                        req.query.DecreeProtocol,
                                                        req.query.DecreeName,
                                                        req.query.DecreeDateYear,
                                                        req.query.DecreeDateMonth,
                                                        req.query.DecreeDateDay,
                                                        req.query.NoExams,
                                                        req.query.Kvota,
                                                        req.query.Celevoe,
                                                        req.query.PI,
                                                        req.query.KB,
                                                        req.query.FIIT,
                                                        req.query.MOAIS,
                                                        req.query.IVT,
                                                        req.query.SAU,
                                                        req.query.TotalQuantity,
                                                      req.query.PISelect,
                                                      req.query.KBSelect,
                                                      req.query.FIITSelect,
                                                      req.query.MOAISSelect,
                                                      req.query.IVTSelect,
                                                      req.query.SAUSelect);
});


function getBachelorZaochCurrentRankKonkursDecreeInsertDuplicate(bar,
                                                                 DecreeNumber,
                                                                 DecreeProtocol,
                                                                 DecreeName,
                                                                 DecreeDateYear,
                                                                 DecreeDateMonth,
                                                                 DecreeDateDay,
                                                                 NoExams,
                                                                 Kvota,
                                                                 Celevoe,
                                                                 PI,
                                                                 KB,
                                                                 FIIT,
                                                                 MOAIS,
                                                                 IVT,
                                                                 SAU,
                                                                 TotalQuantity, PISelect, KBSelect, FIITSelect, MOAISSelect, IVTSelect, SAUSelect) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        var DecreeDate = new Date(DecreeDateYear, DecreeDateMonth - 1, DecreeDateDay, 4, 0, 0, 0, 0);
        req.input('DecreeNumber', sql.NVarChar, DecreeNumber);
        req.input('DecreeProtocol', sql.NVarChar, DecreeProtocol);
        req.input('DecreeName', sql.NVarChar, DecreeName);
        req.input('DecreeDate', sql.DateTime, DecreeDate);
        req.input('NoExams', sql.Int, NoExams);
        req.input('Kvota', sql.Int, Kvota);
        req.input('Celevoe', sql.Int, Celevoe);
        req.input('PI', sql.Int, PI);
        req.input('KB', sql.Int, KB);
        req.input('FIIT', sql.Int, FIIT);
        req.input('MOAIS', sql.Int, MOAIS);
        req.input('IVT', sql.Int, IVT);
        req.input('SAU', sql.Int, SAU);
        req.input('TotalQuantity', sql.Int, TotalQuantity);
        req.input('PISelect', sql.NVarChar, PISelect);
        req.input('KBSelect', sql.NVarChar, KBSelect);
        req.input('FIITSelect', sql.NVarChar, FIITSelect);
        req.input('MOAISSelect', sql.NVarChar, MOAISSelect);
        req.input('IVTSelect', sql.NVarChar, IVTSelect);
        req.input('SAUSelect', sql.NVarChar, SAUSelect);
        req.execute('scc.usp_Bachelor_Zaoch_CurrentRank_Konkurs_DecreeInsert_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorZaochCurrentRankKonkursDecreeInsertDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorZaochCurrentRankKonkursDecreeInsertDuplicate(res,
                                                            req.query.DecreeNumber,
                                                            req.query.DecreeProtocol,
                                                            req.query.DecreeName,
                                                            req.query.DecreeDateYear,
                                                            req.query.DecreeDateMonth,
                                                            req.query.DecreeDateDay,
                                                            req.query.NoExams,
                                                            req.query.Kvota,
                                                            req.query.Celevoe,
                                                            req.query.PI,
                                                            req.query.KB,
                                                            req.query.FIIT,
                                                            req.query.MOAIS,
                                                            req.query.IVT,
                                                            req.query.SAU,
                                                            req.query.TotalQuantity,
                                                          req.query.PISelect,
                                                          req.query.KBSelect,
                                                          req.query.FIITSelect,
                                                          req.query.MOAISSelect,
                                                          req.query.IVTSelect,
                                                          req.query.SAUSelect);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////              /////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////    UPDATE PROC    //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////              /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getBachelorUpdate(bar,
                            PersonID,                
                            FirstName,               
                            MiddleName,              
                            LastName,             
                            PhoneNumber,            
                            Check,           
                            Discription,          
                            AgreementOnTransfer,     
                            ProcessingOfPersonalData,
                            Reference,
                            Policy,                  
                            Photo,                   
                            PassportCopy,            
                            INN,                     
                            SNILS,                   
                            DocNumber,               
                            CityName,               
                            MethodOfAdmissionID,     
                            SchoolName,              
                            SchoolCityName,          
                            Certificate,             
                            Payment,                 
                            WayOfLearning,           
                            BallRussian,             
                            BallMathematics,         
                            BallInformatics,         
                            BallPhysics,             
                            BallSocialSciense,       
                            BallExtraPoints,         
                            FirstDirection,          
                            SecondDirection,         
                            ThirdDirection,          
                            MotherFirstName,         
                            MotherMiddleName,        
                            MotherLastName,          
                            FatherFirstName,         
                            FatherMiddleName,        
                            FatherLastName,          
                            MotherPhoneNumber,       
                            FatherPhoneNumber) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);                
        req.input('FirstName', FirstName);               
        req.input('MiddleName', MiddleName);              
        req.input('LastName', LastName);                
        req.input('PhoneNumber', PhoneNumber);             
        req.input('Check', Check);                   
        req.input('Discription', Discription);             
        req.input('AgreementOnTransfer', AgreementOnTransfer);     
        req.input('ProcessingOfPersonalData', ProcessingOfPersonalData);
        req.input('Reference', Reference);               
        req.input('Policy', Policy);                  
        req.input('Photo', Photo);                   
        req.input('PassportCopy', PassportCopy);            
        req.input('INN', INN);                     
        req.input('SNILS', SNILS);                   
        req.input('DocNumber', DocNumber);               
        req.input('CityName', CityName);                
        req.input('MethodOfAdmissionID', MethodOfAdmissionID);     
        req.input('SchoolName', SchoolName);              
        req.input('SchoolCityName', SchoolCityName);          
        req.input('Certificate', Certificate);             
        req.input('Payment', Payment);                 
        req.input('WayOfLearning', WayOfLearning);           
        req.input('BallRussian', BallRussian);             
        req.input('BallMathematics', BallMathematics);         
        req.input('BallInformatics', BallInformatics);         
        req.input('BallPhysics', BallPhysics);             
        req.input('BallSocialSciense', BallSocialSciense);       
        req.input('BallExtraPoints', BallExtraPoints);         
        req.input('FirstDirection', FirstDirection);          
        req.input('SecondDirection', SecondDirection);         
        req.input('ThirdDirection', ThirdDirection);          
        req.input('MotherFirstName', MotherFirstName);         
        req.input('MotherMiddleName', MotherMiddleName);        
        req.input('MotherLastName', MotherLastName);          
        req.input('FatherFirstName', FatherFirstName);         
        req.input('FatherMiddleName', FatherMiddleName);        
        req.input('FatherLastName', FatherLastName);          
        req.input('MotherPhoneNumber', MotherPhoneNumber);       
        req.input('FatherPhoneNumber', FatherPhoneNumber);
        req.execute('scc.usp_Bachelor_Update').then(function () {
            console.log(LastName);
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorUpdate', function (req, res) {
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorUpdate(res,
        req.query.PersonID,
        req.query.FirstName,
        req.query.MiddleName,
        req.query.LastName,
        req.query.PhoneNumber,
        req.query.Check,
        req.query.Discription,
        req.query.AgreementOnTransfer,
        req.query.ProcessingOfPersonalData,
        req.query.Reference,
        req.query.Policy,
        req.query.Photo,
        req.query.PassportCopy,
        req.query.INN,
        req.query.SNILS,
        req.query.DocNumber,
        req.query.CityName,
        req.query.MethodOfAdmissionID,
        req.query.SchoolName,
        req.query.SchoolCityName,
        req.query.Certificate,
        req.query.Payment,
        req.query.WayOfLearning,
        req.query.BallRussian,
        req.query.BallMathematics,
        req.query.BallInformatics,
        req.query.BallPhysics,
        req.query.BallSocialSciense,
        req.query.BallExtraPoints,
        req.query.FirstDirection,
        req.query.SecondDirection,
        req.query.ThirdDirection,
        req.query.MotherFirstName,
        req.query.MotherMiddleName,
        req.query.MotherLastName,
        req.query.FatherFirstName,
        req.query.FatherMiddleName,
        req.query.FatherLastName,
        req.query.MotherPhoneNumber,
        req.query.FatherPhoneNumber);
});


function getMasterUpdate(bar,
                            PersonID                                             
                          ,FirstName                                             
                          ,MiddleName                                            
                          ,LastName                                              
                          ,PhoneNumber                                           
                          ,Check                                                 
                          ,Discription                                           
                          ,AgreementOnTransfer                                   
                          ,ProcessingOfPersonalData                              
                          ,Reference                                             
                          ,Policy                                                
                          ,Photo                                                 
                          ,PassportCopy                                          
                          ,INN                                                   
                          ,SNILS                                                 
                          ,DocNumber                                             
                          ,CityName                                              
                          ,MethodOfAdmissionID                                   
                          ,Payment                                               
                          ,WayOfLearning                                         
                          ,Interview                                             
                          ,BallExtraPoints                                       
                          ,UniversityName                                        
                          ,Speciality                                            
                          ,MotherFirstName                                       
                          ,MotherMiddleName                                      
                          ,MotherLastName                                        
                          ,MotherPhoneNumber                                     
                          ,FatherFirstName                                       
                          ,FatherMiddleName                                      
                          ,FatherLastName                                        
                          ,FatherPhoneNumber                                     
                          ,FirstDirection                                        
                          ,SecondDirection                                       
                          ,ThirdDirection) {                                     
    const conn = new sql.ConnectionPool(dbConfig);                               
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);
        req.input('FirstName', FirstName);
        req.input('MiddleName', MiddleName);
        req.input('LastName', LastName);
        req.input('PhoneNumber', PhoneNumber);
        req.input('Check', Check);
        req.input('Discription', Discription);
        req.input('AgreementOnTransfer', AgreementOnTransfer);
        req.input('ProcessingOfPersonalData', ProcessingOfPersonalData);
        req.input('Reference', Reference);
        req.input('Policy', Policy);
        req.input('Photo', Photo);
        req.input('PassportCopy', PassportCopy);
        req.input('INN', INN);
        req.input('SNILS', SNILS);
        req.input('DocNumber', DocNumber);
        req.input('CityName', CityName);
        req.input('MethodOfAdmissionID', MethodOfAdmissionID);
        req.input('Payment', Payment);
        req.input('WayOfLearning', WayOfLearning);
        req.input('Interview', Interview);
        req.input('BallExtraPoints', BallExtraPoints);
        req.input('UniversityName', UniversityName);
        req.input('Speciality', Speciality);
        req.input('MotherFirstName', MotherFirstName);
        req.input('MotherMiddleName', MotherMiddleName);
        req.input('MotherLastName', MotherLastName);
        req.input('MotherPhoneNumber', MotherPhoneNumber);
        req.input('FatherFirstName', FatherFirstName);
        req.input('FatherMiddleName', FatherMiddleName);
        req.input('FatherLastName', FatherLastName);
        req.input('FatherPhoneNumber', FatherPhoneNumber);
        req.input('FirstDirection', FirstDirection);
        req.input('SecondDirection', SecondDirection);
        req.input('ThirdDirection', ThirdDirection);
        req.execute('scc.usp_Master_Update').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/MasterUpdate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getMasterUpdate(res,
          req.query.PersonID
        ,req.query.FirstName
        ,req.query.MiddleName
        ,req.query.LastName
        ,req.query.PhoneNumber
        ,req.query.Check
        ,req.query.Discription
        ,req.query.AgreementOnTransfer
        ,req.query.ProcessingOfPersonalData
        ,req.query.Reference
        ,req.query.Policy
        ,req.query.Photo
        ,req.query.PassportCopy
        ,req.query.INN
        ,req.query.SNILS
        ,req.query.DocNumber
        ,req.query.CityName
        ,req.query.MethodOfAdmissionID
        ,req.query.Payment
        ,req.query.WayOfLearning
        ,req.query.Interview
        ,req.query.BallExtraPoints
        ,req.query.UniversityName
        ,req.query.Speciality
        ,req.query.MotherFirstName
        ,req.query.MotherMiddleName
        ,req.query.MotherLastName
        ,req.query.MotherPhoneNumber
        ,req.query.FatherFirstName
        ,req.query.FatherMiddleName
        ,req.query.FatherLastName
        ,req.query.FatherPhoneNumber
        ,req.query.FirstDirection
        ,req.query.SecondDirection
        ,req.query.ThirdDirection);
});



function getPSUpdate(bar
                      ,PersonID                                          
                      ,LastName                                          
                      ,FirstName                                         
                      ,MiddleName                                        
                      ,PhoneNumber                                       
                      ,Check                                             
                      ,Discription                                       
                      ,AgreementOnTransfer                               
                      ,ProcessingOfPersonalData                          
                      ,Reference                                         
                      ,Policy                                            
                      ,Photo                                             
                      ,PassportCopy                                      
                      ,INN                                               
                      ,SNILS                                             
                      ,DocNumber                                         
                      ,CityName                                          
                      ,MethodOfAdmissionID                               
                      ,BallPhilosophy                                    
                      ,BallEnglish                                       
                      ,BallSpecial                                                                              
                      ,UniversityName                                    
                      ,Speciality                                        
                      ,MotherFirstName                                   
                      ,MotherMiddleName                                  
                      ,MotherLastName                                    
                      ,MotherPhoneNumber                                 
                      ,FatherFirstName                                   
                      ,FatherMiddleName                                  
                      ,FatherLastName                                    
                      ,FatherPhoneNumber) {                              
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);                                                  
        req.input('FirstName', FirstName);                                                
        req.input('MiddleName', MiddleName);                                              
        req.input('LastName', LastName);                                                  
        req.input('PhoneNumber', PhoneNumber);                                            
        req.input('Check', Check);                                                        
        req.input('Discription', Discription);                                            
        req.input('AgreementOnTransfer', AgreementOnTransfer);                            
        req.input('ProcessingOfPersonalData', ProcessingOfPersonalData);                  
        req.input('Reference', Reference);                                                
        req.input('Policy', Policy);                                                      
        req.input('Photo', Photo);                                                        
        req.input('PassportCopy', PassportCopy);                                          
        req.input('INN', INN);                                                            
        req.input('SNILS', SNILS);                                                        
        req.input('DocNumber', DocNumber);                                                
        req.input('CityName', CityName);                                                  
        req.input('MethodOfAdmissionID', MethodOfAdmissionID);
        req.input('BallPhilosophy', BallPhilosophy);                                      
        req.input('BallEnglish', BallEnglish);                      
        req.input('BallSpecial', BallSpecial);                                                                                                                               
        req.input('UniversityName', UniversityName);                                      
        req.input('Speciality', Speciality);                                              
        req.input('MotherFirstName', MotherFirstName);                                    
        req.input('MotherMiddleName', MotherMiddleName);                                  
        req.input('MotherLastName', MotherLastName);                                      
        req.input('MotherPhoneNumber', MotherPhoneNumber);                                
        req.input('FatherFirstName', FatherFirstName);                                    
        req.input('FatherMiddleName', FatherMiddleName);                                  
        req.input('FatherLastName', FatherLastName);                                      
        req.input('FatherPhoneNumber', FatherPhoneNumber);                                
        req.execute('scc.usp_PostgradulateStudent_Update').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PSUpdate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPSUpdate(res
        ,req.query.PersonID
        ,req.query.LastName
        ,req.query.FirstName
        ,req.query.MiddleName
        ,req.query.PhoneNumber
        ,req.query.Check
        ,req.query.Discription
        ,req.query.AgreementOnTransfer
        ,req.query.ProcessingOfPersonalData
        ,req.query.Reference
        ,req.query.Policy
        ,req.query.Photo
        ,req.query.PassportCopy
        ,req.query.INN
        ,req.query.SNILS
        ,req.query.DocNumber
        ,req.query.CityName
        ,req.query.MethodOfAdmissionID
        ,req.query.BallPhilosophy
        ,req.query.BallEnglish
        ,req.query.BallSpecial
        ,req.query.UniversityName
        ,req.query.Speciality
        ,req.query.MotherFirstName
        ,req.query.MotherMiddleName
        ,req.query.MotherLastName
        ,req.query.MotherPhoneNumber
        ,req.query.FatherFirstName
        ,req.query.FatherMiddleName
        ,req.query.FatherLastName
        ,req.query.FatherPhoneNumber);
});





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////        INSERT PROC    //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////              /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getBachelorInsert(bar,
                            FirstName,
                            MiddleName,
                            LastName,
                            PhoneNumber,
                            Check,
                            Discription,
                            AgreementOnTransfer,
                            ProcessingOfPersonalData,
                            Reference,
                            Policy,
                            Photo,
                            PassportCopy,
                            INN,
                            SNILS,
                            DocNumber,
                            CityName,
                            MethodOfAdmissionID,
                            SchoolName,
                            SchoolCityName,
                            Certificate,
                            Payment,
                            WayOfLearning,
                            BallRussian,
                            BallMathematics,
                            BallInformatics,
                            BallPhysics,
                            BallSocialSciense,
                            BallExtraPoints,
                            FirstDirection,
                            SecondDirection,
                            ThirdDirection,
                            MotherFirstName,
                            MotherMiddleName,
                            MotherLastName,
                            FatherFirstName,
                            FatherMiddleName,
                            FatherLastName,
                            MotherPhoneNumber,
                            FatherPhoneNumber) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('FirstName', FirstName);
        req.input('MiddleName', MiddleName);
        req.input('LastName', LastName);
        req.input('PhoneNumber', PhoneNumber);
        req.input('Check', Check);
        req.input('Discription', Discription);
        req.input('AgreementOnTransfer', AgreementOnTransfer);
        req.input('ProcessingOfPersonalData', ProcessingOfPersonalData);
        req.input('Reference', Reference);
        req.input('Policy', Policy);
        req.input('Photo', Photo);
        req.input('PassportCopy', PassportCopy);
        req.input('INN', INN);
        req.input('SNILS', SNILS);
        req.input('DocNumber', DocNumber);
        req.input('CityName', CityName);
        req.input('MethodOfAdmissionID', MethodOfAdmissionID);
        req.input('SchoolName', SchoolName);
        req.input('SchoolCityName', SchoolCityName);
        req.input('Certificate', Certificate);
        req.input('Payment', Payment);
        req.input('WayOfLearning', WayOfLearning);
        req.input('BallRussian', BallRussian);
        req.input('BallMathematics', BallMathematics);
        req.input('BallInformatics', BallInformatics);
        req.input('BallPhysics', BallPhysics);
        req.input('BallSocialSciense', BallSocialSciense);
        req.input('BallExtraPoints', BallExtraPoints);
        req.input('FirstDirection', FirstDirection);
        req.input('SecondDirection', SecondDirection);
        req.input('ThirdDirection', ThirdDirection);
        req.input('MotherFirstName', MotherFirstName);
        req.input('MotherMiddleName', MotherMiddleName);
        req.input('MotherLastName', MotherLastName);
        req.input('FatherFirstName', FatherFirstName);
        req.input('FatherMiddleName', FatherMiddleName);
        req.input('FatherLastName', FatherLastName);
        req.input('MotherPhoneNumber', MotherPhoneNumber);
        req.input('FatherPhoneNumber', FatherPhoneNumber);
        req.execute('scc.usp_Bachelor_Insert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorInsert(res,
        req.query.FirstName,
        req.query.MiddleName,
        req.query.LastName,
        req.query.PhoneNumber,
        req.query.Check,
        req.query.Discription,
        req.query.AgreementOnTransfer,
        req.query.ProcessingOfPersonalData,
        req.query.Reference,
        req.query.Policy,
        req.query.Photo,
        req.query.PassportCopy,
        req.query.INN,
        req.query.SNILS,
        req.query.DocNumber,
        req.query.CityName,
        req.query.MethodOfAdmissionID,
        req.query.SchoolName,
        req.query.SchoolCityName,
        req.query.Certificate,
        req.query.Payment,
        req.query.WayOfLearning,
        req.query.BallRussian,
        req.query.BallMathematics,
        req.query.BallInformatics,
        req.query.BallPhysics,
        req.query.BallSocialSciense,
        req.query.BallExtraPoints,
        req.query.FirstDirection,
        req.query.SecondDirection,
        req.query.ThirdDirection,
        req.query.MotherFirstName,
        req.query.MotherMiddleName,
        req.query.MotherLastName,
        req.query.FatherFirstName,
        req.query.FatherMiddleName,
        req.query.FatherLastName,
        req.query.MotherPhoneNumber,
        req.query.FatherPhoneNumber);
});


function getMasterInsert(bar
                          , FirstName
                          , MiddleName
                          , LastName
                          , PhoneNumber
                          , Check
                          , Discription
                          , AgreementOnTransfer
                          , ProcessingOfPersonalData
                          , Reference
                          , Policy
                          , Photo
                          , PassportCopy
                          , INN
                          , SNILS
                          , DocNumber
                          , CityName
                          , MethodOfAdmissionID
                          , Payment
                          , WayOfLearning
                          , Interview
                          , BallExtraPoints
                          , UniversityName
                          , Speciality
                          , MotherFirstName
                          , MotherMiddleName
                          , MotherLastName
                          , MotherPhoneNumber
                          , FatherFirstName
                          , FatherMiddleName
                          , FatherLastName
                          , FatherPhoneNumber
                          , FirstDirection
                          , SecondDirection
                          , ThirdDirection) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('FirstName', FirstName);
        req.input('MiddleName', MiddleName);
        req.input('LastName', LastName);
        req.input('PhoneNumber', PhoneNumber);
        req.input('Check', Check);
        req.input('Discription', Discription);
        req.input('AgreementOnTransfer', AgreementOnTransfer);
        req.input('ProcessingOfPersonalData', ProcessingOfPersonalData);
        req.input('Reference', Reference);
        req.input('Policy', Policy);
        req.input('Photo', Photo);
        req.input('PassportCopy', PassportCopy);
        req.input('INN', INN);
        req.input('SNILS', SNILS);
        req.input('DocNumber', DocNumber);
        req.input('CityName', CityName);
        req.input('MethodOfAdmissionID', MethodOfAdmissionID);
        req.input('Payment', Payment);
        req.input('WayOfLearning', WayOfLearning);
        req.input('Interview', Interview);
        req.input('BallExtraPoints', BallExtraPoints);
        req.input('UniversityName', UniversityName);
        req.input('Speciality', Speciality);
        req.input('MotherFirstName', MotherFirstName);
        req.input('MotherMiddleName', MotherMiddleName);
        req.input('MotherLastName', MotherLastName);
        req.input('MotherPhoneNumber', MotherPhoneNumber);
        req.input('FatherFirstName', FatherFirstName);
        req.input('FatherMiddleName', FatherMiddleName);
        req.input('FatherLastName', FatherLastName);
        req.input('FatherPhoneNumber', FatherPhoneNumber);
        req.input('FirstDirection', FirstDirection);
        req.input('SecondDirection', SecondDirection);
        req.input('ThirdDirection', ThirdDirection);
        req.execute('scc.usp_Master_Insert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/MasterInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getMasterInsert(res
        , req.query.FirstName
        , req.query.MiddleName
        , req.query.LastName
        , req.query.PhoneNumber
        , req.query.Check
        , req.query.Discription
        , req.query.AgreementOnTransfer
        , req.query.ProcessingOfPersonalData
        , req.query.Reference
        , req.query.Policy
        , req.query.Photo
        , req.query.PassportCopy
        , req.query.INN
        , req.query.SNILS
        , req.query.DocNumber
        , req.query.CityName
        , req.query.MethodOfAdmissionID
        , req.query.Payment
        , req.query.WayOfLearning
        , req.query.Interview
        , req.query.BallExtraPoints
        , req.query.UniversityName
        , req.query.Speciality
        , req.query.MotherFirstName
        , req.query.MotherMiddleName
        , req.query.MotherLastName
        , req.query.MotherPhoneNumber
        , req.query.FatherFirstName
        , req.query.FatherMiddleName
        , req.query.FatherLastName
        , req.query.FatherPhoneNumber
        , req.query.FirstDirection
        , req.query.SecondDirection
        , req.query.ThirdDirection);
});



function getPSInsert(bar
                      , LastName
                      , FirstName
                      , MiddleName
                      , PhoneNumber
                      , Check
                      , Discription
                      , AgreementOnTransfer
                      , ProcessingOfPersonalData
                      , Reference
                      , Policy
                      , Photo
                      , PassportCopy
                      , INN
                      , SNILS
                      , DocNumber
                      , CityName
                      , MethodOfAdmissionID
                      , BallPhilosophy
                      , BallEnglish
                      , BallSpecial
                      , UniversityName
                      , Speciality
                      , MotherFirstName
                      , MotherMiddleName
                      , MotherLastName
                      , MotherPhoneNumber
                      , FatherFirstName
                      , FatherMiddleName
                      , FatherLastName
                      , FatherPhoneNumber) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('FirstName', FirstName);
        req.input('MiddleName', MiddleName);
        req.input('LastName', LastName);
        req.input('PhoneNumber', PhoneNumber);
        req.input('Check', Check);
        req.input('Discription', Discription);
        req.input('AgreementOnTransfer', AgreementOnTransfer);
        req.input('ProcessingOfPersonalData', ProcessingOfPersonalData);
        req.input('Reference', Reference);
        req.input('Policy', Policy);
        req.input('Photo', Photo);
        req.input('PassportCopy', PassportCopy);
        req.input('INN', INN);
        req.input('SNILS', SNILS);
        req.input('DocNumber', DocNumber);
        req.input('CityName', CityName);
        req.input('MethodOfAdmissionID', MethodOfAdmissionID);
        req.input('BallPhilosophy', BallPhilosophy);
        req.input('BallEnglish', BallEnglish);
        req.input('BallSpecial', BallSpecial);
        req.input('UniversityName', UniversityName);
        req.input('Speciality', Speciality);
        req.input('MotherFirstName', MotherFirstName);
        req.input('MotherMiddleName', MotherMiddleName);
        req.input('MotherLastName', MotherLastName);
        req.input('MotherPhoneNumber', MotherPhoneNumber);
        req.input('FatherFirstName', FatherFirstName);
        req.input('FatherMiddleName', FatherMiddleName);
        req.input('FatherLastName', FatherLastName);
        req.input('FatherPhoneNumber', FatherPhoneNumber);
        req.execute('scc.usp_PostgradulateStudent_Insert').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PSInsert', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPSInsert(res
        , req.query.LastName
        , req.query.FirstName
        , req.query.MiddleName
        , req.query.PhoneNumber
        , req.query.Check
        , req.query.Discription
        , req.query.AgreementOnTransfer
        , req.query.ProcessingOfPersonalData
        , req.query.Reference
        , req.query.Policy
        , req.query.Photo
        , req.query.PassportCopy
        , req.query.INN
        , req.query.SNILS
        , req.query.DocNumber
        , req.query.CityName
        , req.query.MethodOfAdmissionID
        , req.query.BallPhilosophy
        , req.query.BallEnglish
        , req.query.BallSpecial
        , req.query.UniversityName
        , req.query.Speciality
        , req.query.MotherFirstName
        , req.query.MotherMiddleName
        , req.query.MotherLastName
        , req.query.MotherPhoneNumber
        , req.query.FatherFirstName
        , req.query.FatherMiddleName
        , req.query.FatherLastName
        , req.query.FatherPhoneNumber);
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////        DELETE PROC    //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////              /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getBachelorDelete(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);
        req.execute('scc.usp_Bachelor_Delete').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorDelete', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorDelete(res, req.query.PersonID);
});



function getMasterDelete(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);
        req.execute('scc.usp_Master_Delete').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/MasterDelete', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getMasterDelete(res, req.query.PersonID);
});



function getPSDelete(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);
        req.execute('scc.usp_PostgradulateStudent_Delete').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PSDelete', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPSDelete(res, req.query.PersonID);
});



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////¿À‘¿¬»“Õ€… —œ»—Œ , «¿–¿Õ Œ¬¿ÕÕ¿ﬂ “¿¡À»÷¿, ¬€¡Œ– » œŒ √Œ–Œƒ¿Ã » ÿ ŒÀ¿Ã///
//////////////////////////////////////////////////////////////////////////////////////////

function getAlphabet(bar, Bachelor, Master, PostgradulateStudent) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Bachelor', Bachelor);
        req.input('Master', Master);
        req.input('PostgradulateStudent', PostgradulateStudent);
        req.execute('scc.usp_Alphabet_list').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/Alphabet', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getAlphabet(res, req.query.Bachelor, req.query.Master, req.query.PostgradulateStudent);
});


function getBachelorRank(bar, QuantityNoExams, QuantityKvota, QuantityCelevoe) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('QuantityNoExams', QuantityNoExams);
        req.input('QuantityKvota', QuantityKvota);
        req.input('QuantityCelevoe', QuantityCelevoe);
        req.execute('scc.usp_Bachelor_Rank').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorRank', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorRank(res, req.query.QuantityNoExams, req.query.QuantityKvota, req.query.QuantityCelevoe);
});


function getSchoolCount(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_Bachelor_SchoolPeopleCount').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/SchoolCount', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getSchoolCount(res);
});


function getCityCount(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_Bachelor_CityPeopleCount').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/CityCount', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getCityCount(res);
});

//////////////////////////
//UPDATE ◊≈–ÕŒ¬» 
/////////////////////////

function DuplicateUpdate(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        const req = new sql.Request(conn)
        req.execute('scc.Duplicate_Update').then(function () {
            bar.send({status:'succes'});
            conn.close();
        })
            .catch(function (err) {
                bar.send(err);
                conn.close();
            });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/DuplicateUpdate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    DuplicateUpdate(res);
});


////////////////////////////////////////
//JUST SELECT
////////////////////////////////////////


function getBachelorUpdateDelete(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn); 
        req.query('SELECT [PersonID],[LastName],[FirstName],[MiddleName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[SchoolName],[SchoolCity],[Certificate],[Payment],[WayOfLearning],[BallRussian],[BallMathematics],[BallInformatics],[BallPhysics],[BallSocialSciense],[BallExtraPoints],[FirstDirection],[SecondDirection],[ThirdDirection],[MotherFirstName],[MotherMiddleName],[MotherLastName],[FatherFirstName],[FatherMiddleName],[FatherLastName],[MotherPhoneNumber],[FatherPhoneNumber] FROM [scc].[vw_Bachelor_FullInfo] ORDER BY [LastName],[FirstName],[MiddleName],[BallMathematics] DESC,[BallInformatics] DESC,[BallRussian] DESC,[BallPhysics] DESC,[BallSocialSciense] DESC,[BallExtraPoints] DESC').then(function (recordset) {
            conn.close();
            console.log(recordset);
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorUpdateDelete', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorUpdateDelete(res);
});


function getMasterUpdateDelete(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[LastName],[FirstName],[MiddleName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[Payment],[WayOfLearning],[Interview],[BallExtraPoints],[UniversityName],[Speciality],[MotherFirstName],[MotherMiddleName],[MotherLastName],[MotherPhoneNumber],[FatherFirstName],[FatherMiddleName],[FatherLastName],[FatherPhoneNumber],[FirstDirection],[SecondDirection],[ThirdDirection] FROM [scc].[vw_Master_FullInfo] ORDER BY [LastName],[FirstName],[MiddleName]').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/MasterUpdateDelete', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getMasterUpdateDelete(res);
});


function getPSUpdateDelete(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[LastName],[FirstName],[MiddleName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[BallPhilosophy],[BallEnglish],[BallSpecial],[UniversityName],[Speciality],[MotherFirstName],[MotherMiddleName],[MotherLastName],[MotherPhoneNumber],[FatherFirstName],[FatherMiddleName],[FatherLastName],[FatherPhoneNumber]  FROM [scc].[vw_PostgradulateStudent_FullInfo] ORDER BY [LastName],[FirstName],[MiddleName]').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PSUpdateDelete', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPSUpdateDelete(res);
});



///////////////////////////////////////////////////////////////////////
//////////////////   ¬€¡Œ– ¿ » ”ƒ¿À≈Õ»≈ œ–» ¿«Œ¬ //////////////////////
///////////////////////////////////////////////////////////////////////


function getDecreeSelect(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [DecreeID],[DecreeNumber],[DecreeProtocol],[DecreeName],[DecreeDate] FROM [scc].[Decree] ORDER BY [DecreeID]').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/DecreeSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getDecreeSelect(res);
});


function getDecreeSelectDuplicate(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [DecreeID],[DecreeNumber],[DecreeProtocol],[DecreeName],[DecreeDate] FROM [scc].[Decree_Duplicate] ORDER BY [DecreeID]').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/DecreeSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getDecreeSelectDuplicate(res);
});

function getDecreeDelete(bar, DecreeID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('DecreeID', DecreeID);
        req.execute('scc.usp_Decree_Delete').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/DecreeDelete', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getDecreeDelete(res, req.query.DecreeID);
});


function getDecreeDeleteDuplicate(bar, DecreeID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('DecreeID', DecreeID);
        req.execute('scc.usp_Decree_Delete_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/DecreeDeleteDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getDecreeDeleteDuplicate(res, req.query.DecreeID);
});


/////////////////////////////////////////////////////////////////////////////
/////////////////œ–Œ÷≈ƒ”–€ —¬ﬂ«¿ÕÕ€≈ — ƒ¿À‹ÿ≈…ÿ»Ã ”◊¿—“»≈Ã //////////////////
/////////////////////////////////////////////////////////////////////////////

function getDecreePerson(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_Decree_Person').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/DecreePersonSelect', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getDecreePerson(res);
});



function getDecreePersonDuplicate(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_Decree_Person_Duplicate').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/DecreePersonSelectDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getDecreePersonDuplicate(res);
});


function getBachelorParticipationInAnotherContest(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);
        req.execute('scc.usp_Bachelor_ParticipationInAnotherContest').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorParticipationInAnotherContest', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorParticipationInAnotherContest(res, req.query.PersonID);
});


function getBachelorParticipationInAnotherContestDuplicate(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);
        req.execute('scc.usp_Bachelor_ParticipationInAnotherContest_Duplicate').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorParticipationInAnotherContestDuplicate', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorParticipationInAnotherContestDuplicate(res, req.query.PersonID);
});

////////////////////////////////////////////////////////////////////////////
//////// —Ã≈Õ¿ Õ¿œ–¿¬À≈Õ»… ¬ ◊≈–ÕŒ¬» ≈//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function getPersonDuplicateDirection(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_Person_Duplicate_Direction').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PersonDuplicateDirection', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPersonDuplicateDirection(res);
});


function getPersonDuplicateChangeDirection(bar, PersonID, FirstDirection, SecondDirection, ThirdDirection) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('PersonID', PersonID);
        req.input('FirstDirection', FirstDirection);
        req.input('SecondDirection', SecondDirection);
        req.input('ThirdDirection', ThirdDirection);
        req.execute('scc.usp_Bachelor_Duplicate_ChangeDirection').then(function () {
            bar.send({ status: 'succes' });
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PersonDuplicateChangeDirection', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPersonDuplicateChangeDirection(res, req.query.PersonID, req.query.FirstDirection, req.query.SecondDirection, req.query.ThirdDirection);
});


////////////////////////////////////////////////////////////////////////////
//////// »Õ‘¿ œŒ Ã¿√»—“–¿Ã » ¿—œ»–¿Õ“¿Ã/////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function getMasterBriefInformation(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_Master_BriefInformation').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/MasterBriefInformation', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getMasterBriefInformation(res);
});



function getPostgradulateStudentBriefInformation(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_PostgradulateStudent_BriefInformation').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PostgradulateStudentBriefInformation', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPostgradulateStudentBriefInformation(res);
});


////////////////////////////////////////////////////////////////////////////
////////                 ¡¿ ¿À¿¬–€ — Œ¡Ÿ≈—“¬ŒÃ            //////////////////
////////////////////////////////////////////////////////////////////////////

function getBachelorSocialSciense(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.execute('scc.usp_Bachelor_SocialSciense').then(function (recordset) {
            bar.send(recordset);
            conn.close();

        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorSocialSciense', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorSocialSciense(res);
});

/////////////////////////////////////////
///////////    AUTH   ///////////////////
/////////////////////////////////////////

function getAuth(bar, Login, Password) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.input('Login', Login);
        req.input('Password', Password);
        req.execute('scc.usp_auth').then(function () {
            bar.send({ status: 'succes' });
            conn.close();
        })
        .catch(function (err) {
            bar.send(err);
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.post('/Auth', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getAuth(res, req.query.Login, req.query.Password);
});



//Selects for Update


function getBachelor(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[FirstName],[MiddleName],[LastName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[Certificate],[Payment],[WayOfLearning],[BallRussian],[BallMathematics],[BallInformatics],[BallPhysics],[BallSocialSciense],[BallExtraPoints],[SumWithMathematics],[SumWithSocialSciense],[SchoolName],[SchoolCity],[MotherFirstName],[MotherMiddleName],[MotherLastName],[MotherPhoneNumber],[FatherFirstName],[FatherMiddleName],[FatherLastName],[FatherPhoneNumber],[FirstDirection],[SecondDirection],[ThirdDirection]  FROM [scc].[vw_Bachelor_FullInfo] WHERE [PersonID] =' + PersonID).then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/Bachelor', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelor(res, req.query.PersonID);
});


function getMaster(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[FirstName],[MiddleName],[LastName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[Payment],[WayOfLearning],[Interview],[BallExtraPoints],[UniversityName],[Speciality],[MotherFirstName],[MotherMiddleName],[MotherLastName],[MotherPhoneNumber],[FatherFirstName],[FatherMiddleName],[FatherLastName],[FatherPhoneNumber],[FirstDirection],[SecondDirection],[ThirdDirection] FROM [scc].[vw_Master_FullInfo] WHERE [PersonID] =' + PersonID).then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/Master', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getMaster(res, req.query.PersonID);
});


function getPS(bar, PersonID) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[FirstName],[MiddleName],[LastName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[BallPhilosophy],[BallEnglish],[BallSpecial],[UniversityID],[UniversityName],[Speciality],[MotherFirstName],[MotherMiddleName],[MotherLastName],[MotherPhoneNumber],[FatherFirstName],[FatherMiddleName],[FatherLastName],[FatherPhoneNumber] FROM [scc].[vw_PostgradulateStudent_FullInfo] WHERE [PersonID] =' + PersonID).then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PS', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPS(res, req.query.PersonID);
});


//////////////////////////////////
///////   SELECT DELETED  ////////
//////////////////////////////////

function getBachelorDeleted(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[DateDeleted],[LastName],[FirstName],[MiddleName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[SchoolName],[SchoolCity],[Certificate],[Payment],[WayOfLearning],[BallRussian],[BallMathematics],[BallInformatics],[BallPhysics],[BallSocialSciense],[BallExtraPoints],[FirstDirection],[SecondDirection],[ThirdDirection],[MotherFirstName],[MotherMiddleName],[MotherLastName],[FatherFirstName],[FatherMiddleName],[FatherLastName],[MotherPhoneNumber],[FatherPhoneNumber] FROM [scc].[Bachelor_Deleted] ORDER BY [DateDeleted] DESC,[LastName],[FirstName],[MiddleName],[BallMathematics] DESC,[BallInformatics] DESC,[BallRussian] DESC,[BallPhysics] DESC,[BallSocialSciense] DESC,[BallExtraPoints] DESC').then(function (recordset) {
            conn.close();
            console.log(recordset);
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/BachelorDeleted', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getBachelorDeleted(res);
});


function getMasterDeleted(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[DateDeleted],[LastName],[FirstName],[MiddleName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[Payment],[WayOfLearning],[Interview],[BallExtraPoints],[UniversityName],[Speciality],[MotherFirstName],[MotherMiddleName],[MotherLastName],[MotherPhoneNumber],[FatherFirstName],[FatherMiddleName],[FatherLastName],[FatherPhoneNumber],[FirstDirection],[SecondDirection],[ThirdDirection] FROM [scc].[Master_Deleted] ORDER BY [DateDeleted] DESC,[LastName],[FirstName],[MiddleName]').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/MasterDeleted', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getMasterDeleted(res);
});


function getPSDeleted(bar) {
    const conn = new sql.ConnectionPool(dbConfig);
    return conn.connect().then(function () {
        var req = new sql.Request(conn);
        req.query('SELECT [PersonID],[DateDeleted],[LastName],[FirstName],[MiddleName],[PhoneNumber],[Check],[Discription],[AgreementOnTransfer],[ProcessingOfPersonalData],[Reference],[Policy],[Photo],[PassportCopy],[INN],[SNILS],[DocNumber],[CityName],[MethodName],[BallPhilosophy],[BallEnglish],[BallSpecial],[UniversityName],[Speciality],[MotherFirstName],[MotherMiddleName],[MotherLastName],[MotherPhoneNumber],[FatherFirstName],[FatherMiddleName],[FatherLastName],[FatherPhoneNumber]  FROM [scc].[PostgradulateStudent_Deleted] ORDER BY [DateDeleted] DESC,[LastName],[FirstName],[MiddleName]').then(function (recordset) {
            conn.close();
            bar.send(recordset);
        })
        .catch(function (err) {
            conn.close();
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}

app.get('/PSDeleted', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    getPSDeleted(res);
});


///////////////////////////////
//APP LISTEN
//////////////////////////////

app.listen(3001);
console.log('Listening on port 3001...');