import { apiGet } from '@/config/api';
import endpoints from '@/config/api/endpoints';
import { IQuote } from '@/types/quote';

const endpoint = endpoints.quotes;

export const QuoteService = {
  async getAll(): Promise<IQuote[]> {
    const data = await apiGet<IQuote[]>(endpoint.all());
    return data;
  },
  async getById(id: number): Promise<IQuote> {
    const data = await apiGet<IQuote>(endpoint.byId(id));
    return data;
  },
  async getRandom(): Promise<IQuote> {
    const data = await apiGet<IQuote>(endpoint.random());
    return data;
  },
};
