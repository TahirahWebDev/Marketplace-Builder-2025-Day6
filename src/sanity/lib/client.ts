import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: "skueOePekdWusVQRbtWNPtUfdQJe7GNgrv1n1b6Wt8rb4wNDGYNCuZFcqR68VTpfhKNyAiALLniHWmPZiulif6WCpYAzp1R7nN2rRR3iSuDBSlUhFmEJ2RU7QAag59uGJDGYR8yrWAHeQnIaAILyzrvD0pd553cIOk0epif5HohGHq2UA7fo",
})

const saveCartToSanity = async (sessionId:string, cartItems:any ) => {
  try {
    const existingCart = await client.fetch(
      `*[_type == "cart" && sessionId == $sessionId][0]`,
      { sessionId }
    );

    if (existingCart) {
      // Update existing cart
      await client.patch(existingCart._id)
      .setIfMissing({ items: [] })
      .append("items", cartItems)
      .commit();
    
    } else {
      // Create a new cart
      await client.create({
        _type: "cart",
        sessionId,
        items: cartItems,
      });
    }
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

export default saveCartToSanity;
