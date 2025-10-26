"user cliente"

import { Input } from "@/components/ui/input"
import Header from "./_components/ui/header"
import { Button } from "@/components/ui/button"
import { FootprintsIcon, SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/ui/barbershop-item"

const Home = async () => {
  // chama bd
  const barbershops = await db.barbershop.findMany({})
  const popularBarberShop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  console.log({ barbershops })
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Leonardo!</h2>
        <p>Sábado, 25 de Outubro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant={"secondary"}>
            <Image src="/cabelo.svg" width={16} height={16} alt="cabelo" />
            Cabelo
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <Image src="/barba.svg" width={16} height={16} alt="barba" />
            Barba
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="/acabamento.svg"
              width={16}
              height={16}
              alt="acabamento"
            />
            Acabamento
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <FootprintsIcon size={16}/>
            Pézinho
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <Image src="/barba.svg" width={16} height={16} alt="barba" />
            Sobrancelha
          </Button>
          <Button className="gap-2" variant={"secondary"}>
            <Image
              src="/acabamento.svg"
              width={16}
              height={16}
              alt="acabamento"
            />
            Acabamento
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende com os melhores..."
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/*left div*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia Premium Barber</p>
              </div>
            </div>
            {/*right div*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Outubro</p>
              <p className="text-2xl">25</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarberShop.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2025 - Projeto Integrador
              <span className="font-bold uppercase text-red-600"> UNIVESP</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
