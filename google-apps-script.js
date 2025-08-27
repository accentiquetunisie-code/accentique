
function doPost(e) {
  try {
    console.log('Received POST request');
    console.log('Event object:', e);
    console.log('Parameter names:', Object.keys(e.parameter || {}));
    console.log('All parameters:', e.parameter);
    
    // Get the active spreadsheet by ID (replace with your actual spreadsheet ID)
    const spreadsheetId = '11RSjrP0WA-64XLi2uF2WFi1lQNf0Lx5naQqpE3KmXi8';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();
    
    // Get data from form parameters
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const customerName = e.parameter.customerName || '';
    const customerPhone = e.parameter.customerPhone || '';
    const customerEmail = e.parameter.customerEmail || '';
    const customerAddress = e.parameter.customerAddress || '';
    const items = e.parameter.items || '';
    const subtotal = e.parameter.subtotal || '';
    const discount = e.parameter.discount || '';
    const shipping = e.parameter.shipping || '';
    const total = e.parameter.total || '';
    const isGift = e.parameter.isGift || '';
    const giftMessage = e.parameter.giftMessage || '';
    const orderDate = e.parameter.orderDate || '';
    
    console.log('Processing order for:', customerName);
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Date/Heure',
        'Nom Client',
        'Téléphone',
        'Email',
        'Adresse',
        'Articles',
        'Sous-total',
        'Remise',
        'Livraison',
        'Total',
        'Cadeau',
        'Message',
        'Date Commande'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // Prepare the row data
    const rowData = [
      timestamp,
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      items,
      subtotal,
      discount,
      shipping,
      total,
      isGift,
      giftMessage,
      orderDate
    ];
    
    console.log('Row data to append:', rowData);
    
    // Add the new order data
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, sheet.getLastColumn());
    
    console.log('Order added successfully to spreadsheet');
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Order added successfully',
        rowData: rowData
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing order:', error);
    console.error('Error stack:', error.stack);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testScript() {
  const testData = {
    parameter: {
      timestamp: new Date().toISOString(),
      customerName: 'Test Customer',
      customerPhone: '+216 12 345 678',
      customerEmail: 'test@example.com',
      customerAddress: 'Test Address, Tunis 1000',
      items: 'Test Product (x1)',
      subtotal: '50.00 DT',
      discount: '0.00 DT',
      shipping: '7.00 DT',
      total: '57.00 DT',
      isGift: 'Non',
      giftMessage: '',
      orderDate: new Date().toLocaleDateString('fr-FR')
    }
  };
  
  return doPost(testData);
}

// Optional: Function to get all orders (for testing)
function getAllOrders() {
  try {
    const spreadsheetId = '11RSjrP0WA-64XLi2uF2WFi1lQNf0Lx5naQqpE3KmXi8';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    return data;
  } catch (error) {
    console.error('Error getting orders:', error);
    return [];
  }
}0
