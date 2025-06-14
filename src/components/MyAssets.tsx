import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "./Header"
import crownImage from "../assets/crownImage.jpeg";

interface CowAsset {
  id: string;
  breed: string;
  age: number;
  weight: number;
  milkYield: number;
  purchaseDate: string;
  imageUrl: string;
  productivity: {
    milkFat: number;
    milkProtein: number;
    averageYield: number;
  };
  health: {
    vetInspectionDate: string;
  };
}

const mockAssets: CowAsset[] = [
  {
    id: "1",
    breed: "Голштинская",
    age: 4,
    weight: 650,
    milkYield: 32,
    purchaseDate: "2025-01-15",
    imageUrl: crownImage,
    productivity: {
      milkFat: 4.2,
      milkProtein: 3.4,
      averageYield: 9800
    },
    health: {
      vetInspectionDate: "2025-03-01"
    }
  },
  {
    id: "2",
    breed: "Симментальская",
    age: 5,
    weight: 680,
    milkYield: 28,
    purchaseDate: "2025-02-01",
    imageUrl: crownImage,
    productivity: {
      milkFat: 4.0,
      milkProtein: 3.5,
      averageYield: 8500
    },
    health: {
      vetInspectionDate: "2025-03-01"
    }
  },
  {
    id: "3",
    breed: "Голштинская",
    age: 3,
    weight: 620,
    milkYield: 30,
    purchaseDate: "2025-03-10",
    imageUrl: crownImage,
    productivity: {
      milkFat: 4.1,
      milkProtein: 3.3,
      averageYield: 9200
    },
    health: {
      vetInspectionDate: "2025-03-15"
    }
  }
];

export default function MyAssets() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath="/my-assets" />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h2 className="text-2xl font-semibold mb-8">Мои активы</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockAssets.map((cow) => (
            <Card key={cow.id} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div>
                <img 
                  src={cow.imageUrl} 
                  alt={`Корова породы ${cow.breed}`}
                  className="w-full h-70 object-cover"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Корова #{cow.id}</h3>
                  </div>

                  <div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">{cow.breed}</span>
                      <span>{cow.weight} кг</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-2">
                      <div className="space-y-2">
                        <div className="text-gray-600">
                          Возраст: <span className="text-black">{cow.age} лет</span>
                        </div>
                        <div className="text-gray-600">
                          Жирность: <span className="text-black">{cow.productivity.milkFat}%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-gray-600">
                          Удой: <span className="text-black">{cow.milkYield} л/день</span>
                        </div>
                        <div className="text-gray-600">
                          Белок: <span className="text-black">{cow.productivity.milkProtein}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"/>
                      <span className="text-gray-600">
                        Последний осмотр: {new Date(cow.health.vetInspectionDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"/>
                      <span className="text-gray-600">
                        Дата покупки: {new Date(cow.purchaseDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full h-12 text-lg font-medium"
                    >
                      Продать
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
