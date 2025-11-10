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
import type { Category } from "./types/category"

const ProductInputs = [
  {
    name: "Name",
    placeholder: "Technology",
    inputType: "text",
  },
  {
    name: "Description",
    placeholder: "Electronic products",
    inputType: "text",
  },
]

export function NewCategoryDialog() {
  const [formData, setFormData] = useState<Partial<Category>>({
    name: "",
    description: "",
    is_active: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const displayInputs = () => {
    return ProductInputs.map(input => (
     <div className="grid gap-3" key={input.name}>
       <Label htmlFor={input.name.trim().toLowerCase().replace(/\s+/g, "")}>{input.name}</Label>
       <Input onChange={handleChange} id={input.name.trim().toLowerCase().replace(/\s+/g, "")} name={input.name.trim().toLowerCase().replace(/\s+/g, "")} placeholder={input.placeholder} type={input.inputType} />
     </div>
    ))
  }

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
        <Button variant="outline">
        New Category
          <PlusIcon />
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>New Category</DialogTitle>
            <DialogDescription>
              Create a new category here. Click create when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
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
