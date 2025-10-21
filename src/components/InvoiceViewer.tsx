import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    fontSize: 9,
    paddingTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 30,
    fontFamily: 'Helvetica',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  leftSection: {
    width: '40%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  textBeforeLogo: {
    width: '30%',
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 1.1,
  },
  logoBox: {
    width: 160, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  textAfterLogo: {
    width: '30%',
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 1.1,
  },
  companyInfo: {
    fontSize: 7,
    lineHeight: 1.1,
    textAlign: 'center',
    marginTop: 3,
  },
  companyName: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  addressLine: {
    marginBottom: 1,
  },
  rightSection: {
    width: '55%',
    alignItems: 'flex-end',
  },
  nitText: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  facturaNum: {
    fontSize: 10,
    marginBottom: 15,
  },
  codigoLine: {
    fontSize: 8,
    marginBottom: 2,
    textAlign: 'right',
  },
  codigoBox: {
    fontSize: 8,
    fontFamily: 'Courier',
    backgroundColor: 'white',
    padding: 3,
    border: '1 solid #666',
    textAlign: 'center',
    marginTop: 2,
  },
  separator: {
    borderTop: '1 solid black',
    marginVertical: 8,
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 9,
    marginBottom: 10,
  },
  clientInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    lineHeight: 1.4,
  },
  clientLeftColumn: {
    width: '60%',
  },
  clientRightColumn: {
    width: '35%',
    alignItems: 'flex-end',
  },
  infoLine: {
    marginBottom: 3,
  },
  mainTable: {
    border: '1 solid black',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottom: '1 solid black',
  },
  headerCell: {
    fontSize: 7,
    fontWeight: 'bold',
    padding: 3,
    borderRight: '1 solid black',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1 solid black',
  },
  cell: {
    fontSize: 7.5,
    padding: 3,
    borderRight: '1 solid black',
  },
  totalsSection: {
    flexDirection: 'row',
  },
  sonSection: {
    width: '60%',
    borderRight: '1 solid black',
    padding: 5,
    justifyContent: 'center',
  },
  sonText: {
    fontSize: 8,
  },
  totalsTable: {
    width: '80%',
  },
  totalRow: {
    flexDirection: 'row',
    borderBottom: '1 solid black',
  },
  totalLabel: {
    width: '115.5%',
    padding: 3,
    fontSize: 7.5,
    borderRight: '1 solid black',
    backgroundColor: 'white',
  },
  totalValue: {
    width: '40%',
    padding: 3,
    fontSize: 7.5,
    textAlign: 'right',
  },
  lastTotalRow: {
    flexDirection: 'row',
  },
  referencesTable: {
    border: '1 solid black',
    marginTop: 8,
    padding: 6,
    fontSize: 8,
  },
  referenceLine: {
    marginBottom: 2,
    lineHeight: 1.3,
  },
  mercaderiaSection: {
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  finalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  legalTextSection: {
    width: '70%',
    fontSize: 7,
    lineHeight: 1.2,
    textAlign: 'center',
  },
  legalText: {
    marginBottom: 4,
  },
  qrSection: {
    width: '25%',
    alignItems: 'center',
  },
  qrBox: {
    width: 80,
    height: 80,
    border: '1 solid #ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 3,
  },
  qrText: {
    fontSize: 6,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const InvoicePDF: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.leftSection}>  
            <View style={styles.logoBox}>
              <Image
                src="./images/gamarra.png"
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}> AGENCIA DESPACHANTE DE</Text>
            <Text style={styles.companyName}> ADUANA GARRAMA ANDES</Text>
            <Text style={styles.companyName}> S.R.L.</Text>
            <Text style={styles.addressLine}>No. Punto de Venta 0</Text>
            <Text style={styles.addressLine}>ENTRE CALLE CAPITAN RAVELO Y AV. ARCE</Text>
            <Text style={styles.addressLine}>ROSENDO GUTIERREZ Nro.: SN Edif.: TORRES</Text>
            <Text style={styles.addressLine}>MULTICENTRO BLOQUE B Piso.: 15 Depto.</Text>
            <Text style={styles.addressLine}>OFICINA 1501 Zona/Barrio: SOPOCACHI</Text>
            <Text style={styles.addressLine}>LA PAZ</Text>
          </View>
        </View>
        
        <View style={styles.rightSection}>
          <Text style={styles.nitText}>NIT 184102026</Text>
          <Text style={styles.facturaNum}>FACTURA Nº    4653</Text>
          
          <Text style={styles.codigoLine}>COD.    C98C6097FFF1DEBE3AE</Text>
          <Text style={styles.codigoLine}>AUTORIZACIÓN    DB5BC533D929F3AC586</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <Text style={styles.mainTitle}>FACTURA</Text>
      <Text style={styles.subtitle}>(Con Derecho a Crédito Fiscal)</Text>

      <View style={styles.clientInfo}>
        <View style={styles.clientLeftColumn}>
          <Text style={styles.infoLine}>
            <Text style={styles.bold}>Fecha: </Text>10/09/2025 05:42 p.m.
          </Text>
          <Text style={styles.infoLine}>
            <Text style={styles.bold}>Nombre/Razón Social: </Text>INDUSTRIA Y COMERCIO ALICONSUMO S.A.
          </Text>
        </View>
        
        <View style={styles.clientRightColumn}>
          <Text style={styles.infoLine}>
            <Text style={styles.bold}>NIT/CI/CEX: </Text>517174021
          </Text>
          <Text style={styles.infoLine}>
            <Text style={styles.bold}>Cod. Cliente: </Text>30084
          </Text>
        </View>
      </View>

      <View style={styles.mainTable}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, { width: '15%' }]}>CÓDIGO PRODUCTO / SERVICIO</Text>
          <Text style={[styles.headerCell, { width: '10%' }]}>CANTIDAD</Text>
          <Text style={[styles.headerCell, { width: '15%' }]}>UNIDAD DE MEDIDA</Text>
          <Text style={[styles.headerCell, { width: '22%' }]}>DESCRIPCIÓN</Text>
          <Text style={[styles.headerCell, { width: '13%' }]}>PRECIO UNITARIO</Text>
          <Text style={[styles.headerCell, { width: '12%' }]}>DESCUENTO</Text>
          <Text style={[styles.headerCell, { width: '15%', borderRight: 'none' }]}>SUBTOTAL</Text>
        </View>
        
        <View style={styles.tableRow}>
          <Text style={[styles.cell, { width: '15%', textAlign: 'center' }]}>AGA001</Text>
          <Text style={[styles.cell, { width: '10%', textAlign: 'center' }]}>1.00</Text>
          <Text style={[styles.cell, { width: '15%', textAlign: 'center' }]}>UNIDAD (SERVICIOS)</Text>
          <Text style={[styles.cell, { width: '22%' }]}>COMISION AGENCIA</Text>
          <Text style={[styles.cell, { width: '13%', textAlign: 'right' }]}>1,078.00</Text>
          <Text style={[styles.cell, { width: '12%', textAlign: 'right' }]}>0.00</Text>
          <Text style={[styles.cell, { width: '15%', textAlign: 'right', borderRight: 'none' }]}>1,078.00</Text>
        </View>

        <View style={styles.totalsSection}>
          <View style={styles.sonSection}>
            <Text style={styles.sonText}>
              SON: UN MIL SETENTA Y OCHO 00/100 BOLIVIANOS
            </Text>
          </View>
          
          <View style={styles.totalsTable}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>SUBTOTAL Bs</Text>
              <Text style={styles.totalValue}>1,078.00</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>DESCUENTO Bs</Text>
              <Text style={styles.totalValue}>0.00</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TOTAL Bs</Text>
              <Text style={styles.totalValue}>1,078.00</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>MONTO GIFT CARD Bs</Text>
              <Text style={styles.totalValue}>0.00</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>MONTO A PAGAR Bs</Text>
              <Text style={styles.totalValue}>1,078.00</Text>
            </View>
            <View style={styles.lastTotalRow}>
              <Text style={styles.totalLabel}>IMPORTE BASE CRÉDITO FISCAL Bs</Text>
              <Text style={styles.totalValue}>1,078.00</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.referencesTable}>
        <Text style={styles.referenceLine}>
          <Text style={styles.bold}>Referencia: </Text>OC 4520096446  
          <Text style={styles.bold}>   DIM: </Text>DI-2025-201-2250266  
          <Text style={styles.bold}>   CIF BS. </Text>159.013,00  
          <Text style={styles.bold}>   SOL CONT-1934   </Text>
          <Text style={styles.bold}>P-1824</Text>
        </Text>
        
        <View style={styles.mercaderiaSection}>
          <Text>Mercadería: DETERGENTE BOLIVAR BEBES NIÑOS</Text>
        </View>
      </View>

      <View style={styles.finalSection}>
        <View style={styles.legalTextSection}>
          <Text style={styles.legalText}>
            "ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PAÍS. EL USO ILICITO SERÁ SANCIONADO PENALMENTE DE ACUERDO A LEY"
          </Text>
          <Text style={styles.legalText}>
            Ley N° 453: Están prohibidas las prácticas comerciales abusivas, tienes derecho a denunciarlas.
          </Text>
          <Text style={styles.legalText}>
            Este documento es la Representación Gráfica de un Documento Fiscal Digital emitido en una Modalidad de Facturación en Línea
          </Text>
        </View>

        <View style={styles.qrSection}>
          <View style={styles.qrBox}>
            <Image
              src="./images/qr.png"
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;