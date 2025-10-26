import { Barbershop } from "@/app/generated/prisma"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BarberShopItemProps {
  barbershop: Barbershop
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[159px]">
      <CardContent className="p-0 px-1 pb-3 pt-1">
        <div className="relative h-[167px] w-full rounded-2xl">
          <Image
            fill
            alt={barbershop.name}
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
          ></Image>
          <Badge
            className="absolute left-2 top-2 space-x-2"
            variant={"secondary"}
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5.0</p>
          </Badge>
        </div>
        <div className="px-1 py-3">
          <h3 className="overflow-hidden text-ellipsis text-nowrap font-semibold">
            {barbershop.name}
          </h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant={"secondary"} className="mt-3 w-full" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
