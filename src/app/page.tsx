import CardDetail from '@/components/CardDetail';
import { getProductSKU } from '@/utils/api';

export default async function Home() {
  const product = await getProductSKU();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardDetail product={product} />
    </main>
  )
}
