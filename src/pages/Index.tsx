import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/22104d1f-4d0a-40f9-b55a-b70c7656662b.png" 
                alt="Сахатранснефтегаз" 
                className="h-12 object-contain"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
              <Button onClick={() => navigate('/login')} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                <Icon name="LogIn" className="mr-2 h-4 w-4" />
                Личный кабинет
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1e3a8a]">
              АО «Сахатранснефтегаз»
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Надежный партнер в газоснабжении Республики Саха (Якутия)
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90" onClick={() => navigate('/login')}>
                <Icon name="User" className="mr-2 h-5 w-5" />
                Личный кабинет
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1e3a8a]">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-scale cursor-pointer animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <CardTitle>Для физических лиц</CardTitle>
                <CardDescription>Газоснабжение квартир и частных домов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Подключение газа
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Оплата счетов онлайн
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Передача показаний
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale cursor-pointer animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <CardTitle>Для юридических лиц</CardTitle>
                <CardDescription>Комплексные решения для бизнеса</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Коммерческий учет газа
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Договоры поставки
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Акты сверки
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale cursor-pointer animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-[#60a5fa]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building" className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <CardTitle>Для УК и ТСЖ</CardTitle>
                <CardDescription>Управление многоквартирными домами</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Общедомовой учет
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Сводные отчеты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    Работа с жильцами
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1e3a8a]">О компании</h2>
              <p className="text-gray-600 mb-4">
                АО «Сахатранснефтегаз» — ведущая газораспределительная организация Республики Саха (Якутия), 
                обеспечивающая надежное и бесперебойное газоснабжение населения и предприятий региона.
              </p>
              <p className="text-gray-600 mb-6">
                Мы стремимся к постоянному улучшению качества услуг и внедрению современных технологий 
                для удобства наших клиентов.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#60a5fa]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#1e3a8a] mb-2">15+</div>
                  <div className="text-sm text-gray-600">лет на рынке</div>
                </div>
                <div className="p-4 bg-[#60a5fa]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#1e3a8a] mb-2">50k+</div>
                  <div className="text-sm text-gray-600">абонентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#1e3a8a] to-[#60a5fa] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Flame" className="h-32 w-32 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1e3a8a]">Новости и объявления</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                date: "10 ноября 2025",
                title: "Новые тарифы на 2025 год",
                description: "Утверждены новые тарифы на газоснабжение для населения"
              },
              {
                date: "05 ноября 2025",
                title: "Плановые работы",
                description: "График плановых работ по обслуживанию газовых сетей"
              },
              {
                date: "01 ноября 2025",
                title: "Личный кабинет обновлен",
                description: "Запущена новая версия личного кабинета с расширенным функционалом"
              }
            ].map((news, index) => (
              <Card key={index} className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-[#1e3a8a] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">АО «Сахатранснефтегаз»</h3>
              <p className="text-sm text-blue-200">
                Надежное газоснабжение для вашего комфорта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  8 (4112) 123-456
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@stngas.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  г. Якутск
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Раскрытие информации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Акционерам</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-sm text-blue-200">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: выходной<br />
                Аварийная служба: 24/7
              </p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-200">
            © 2025 АО «Сахатранснефтегаз». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;