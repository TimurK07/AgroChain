import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "./Header"

import crownImage from "../assets/crownImage.jpeg";


interface CowAsset {
  id: string;
  age: number;
  milkYield: number;
  purchaseDate: string;
  imageUrl: string;
}

const mockAssets: CowAsset[] = [
  {
    id: "1",
    age: 20,
    milkYield: 10,
    purchaseDate: "2025-01-15",
    imageUrl: crownImage
  },
  {
    id: "2",
    age: 18,
    milkYield: 12,
    purchaseDate: "2025-02-01",
    imageUrl: crownImage
  },
  {
    id: "3",
    age: 24,
    milkYield: 8,
    purchaseDate: "2025-03-10",
    imageUrl: crownImage
  }
];

export default function MyAssets() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/my-assets" />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h2 className="text-2xl font-semibold mb-8">Мои активы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAssets.map((cow) => (
            <Card key={cow.id} className="overflow-hidden bg-white">
              <div className="aspect-[4/3] relative">
                <img 
                  src={cow.imageUrl} 
                  alt={`Корова #${cow.id}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Корова #{cow.id}</h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Возраст</span>
                      <span>{cow.age} лет</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Прогноз дойности</span>
                      <span>{cow.milkYield} л/день</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Дата покупки</span>
                      <span>{new Date(cow.purchaseDate).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full h-12 rounded-xl bg-white border-2 border-primary/10 
                    hover:bg-primary/5 transition-colors duration-300 text-primary"
                >
                  Продать
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
