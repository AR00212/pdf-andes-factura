import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import InvoicePDF from './components/InvoiceViewer';

const InvoiceViewer: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <PDFViewer 
        width="100%"
        height="100%"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      >
        <InvoicePDF />
      </PDFViewer>
    </div>
  );
};

export default InvoiceViewer;