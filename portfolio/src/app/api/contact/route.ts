import { ContactFormData } from '@/components/Contact/types';

async function sendViaWeb3Forms(formData: ContactFormData) {
  try {
    const web3FormsData = {
      ...formData,
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
    };

    // Submit to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(web3FormsData)
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Web3Forms submission failed:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, message } = body;

    // Validation
    if (!firstName || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const web3FormsSuccess = await sendViaWeb3Forms(body);

    if (!web3FormsSuccess) {
      throw new Error("Email delivery failed");
    }

    return new Response(JSON.stringify({
      success: true,
      web3FormsDelivered: web3FormsSuccess,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
