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

export function DeleteCategoryDialog() {
  return (
    <Dialog>
      <div>
        <DialogTrigger asChild>
        <Button>
        Delete category
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Delete Category</DialogTitle>
            <DialogDescription>
            Sure you want to delete?. Click Delete if you are sure.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose>
              <Button type="submit" onClick={() => {console.log('deleted')}} variant="destructive">Delete</Button>
            </DialogClose>
          </DialogFooter>
       </DialogContent>
      </div>
    </Dialog>
  )
}
