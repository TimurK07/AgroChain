import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WithdrawModal({ isOpen, onClose }: WithdrawModalProps) {
  const [amount, setAmount] = useState("");

  const handleWithdraw = async () => {
    // TODO: Implement withdraw logic
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Вывод средств</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Сумма вывода</Label>
            <Input
              id="amount"
              type="number"
              placeholder="10000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-11"
            />
          </div>
          <Button 
            onClick={handleWithdraw}
            className="w-full h-11 rounded-lg bg-gradient-to-r from-primary to-primary/90 
              hover:from-primary/90 hover:to-primary transition-all duration-300"
          >
            Вывести
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
