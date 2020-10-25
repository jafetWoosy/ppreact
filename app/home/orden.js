  
const mongoose = require('mongoose');

const { Schema } = mongoose;


  const OrdenSchema = new Schema({
    ID_VENTA : {
        type : Integer
    },
    ID_SUCURSAL : {
        type : Integer
    },
    ID_REMOTO : {
        type : Integer
    },
    FECHAALTA : {
        type : Date, default: Date.now
    },
    FECHAENTREGA : {
        type : Date, default: Date.now
    },
    ID_TIPOVENTA : {
        type : Integer
    },
    ID_TIPOPAGOVENTA : {
        type : Integer
    },
    ID_CLIENTE : {
        type : Integer
    },
    ID_CLIENTEREMOTO : {
        type : Integer
    },
    ID_CLIENTESUCURSAL : {
        type : Integer
    },
    ID_TARJETAPUNTOS : {
        type : Integer
    },
    ID_TARJETAPUNTOSSUCURSAL : {
        type : Integer
    },
    PAGOTOTAL : {
        type : Integer
    },
    ACTUALIZACION : {
        type : Date, default: Date.now
    },
    STATUS : {
        type : Integer
    },
    EFECTIVO : {
        type : Integer
    },
    "DESCUENTOPUNTOS" : {
        type : Integer
    },
    ID_USUARIO : {
        type : Integer
    },
    ID_USUARIOSUCURSAL : {
        type : Integer
    },
    ALIAS_CLIENTE : {
        type : String
    },
    SALDOPUNTOS : {
        type : Integer
    },
    ID_CAJA : {
        type : Integer
    },
    ID_CAJASUCURSAL : {
        type : Integer
    },
    OBSERVACION : {
        type : String
    },
    TODOPAGADO : {
        type : Integer
    },
    ID_SUCURSALENVIA : {
        type : Integer
    },
    PASOPOREL : {
        type : Integer
    },
    ID_SUCURSALACTUALIZA : {
        type : Integer
    },
    RECIBIDO : {
        type : Integer
    },
    TABLA : {
        type : String
    },
    ID_TABLA : {
        type : "Integer"
    },
    ID_TABLASUCURSAL : {
        type : Integer
    },
    DETALLE : {
        type : String
    },
    COBRADO : {
        type : Integer
    },
    MOTIVOCANCELA : {
        type : String
    },
    DIRECCION : {
        type : String
    },
    FECHAPRODUCCION : {
        type : Date, default: Date.now
    },
    LOG_APP : {
        type : String
    },
    PEDIDO_MAS_TARDE : {
        type : Integer
    },
    ALERTA_30MIN : {
        type : String
    },
    ENVIADO_POR_TELEFONO : {
        type : Integer
    }
  })


  module,exports = mongoose.model('Orden', OrdenSchema)