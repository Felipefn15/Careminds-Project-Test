"use client"

import type { Wallet } from "@/types/portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency } from "@/lib/utils"

interface WalletListProps {
  wallets: Wallet[]
  selectedWallet: Wallet | null
  onSelectWallet: (wallet: Wallet) => void
}

export default function WalletList({ wallets, selectedWallet, onSelectWallet }: WalletListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallets</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Current Amount</TableHead>
              <TableHead className="text-right">Spent Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {wallets.map((wallet) => (
              <TableRow
                key={wallet.walletName}
                className={`cursor-pointer hover:bg-muted transition-colors ${
                  selectedWallet?.walletName === wallet.walletName ? "bg-muted" : ""
                }`}
                onClick={() => onSelectWallet(wallet)}
              >
                <TableCell className="font-medium">{wallet.walletName}</TableCell>
                <TableCell className="text-right">{formatCurrency(wallet.currentAmount)}</TableCell>
                <TableCell className="text-right">{formatCurrency(wallet.spentAmount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
