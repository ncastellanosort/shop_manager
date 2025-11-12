import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type CategoryColumns = {
  id: number,
  name: string;
  description: string | null;
  is_active: boolean;
};

const deleteCategory = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${auth?.token}`,
      },
    });

    const apiData = await res.json();

    if (!res.ok) {
      throw new Error(apiData || "err deleting data");
    }     
  } catch (err) {
      throw new Error(`error deleting data ${(err as Error).message}`)
  }
}

export const columns: ColumnDef<CategoryColumns>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "is_active",
    header: "Active",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(category.name)}>
              Copy name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit category</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {deleteCategory(category.id)}}>Delete category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
