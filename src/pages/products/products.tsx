import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/auth/auth-context";
import type { Product } from "@/types/product";
import { PlusIcon } from "lucide-react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { EditProductDialog } from "./edit-product";


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
    <div className="flex flex-row justify-between mb-2">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Products</h2>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <EditProductDialog />
      </div>
    </div>
    <DataTable columns={columns} data={products || []} />
    </>
  );
}

export default Products;
