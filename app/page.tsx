"use client"

import { useState } from "react"
import portfolioData from "@/data/portfolio.json"
import WalletList from "@/components/wallet-list"
import AssetList from "@/components/asset-list"
import WalletSummary from "@/components/wallet-summary"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Wallet } from "@/types/portfolio"

export default function Home() {
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(portfolioData[0] as Wallet)

  return (
    <main className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 pl-2">
          <h1 className="text-4xl font-bold">Investment Portfolio</h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <WalletList
              wallets={portfolioData as Wallet[]}
              selectedWallet={selectedWallet}
              onSelectWallet={setSelectedWallet}
            />
          </div>

          <div>
            {selectedWallet && (
              <>
                <WalletSummary wallet={selectedWallet} />
                <AssetList assets={selectedWallet.assets} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
