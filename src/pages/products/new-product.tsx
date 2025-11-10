import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon } from "lucide-react"
import { useState } from "react"

const ProductInputs = [
  {
    name: "SKU",
    placeholder: "PROD-002-A",
    inputType: "text",
  },
  {
    name: "Name",
    placeholder: "Running Shoes",
    inputType: "text",
  },
  {
    name: "Brand",
    placeholder: "Adidas",
    inputType: "text",
  },
  // categories
  {
    name: "Description",
    placeholder: "Lightweight, breathable training T-shirt.",
    inputType: "text",
  },
  {
    name: "Purchase Price",
    placeholder: "19.99",
    inputType: "number",
  },
  {
    name: "Sale Price",
    placeholder: "21.99",
    inputType: "number",
  },
  {
    name: "Currency",
    placeholder: "USD",
    inputType: "text",
  },
  {
    name: "Tax",
    placeholder: "0.19",
    inputType: "number",
  },
  {
    name: "Stock",
    placeholder: "29",
    inputType: "number",
  },
  {
    name: "Min. Stock",
    placeholder: "2",
    inputType: "number",
  },
  {
    name: "Unit",
    placeholder: "Unit",
    inputType: "text",
  },
  {
    name: "Weight (kg)",
    placeholder: "29",
    inputType: "number",
  },
  {
    name: "Status",
    placeholder: "29",
    inputType: "number",
  },
]

export function NewProductDialog() {
  const [formData, setFormData] = useState({
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  }

  const displayInputs = () => {
    return ProductInputs.map(input => (
     <div className="grid gap-3">
       <Label htmlFor={input.name.trim().toLowerCase().replace(/\s+/g, "")}>{input.name}</Label>
       <Input onChange={handleChange} id={input.name.trim().toLowerCase().replace(/\s+/g, "")} name={input.name.trim().toLowerCase().replace(/\s+/g, "")} placeholder={input.placeholder} type={input.inputType} />
     </div>
    ))
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
        <Button variant="outline">
        New product
          <PlusIcon />
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>New Product</DialogTitle>
            <DialogDescription>
              Create a new product here. Click create when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4">
          { displayInputs() }
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

