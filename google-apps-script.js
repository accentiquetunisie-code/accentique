function doPost(e) {
  try {
    if (!e) {
      throw new Error("No event object. Did you try to run doPost() directly?");
    }

    console.log('Received POST request');
    console.log('Event object:', e);
    console.log('Parameter names:', Object.keys(e.parameter || {}));
    console.log('All parameters:', e.parameter);

    const spreadsheetId = '1KgYsytu41mC4wPmiiibKztidCk8W-sZb1BLYCIcuDxs';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();

    // Use form parameters
    const p = e.parameter || {};
    const timestamp = p.timestamp || new Date().toISOString();
    const customerName = p.customerName || '';
    const customerPhone = p.customerPhone || '';
    const customerEmail = p.customerEmail || '';
    const customerAddress = p.customerAddress || '';
    const items = p.items || '';
    const subtotal = p.subtotal || '';
    const discount = p.discount || '';
    const shipping = p.shipping || '';
    const total = p.total || '';
    const isGift = p.isGift || '';
    const giftMessage = p.giftMessage || '';
    const orderDate = p.orderDate || '';

    if (sheet.getLastRow() === 0) {
      const headers = [
        'Date/Heure','Nom Client','Téléphone','Email','Adresse',
        'Articles','Sous-total','Remise','Livraison','Total',
        'Cadeau','Message','Date Commande'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length)
           .setBackground('#4285f4')
           .setFontColor('white')
           .setFontWeight('bold');
    }

    const rowData = [
      timestamp, customerName, customerPhone, customerEmail,
      customerAddress, items, subtotal, discount, shipping,
      total, isGift, giftMessage, orderDate
    ];
    sheet.appendRow(rowData);
    sheet.autoResizeColumns(1, sheet.getLastColumn());

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Order added successfully',
      rowData
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString(),
      stack: error.stack
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
