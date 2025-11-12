import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const DashboardIndividual = () => {
  const navigate = useNavigate();

  const documents = [
    { id: 1, type: "Договор", number: "ДГ-2024-001234", date: "15.01.2024", status: "active" },
    { id: 2, type: "Акт сверки", number: "АС-2024-10", date: "01.11.2024", status: "new" },
    { id: 3, type: "Счет-фактура", number: "СФ-2024-11-001", date: "05.11.2024", status: "new" },
  ];

  const payments = [
    { month: "Октябрь 2024", amount: "3 245 ₽", status: "paid", date: "01.10.2024" },
    { month: "Ноябрь 2024", amount: "3 180 ₽", status: "pending", date: "01.11.2024" },
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
                <p className="text-sm text-gray-600">Физическое лицо</p>
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
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">Добро пожаловать, Иван Петрович!</h2>
          <p className="text-gray-600">Лицевой счет: 12345678</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale animate-fade-in">
            <CardHeader className="pb-3">
              <CardDescription>Текущий баланс</CardDescription>
              <CardTitle className="text-3xl text-green-600">+1 245 ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Переплата по счету</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader className="pb-3">
              <CardDescription>К оплате за ноябрь</CardDescription>
              <CardTitle className="text-3xl text-[#1e3a8a]">3 180 ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                Оплатить
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="pb-3">
              <CardDescription>Показания счетчика</CardDescription>
              <CardTitle className="text-3xl">4523 м³</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Icon name="FileEdit" className="mr-2 h-4 w-4" />
                Передать показания
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Мои документы</CardTitle>
                <Badge variant="secondary">{documents.length}</Badge>
              </div>
              <CardDescription>Договоры, акты и счета</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" className="h-5 w-5 text-[#60a5fa]" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{doc.type}</div>
                        <div className="text-xs text-gray-600">{doc.number}</div>
                        <div className="text-xs text-gray-500">{doc.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.status === 'new' && (
                        <Badge variant="default" className="bg-green-600">Новый</Badge>
                      )}
                      <Button size="sm" variant="ghost">
                        <Icon name="Download" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <CardTitle>История платежей</CardTitle>
              <CardDescription>Последние начисления и оплаты</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {payments.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        payment.status === 'paid' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        <Icon 
                          name={payment.status === 'paid' ? 'CheckCircle2' : 'Clock'} 
                          className={`h-5 w-5 ${payment.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`} 
                        />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{payment.month}</div>
                        <div className="text-xs text-gray-500">{payment.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{payment.amount}</div>
                      <Badge variant={payment.status === 'paid' ? 'default' : 'secondary'} className="text-xs">
                        {payment.status === 'paid' ? 'Оплачено' : 'К оплате'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 animate-fade-in">
          <CardHeader>
            <CardTitle>Адрес обслуживания</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center">
                <Icon name="MapPin" className="h-6 w-6 text-[#60a5fa]" />
              </div>
              <div>
                <div className="font-medium mb-1">г. Якутск, ул. Ленина, д. 25, кв. 42</div>
                <div className="text-sm text-gray-600">Счетчик №: ABC123456</div>
                <div className="text-sm text-gray-600">Дата поверки: 15.03.2023</div>
                <div className="text-sm text-gray-600">Следующая поверка: 15.03.2027</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DashboardIndividual;
