import BarberShopItem from "../_components/ui/barbershop-item"
import Header from "../_components/ui/header"
import Search from "../_components/ui/search"
import { db } from "../_lib/prisma"

interface BarberShopsPageProps {
  searchParams: {
    search?: string
  }
}

const BarberShopsPage = async ({ searchParams }: BarberShopsPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchParams?.search,
            mode: "insensitive",
          },
        },
        {
          services: {
            some: {
              name: {
                contains: searchParams?.search,
                mode: "insensitive",
              },
            },
          },
        },
      ],
    },
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams.search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarberShopsPage
