import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const DashboardLegal = () => {
  const navigate = useNavigate();

  const objects = [
    { id: 1, name: "Торговый центр 'Полюс'", address: "г. Якутск, ул. Кулаковского, 52", contract: "ДГ-Ю-2024-0045" },
    { id: 2, name: "Офисное здание", address: "г. Якутск, пр. Ленина, 8", contract: "ДГ-Ю-2024-0046" },
  ];

  const documents = [
    { id: 1, type: "Договор поставки", number: "ДГ-Ю-2024-0045", date: "15.01.2024", object: "Торговый центр 'Полюс'" },
    { id: 2, type: "Акт сверки", number: "АС-Ю-10-2024", date: "31.10.2024", object: "Торговый центр 'Полюс'" },
    { id: 3, type: "Счет-фактура", number: "СФ-Ю-11-2024-045", date: "05.11.2024", object: "Торговый центр 'Полюс'" },
    { id: 4, type: "Акт сверки", number: "АС-Ю-10-2024-2", date: "31.10.2024", object: "Офисное здание" },
  ];

  const invoices = [
    { month: "Октябрь 2024", object: "ТЦ Полюс", amount: "125 430 ₽", status: "paid" },
    { month: "Октябрь 2024", object: "Офис", amount: "42 180 ₽", status: "paid" },
    { month: "Ноябрь 2024", object: "ТЦ Полюс", amount: "128 560 ₽", status: "pending" },
    { month: "Ноябрь 2024", object: "Офис", amount: "43 890 ₽", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/22104d1f-4d0a-40f9-b55a-b70c7656662b.png" 
                alt="Logo" 
                className="h-10 object-contain"
              />
              <div className="border-l pl-4">
                <h1 className="text-lg font-bold text-[#1e3a8a]">Личный кабинет</h1>
                <p className="text-sm text-gray-600">Юридическое лицо</p>
              </div>
            </div>
            <Button variant="ghost" onClick={() => navigate('/')}>
              <Icon name="LogOut" className="mr-2 h-4 w-4" />
              Выход
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">ООО "Северная сеть"</h2>
          <p className="text-gray-600">ИНН: 1234567890 • КПП: 123456001</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="hover-scale animate-fade-in">
            <CardHeader className="pb-3">
              <CardDescription>Всего объектов</CardDescription>
              <CardTitle className="text-3xl text-[#1e3a8a]">{objects.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Точек учета газа</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader className="pb-3">
              <CardDescription>Текущая задолженность</CardDescription>
              <CardTitle className="text-3xl text-green-600">0 ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Нет задолженности</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="pb-3">
              <CardDescription>К оплате за ноябрь</CardDescription>
              <CardTitle className="text-3xl text-[#1e3a8a]">172 450 ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                Оплатить
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardHeader className="pb-3">
              <CardDescription>Новые документы</CardDescription>
              <CardTitle className="text-3xl text-orange-600">4</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Требуют внимания</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="objects" className="mb-6">
          <TabsList>
            <TabsTrigger value="objects">
              <Icon name="MapPin" className="h-4 w-4 mr-2" />
              Объекты
            </TabsTrigger>
            <TabsTrigger value="documents">
              <Icon name="FileText" className="h-4 w-4 mr-2" />
              Документы
            </TabsTrigger>
            <TabsTrigger value="payments">
              <Icon name="CreditCard" className="h-4 w-4 mr-2" />
              Платежи
            </TabsTrigger>
          </TabsList>

          <TabsContent value="objects" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {objects.map((obj) => (
                <Card key={obj.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{obj.name}</CardTitle>
                        <CardDescription className="mt-2">{obj.address}</CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center">
                        <Icon name="Building2" className="h-6 w-6 text-[#60a5fa]" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Договор:</span>
                        <span className="font-medium">{obj.contract}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Расход за месяц:</span>
                        <span className="font-medium">12 435 м³</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">К оплате:</span>
                        <span className="font-bold text-[#1e3a8a]">128 560 ₽</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Icon name="BarChart3" className="mr-2 h-4 w-4" />
                      Подробная статистика
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Все документы</CardTitle>
                <CardDescription>Договоры, акты сверки, счета-фактуры</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center">
                          <Icon name="FileText" className="h-6 w-6 text-[#60a5fa]" />
                        </div>
                        <div>
                          <div className="font-medium">{doc.type}</div>
                          <div className="text-sm text-gray-600">{doc.number}</div>
                          <div className="text-xs text-gray-500">{doc.object}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-sm text-gray-600">{doc.date}</div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Icon name="Download" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>История начислений и оплат</CardTitle>
                <CardDescription>По всем объектам организации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {invoices.map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          invoice.status === 'paid' ? 'bg-green-100' : 'bg-yellow-100'
                        }`}>
                          <Icon 
                            name={invoice.status === 'paid' ? 'CheckCircle2' : 'Clock'} 
                            className={`h-6 w-6 ${invoice.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`} 
                          />
                        </div>
                        <div>
                          <div className="font-medium">{invoice.month}</div>
                          <div className="text-sm text-gray-600">{invoice.object}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{invoice.amount}</div>
                        <Badge variant={invoice.status === 'paid' ? 'default' : 'secondary'}>
                          {invoice.status === 'paid' ? 'Оплачено' : 'К оплате'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardLegal;
