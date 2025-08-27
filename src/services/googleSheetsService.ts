
interface OrderData {
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    total: number;
  }>;
  totals: {
    subtotal: string;
    discount: string;
    shipping: string;
    total: string;
  };
  giftMessage?: string;
  isGift: boolean;
  orderDate: string;
}

export const sendOrderToGoogleSheets = async (orderData: OrderData) => {
  // Use the correct Google Apps Script URL provided by the user
  const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbxg41oigc2NIhEmUmnY5aPO9JyuFemPQzOO7HqQH5Oeyicn5xQCRkn2FgHRrDZ-NPMq2Q/exec';
  
  console.log('Sending order to Google Sheets:', orderData);

  try {
    // Prepare data as URL-encoded form data for better compatibility
    const formData = new URLSearchParams();
    formData.append('timestamp', new Date().toISOString());
    formData.append('customerName', orderData.customer.name);
    formData.append('customerPhone', orderData.customer.phone);
    formData.append('customerEmail', orderData.customer.email);
    formData.append('customerAddress', orderData.customer.address);
    formData.append('items', orderData.items.map(item => `${item.name} (x${item.quantity})`).join(', '));
    formData.append('subtotal', orderData.totals.subtotal + ' DT');
    formData.append('discount', orderData.totals.discount + ' DT');
    formData.append('shipping', orderData.totals.shipping + ' DT');
    formData.append('total', orderData.totals.total + ' DT');
    formData.append('isGift', orderData.isGift ? 'Oui' : 'Non');
    formData.append('giftMessage', orderData.giftMessage || '');
    formData.append('orderDate', orderData.orderDate);

    console.log('Form data prepared:', Object.fromEntries(formData));
    console.log('Sending POST request to:', googleSheetsUrl);
    
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    if (response.ok) {
      const responseText = await response.text();
      console.log('Response text:', responseText);
      return { success: true, message: 'Order sent successfully' };
    } else {
      console.error('Response not OK:', response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
    throw new Error('Impossible d\'envoyer la commande. Veuillez réessayer.');
  }
};
