"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddTradeDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [hasFees, setHasFees] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const tradeData = Object.fromEntries(formData)

    // Here you would typically add the new trade to your state or send it to an API
    console.log("New trade added:", tradeData)

    // Close the dialog
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-zinc-300 border-zinc-700 hover:bg-zinc-800">
          <Plus className="w-4 h-4 mr-2" />
          Add Trade
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 text-zinc-100 border-zinc-700">
        <DialogHeader>
          <DialogTitle>Add New Trade</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tradeType">Trade Type</Label>
            <RadioGroup defaultValue="buy" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="buy" id="buy" />
                <Label htmlFor="buy">Buy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sell" id="sell" />
                <Label htmlFor="sell">Sell</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              placeholder="Enter price"
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              step="0.000001"
              placeholder="Enter amount"
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="datetime">Date and Time</Label>
            <Input
              id="datetime"
              name="datetime"
              type="datetime-local"
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="fees" checked={hasFees} onCheckedChange={setHasFees} />
            <Label htmlFor="fees">Include Fees</Label>
          </div>

          {hasFees && (
            <div className="space-y-2">
              <Label htmlFor="feeType">Fee Type</Label>
              <Select name="feeType">
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
                  <SelectValue placeholder="Select fee type" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-100">
                  <SelectItem value="percentage">Percentage of Trade</SelectItem>
                  <SelectItem value="fixed">Fixed Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Submit Trade
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

