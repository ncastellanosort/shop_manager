import type { ColumnDef } from "@tanstack/react-table";

export type ProductState = 'available' | 'hidden' | 'not available';

export type ProductColumns = {
  id: number;
  name: string;
  tags: string[];
  brand: string;
  description: string;
  price: number;
  sku: string;
  stock: number;
  state: ProductState;
};

export const columns: ColumnDef<ProductColumns>[]= [
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "state",
    header: "State",
  },
]
