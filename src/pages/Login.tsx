import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = (type: 'individual' | 'legal' | 'management') => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Вход выполнен",
        description: "Добро пожаловать в личный кабинет",
      });
      
      const routes = {
        individual: '/cabinet/individual',
        legal: '/cabinet/legal',
        management: '/cabinet/management'
      };
      
      navigate(routes[type]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <img 
            src="https://cdn.poehali.dev/files/22104d1f-4d0a-40f9-b55a-b70c7656662b.png" 
            alt="Сахатранснефтегаз" 
            className="h-16 mx-auto mb-4 object-contain"
          />
          <h1 className="text-2xl font-bold text-[#1e3a8a]">Личный кабинет</h1>
          <p className="text-gray-600 mt-2">Войдите для доступа к вашим документам</p>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="individual">
              <Icon name="User" className="h-4 w-4 mr-2" />
              Физ. лицо
            </TabsTrigger>
            <TabsTrigger value="legal">
              <Icon name="Building2" className="h-4 w-4 mr-2" />
              Юр. лицо
            </TabsTrigger>
            <TabsTrigger value="management">
              <Icon name="Building" className="h-4 w-4 mr-2" />
              УК/ТСЖ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <Card>
              <CardHeader>
                <CardTitle>Вход для физических лиц</CardTitle>
                <CardDescription>
                  Введите данные для доступа к личному кабинету
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="individual-login">Логин (лицевой счет)</Label>
                  <Input 
                    id="individual-login" 
                    placeholder="12345678" 
                    defaultValue="12345678"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="individual-password">Пароль</Label>
                  <Input 
                    id="individual-password" 
                    type="password" 
                    placeholder="••••••••"
                    defaultValue="demo"
                  />
                </div>
                <Button 
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90" 
                  onClick={() => handleLogin('individual')}
                  disabled={loading}
                >
                  {loading ? "Вход..." : "Войти"}
                </Button>
                <div className="text-center">
                  <a href="#" className="text-sm text-[#60a5fa] hover:underline">
                    Забыли пароль?
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal">
            <Card>
              <CardHeader>
                <CardTitle>Вход для юридических лиц</CardTitle>
                <CardDescription>
                  Введите данные организации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="legal-inn">ИНН организации</Label>
                  <Input 
                    id="legal-inn" 
                    placeholder="1234567890" 
                    defaultValue="1234567890"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="legal-password">Пароль</Label>
                  <Input 
                    id="legal-password" 
                    type="password" 
                    placeholder="••••••••"
                    defaultValue="demo"
                  />
                </div>
                <Button 
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
                  onClick={() => handleLogin('legal')}
                  disabled={loading}
                >
                  {loading ? "Вход..." : "Войти"}
                </Button>
                <div className="text-center">
                  <a href="#" className="text-sm text-[#60a5fa] hover:underline">
                    Забыли пароль?
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="management">
            <Card>
              <CardHeader>
                <CardTitle>Вход для УК и ТСЖ</CardTitle>
                <CardDescription>
                  Введите данные управляющей организации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="management-code">Код организации</Label>
                  <Input 
                    id="management-code" 
                    placeholder="UK123456" 
                    defaultValue="UK123456"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="management-password">Пароль</Label>
                  <Input 
                    id="management-password" 
                    type="password" 
                    placeholder="••••••••"
                    defaultValue="demo"
                  />
                </div>
                <Button 
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
                  onClick={() => handleLogin('management')}
                  disabled={loading}
                >
                  {loading ? "Вход..." : "Войти"}
                </Button>
                <div className="text-center">
                  <a href="#" className="text-sm text-[#60a5fa] hover:underline">
                    Забыли пароль?
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
