export interface Asset {
  type: string
  symbol: string
  name: string
  quantity: number
  purchasePrice: number
  currentPrice: number
}

export interface Wallet {
  walletName: string
  currentAmount: number
  spentAmount: number
  profitLoss: number
  assets: Asset[]
}
