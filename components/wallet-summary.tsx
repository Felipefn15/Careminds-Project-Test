import type { Wallet } from "@/types/portfolio"
import { Card, CardContent } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

interface WalletSummaryProps {
  wallet: Wallet
}

export default function WalletSummary({ wallet }: WalletSummaryProps) {
  const profitLossPercentage = (wallet.profitLoss / wallet.spentAmount) * 100

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Current Value</p>
            <p className="text-2xl font-bold">{formatCurrency(wallet.currentAmount)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Invested</p>
            <p className="text-2xl font-bold">{formatCurrency(wallet.spentAmount)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Profit/Loss</p>
            <p className={`text-2xl font-bold ${wallet.profitLoss >= 0 ? "text-green-500" : "text-red-500"}`}>
              {formatCurrency(wallet.profitLoss)} ({profitLossPercentage.toFixed(2)}%)
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
