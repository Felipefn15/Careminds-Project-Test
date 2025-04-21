import { Bitcoin, DollarSign, Coins } from "lucide-react"

interface AssetIconProps {
  symbol: string
  type: string
}

export default function AssetIcon({ symbol, type }: AssetIconProps) {
  // Return appropriate icon based on asset type or specific symbols
  if (type.toLowerCase() === "crypto") {
    if (symbol === "BTC") {
      return <Bitcoin className="h-5 w-5 text-yellow-500" />
    } else if (symbol === "ETH") {
      return <Coins className="h-5 w-5 text-purple-500" />
    } else {
      return <Coins className="h-5 w-5 text-blue-500" />
    }
  } else {
    return <DollarSign className="h-5 w-5 text-green-500" />
  }
}
