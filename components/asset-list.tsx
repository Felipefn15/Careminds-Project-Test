import type { Asset } from "@/types/portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils"
import AssetIcon from "./asset-icon"

interface AssetListProps {
  assets: Asset[]
}

export default function AssetList({ assets }: AssetListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Purchase Price</TableHead>
              <TableHead className="text-right">Current Price</TableHead>
              <TableHead className="text-right">Profit/Loss</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => {
              const totalPurchase = asset.purchasePrice * asset.quantity
              const totalCurrent = asset.currentPrice * asset.quantity
              const profitLoss = totalCurrent - totalPurchase
              const profitLossPercentage = (profitLoss / totalPurchase) * 100

              return (
                <TableRow key={asset.symbol}>
                  <TableCell className="flex items-center gap-2">
                    <AssetIcon symbol={asset.symbol} type={asset.type} />
                    <span>{asset.symbol}</span>
                  </TableCell>
                  <TableCell className="capitalize">{asset.type}</TableCell>
                  <TableCell className="text-right">{asset.quantity}</TableCell>
                  <TableCell className="text-right">{formatCurrency(asset.purchasePrice)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(asset.currentPrice)}</TableCell>
                  <TableCell className={`text-right ${profitLoss >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {formatCurrency(profitLoss)} ({profitLossPercentage.toFixed(2)}%)
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
