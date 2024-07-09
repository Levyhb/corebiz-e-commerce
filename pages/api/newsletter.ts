import axios from "axios";

export async function subscribeNewsletter(name: string, email: string) {
  const apiUrl = process.env.NEXT_PUBLIC_NEWSLETTER_API_URL;

  if (apiUrl) {
    try {
        const response = await axios.post(apiUrl, {name, email}, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        console.log("Seu e-mail foi cadastrado com sucesso!")
        return response.data;
      } catch (error) {
        console.error('Erro ao cadastrar newsletter:', error);
        throw new Error('Subscription failed');
      }
  }
}