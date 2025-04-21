import { useParams, useNavigate } from "react-router-dom";
import { farms } from "@/data/farms";
import Header from "./Header";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface Cow {
  id: string;
  age: number;
  milkYield: number;
  price: number;
  imageUrl: string;
  breed: string;
  weight: number;
  lastCalvingDate: string;
  pregnancyStatus: string;
  productivity: {
    milkFat: number;
    milkProtein: number;
    averageYield: number;
    lactationNumber: number;
  };
  health: {
    vaccination: string[];
    diseases: string[];
    vetInspectionDate: string;
  };
  genetics: {
    father: string;
    mother: string;
    pedigree: boolean;
  };
}

export default function FarmPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const farm = farms.find(f => f.id === id);
  
  useEffect(() => {
    if (!farm) {
      navigate("/catalog");
    }
  }, [farm, navigate]);
  
  if (!farm) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPath={`/farm/${id}`} />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{farm.name}</h1>
          <p className="text-gray-600">{farm.description}</p>
          <div className="mt-4 flex gap-4">
            <Badge variant="outline">{farm.type}</Badge>
            <Badge variant="outline">{farm.location}</Badge>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farm.cattle.map(cow => (
            <Card key={cow.id} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div>
                <img 
                  src={cow.imageUrl} 
                  alt={`Корова породы ${cow.breed}`}
                  className="w-full h-72 object-cover"
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

                  <Badge variant="outline" className="w-full justify-center">
                    {cow.pregnancyStatus}
                  </Badge>

                  <div className="pt-2 space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"/>
                      <span className="text-gray-600">Последний осмотр: {new Date(cow.health.vetInspectionDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Цена:</span>
                      <span className="text-xl font-semibold">{cow.price.toLocaleString()} ₸</span>
                    </div>
                    <Button 
                      className="w-full h-12 text-lg font-medium"
                      variant="default"
                    >
                      Купить за {cow.price.toLocaleString()} ₸
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
