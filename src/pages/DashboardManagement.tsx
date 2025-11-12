import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const DashboardManagement = () => {
  const navigate = useNavigate();

  const houses = [
    { id: 1, address: "ул. Ленина, д. 15", apartments: 72, contract: "ДГ-УК-2024-0012", debt: 0 },
    { id: 2, address: "ул. Кирова, д. 8", apartments: 48, contract: "ДГ-УК-2024-0013", debt: 12450 },
    { id: 3, address: "пр. Ленина, д. 45", apartments: 96, contract: "ДГ-УК-2024-0014", debt: 0 },
  ];

  const documents = [
    { id: 1, type: "Сводный акт", number: "СА-11-2024", date: "01.11.2024", houses: 3 },
    { id: 2, type: "Реестр начислений", number: "РН-11-2024", date: "05.11.2024", houses: 3 },
    { id: 3, type: "Акт сверки", number: "АС-УК-10-2024", date: "31.10.2024", houses: 3 },
  ];

  const residents = [
    { apartment: "кв. 15", address: "ул. Ленина, д. 15", debt: 0, consumption: "145 м³" },
    { apartment: "кв. 42", address: "ул. Ленина, д. 15", debt: 3245, consumption: "165 м³" },
    { apartment: "кв. 8", address: "ул. Кирова, д. 8", debt: 6890, consumption: "178 м³" },
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
                <p className="text-sm text-gray-600">Управляющая компания</p>
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
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">УК "Жилкомсервис"</h2>
          <p className="text-gray-600">ИНН: 9876543210 • Код организации: UK123456</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="hover-scale animate-fade-in">
            <CardHeader className="pb-3">
              <CardDescription>Домов на обслуживании</CardDescription>
              <CardTitle className="text-3xl text-[#1e3a8a]">{houses.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {houses.reduce((sum, h) => sum + h.apartments, 0)} квартир
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader className="pb-3">
              <CardDescription>Общая задолженность</CardDescription>
              <CardTitle className="text-3xl text-red-600">
                {houses.reduce((sum, h) => sum + h.debt, 0).toLocaleString()} ₽
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">По всем домам</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="pb-3">
              <CardDescription>Начислено за ноябрь</CardDescription>
              <CardTitle className="text-3xl text-[#1e3a8a]">856 340 ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">По всем объектам</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardHeader className="pb-3">
              <CardDescription>Новые документы</CardDescription>
              <CardTitle className="text-3xl text-orange-600">3</CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="sm" variant="outline" className="w-full">
                Посмотреть
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="houses" className="mb-6">
          <TabsList>
            <TabsTrigger value="houses">
              <Icon name="Building" className="h-4 w-4 mr-2" />
              МКД
            </TabsTrigger>
            <TabsTrigger value="residents">
              <Icon name="Users" className="h-4 w-4 mr-2" />
              Жильцы
            </TabsTrigger>
            <TabsTrigger value="documents">
              <Icon name="FileText" className="h-4 w-4 mr-2" />
              Документы
            </TabsTrigger>
            <TabsTrigger value="reports">
              <Icon name="BarChart3" className="h-4 w-4 mr-2" />
              Отчеты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="houses" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {houses.map((house) => (
                <Card key={house.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{house.address}</CardTitle>
                        <CardDescription className="mt-2">
                          {house.apartments} квартир
                        </CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center">
                        <Icon name="Building" className="h-6 w-6 text-[#60a5fa]" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Договор:</span>
                        <span className="font-medium text-xs">{house.contract}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Задолженность:</span>
                        <span className={`font-bold ${house.debt > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {house.debt > 0 ? `${house.debt.toLocaleString()} ₽` : 'Нет'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Расход за месяц:</span>
                        <span className="font-medium">8 245 м³</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      <Icon name="Eye" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="residents" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Реестр жильцов</CardTitle>
                    <CardDescription>Информация по квартирам и задолженностям</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" className="mr-2 h-4 w-4" />
                    Экспорт
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {residents.map((resident, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center">
                          <Icon name="Home" className="h-6 w-6 text-[#60a5fa]" />
                        </div>
                        <div>
                          <div className="font-medium">{resident.apartment}</div>
                          <div className="text-sm text-gray-600">{resident.address}</div>
                          <div className="text-xs text-gray-500">Расход: {resident.consumption}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        {resident.debt > 0 ? (
                          <>
                            <div className="font-bold text-red-600">{resident.debt.toLocaleString()} ₽</div>
                            <Badge variant="destructive" className="text-xs">Долг</Badge>
                          </>
                        ) : (
                          <>
                            <div className="font-bold text-green-600">0 ₽</div>
                            <Badge variant="default" className="text-xs bg-green-600">Оплачено</Badge>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Документы и отчеты</CardTitle>
                <CardDescription>Сводные акты, реестры начислений</CardDescription>
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
                          <div className="text-xs text-gray-500">Охватывает {doc.houses} дома</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-sm text-gray-600">{doc.date}</div>
                          <Badge variant="secondary" className="text-xs">Новый</Badge>
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

          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Аналитика и статистика</CardTitle>
                <CardDescription>Сводные данные по всем домам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Средний расход на квартиру</div>
                    <div className="text-2xl font-bold text-[#1e3a8a]">156 м³</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Процент оплаты</div>
                    <div className="text-2xl font-bold text-green-600">94%</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Квартир с долгами</div>
                    <div className="text-2xl font-bold text-orange-600">12</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                    <Icon name="Download" className="mr-2 h-4 w-4" />
                    Сформировать полный отчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardManagement;
