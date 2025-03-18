import { Button } from "@/components/ui/button"
import Header from "./Header"
import { useState } from "react"
import { DepositModal } from "./modals/DepositModal"
import { WithdrawModal } from "./modals/WithdrawModal"

export default function Finances() {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/finances" />
      
      <main className="max-w-7xl mx-auto pt-24 pb-12 pl-4">
        <div className="space-y-6">
          <h2 className="text-2xl">Баланс</h2>
          <p className="text-4xl font-semibold">100 000 тенге</p>
          
          <div className="flex gap-4">
            <Button 
              className="w-[140px] h-11 rounded-lg bg-gradient-to-r from-primary to-primary/90 
                hover:from-primary/90 hover:to-primary transition-all duration-300"
              onClick={() => setIsDepositOpen(true)}
            >
              Пополнить
            </Button>
            <Button 
              variant="outline"
              className="w-[140px] h-11 rounded-lg border-2 border-primary/10 hover:bg-primary/5 
                transition-all duration-300"
              onClick={() => setIsWithdrawOpen(true)}
            >
              Вывести
            </Button>
          </div>
        </div>
      </main>

      <DepositModal 
        isOpen={isDepositOpen} 
        onClose={() => setIsDepositOpen(false)} 
      />
      
      <WithdrawModal 
        isOpen={isWithdrawOpen} 
        onClose={() => setIsWithdrawOpen(false)} 
      />
    </div>
  )
}
