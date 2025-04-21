import { Card } from "@/components/ui/card"
import Header from "./Header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useNavigate } from "react-router-dom"
import { farms } from "@/data/farms"

export default function Catalog() {
  const navigate = useNavigate();

  const handleFarmClick = (id: string) => {
    navigate(`/farm/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/catalog" />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h2 className="text-2xl font-semibold mb-8">Каталог</h2>
        
        <Card className="overflow-hidden bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Христианские хозяйства г. Павлодар</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {farms.map((farm) => (
                <TableRow 
                  key={farm.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleFarmClick(farm.id)}
                >
                  <TableCell className="font-medium py-4">{farm.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  )
}
