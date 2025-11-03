import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth/auth-context";
import type { Product } from "../types/product";
import { PlusIcon } from "lucide-react";


function Products() {
  const auth = useContext(AuthContext) 
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth?.token) return;

    const fetchProducts = async (token: string | null | undefined) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch('http://localhost:3000/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (!res.ok) throw new Error('err fetching data');
        const data = await res.json() as Product[];
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(auth?.token);
  }, [auth?.token]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>error: {error}</p>

  return (
    <>
    <div className="flex flex-row justify-between">
      <h2 className="text-neutral-200 text-2xl">Products</h2>
      <button className="text-neutral-400 px-1 py-2 rounded-md hover:bg-neutral-900 animation duration-150 cursor-pointer flex flex-row justify-center items-center gap-x-1">
        <PlusIcon />
        <p className="pr-1">New Product</p>
      </button>
    </div>
    </>
  );
}

export default Products;
