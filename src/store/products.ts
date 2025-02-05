import { selector } from "recoil";

const productsAPI = import.meta.env.VITE_FAKE_STORE_API;

interface ProductInfo {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
}

export const productsItem = selector<ProductInfo[]>({
  key: "productsItem",
  get: async () => {
    try {
      const response = await fetch(productsAPI);
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error : ${error}`);
      return [];
    }
  },
});
