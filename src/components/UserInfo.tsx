import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function UserInfo() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    iin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/user/info/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          middleName: formData.middleName,
          iin: formData.iin,
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при сохранении данных');
      }

      navigate('/catalog');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-xl border-primary/10 relative overflow-hidden bg-white/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Личные данные
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Заполните информацию о себе
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        
        <div className="space-y-4 relative">
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium">
              Фамилия
            </Label>
            <Input 
              id="lastName"
              name="lastName"
              placeholder="Нагорный"
              className="h-12"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium">
              Имя
            </Label>
            <Input 
              id="firstName"
              name="firstName"
              placeholder="Василий"
              className="h-12"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="middleName" className="text-sm font-medium">
              Отчество
            </Label>
            <Input 
              id="middleName"
              name="middleName"
              placeholder="Васильевич"
              className="h-12"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="iin" className="text-sm font-medium">
              ИИН
            </Label>
            <Input 
              id="iin"
              name="iin"
              placeholder="XXXXXXXXXXXX"
              className="h-12"
              value={formData.iin}
              onChange={handleChange}
              maxLength={12}
            />
          </div>
          
          <Button 
            className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 
              hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg shadow-primary/20
              hover:shadow-primary/30 font-medium"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Сохранение...' : 'Сохранить'}
          </Button>
        </div>
      </Card>
    </div>
  )
}
