import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

const tokens = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    logo: "/crypto-logos/bitcoin.png",
    currentPrice: 29324.52,
    profitLoss: 1250.75,
    investment: 10000,
    currentValue: 11250.75,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    logo: "/crypto-logos/ethereum.png",
    currentPrice: 1869.25,
    profitLoss: -150.3,
    investment: 5000,
    currentValue: 4849.7,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    logo: "/crypto-logos/cardano.png",
    currentPrice: 0.37,
    profitLoss: 75.2,
    investment: 2000,
    currentValue: 2075.2,
  },
]

export default function Home() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)
  }

  const formatPercentage = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value / 100)
  }


  return (
    <main className="flex flex-col justify-center pt-32 max-w-5xl mx-auto">
      <Card className="w-full border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Your Crypto Trades</CardTitle>
          <Button variant="default" size="default">Add Trades</Button>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Token</TableHead>
                <TableHead className="text-right">Current Price</TableHead>
                <TableHead className="text-right">Profit/Loss</TableHead>
                <TableHead className="text-right">Investment</TableHead>
                <TableHead className="text-right">Current Value</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {tokens.map((token) => (
                <TableRow key={token.id} className="group">
                  <TableCell className="font-medium">
                    <Link href={`/token/${token.id}`} className="flex items-center hover:underline">
                      {/* <Image
                        src={token.logo || "/placeholder.svg"}
                        alt={token.name}
                        width={24}
                        height={24}
                        className="mr-2"
                      /> */}
                      <span>{token.name}</span>
                      <span className="ml-1 text-muted-foreground">({token.symbol})</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(token.currentPrice)}</TableCell>
                  <TableCell className={`text-right ${token.profitLoss >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {formatCurrency(token.profitLoss)} ({formatPercentage((token.profitLoss / token.investment) * 100)})
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(token.investment)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(token.currentValue)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
