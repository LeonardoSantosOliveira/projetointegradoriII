import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
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
  )
}

export default Footer
