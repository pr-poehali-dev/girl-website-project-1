import { useState } from 'react';
import { Calendar, Heart, Camera, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      src: '/img/6dce6445-3a64-42b7-8278-dbf4dd6e2abb.jpg',
      title: 'Первая встреча',
      date: '15 августа 2023',
      description: 'Тот момент, когда наши взгляды встретились у Набережной...'
    },
    {
      src: '/img/4b42395a-7b06-4037-a84b-b248bee6ecdf.jpg',
      title: 'Романтический ужин',
      date: '20 сентября 2023',
      description: 'Вечер при свечах, который запомнился навсегда'
    },
    {
      src: '/img/18aff81b-dd75-4c28-ba4b-a76265bfa7dc.jpg',
      title: 'Закат вместе',
      date: '14 февраля 2024',
      description: 'Когда небо окрасилось в цвета нашей любви'
    }
  ];

  const importantDates = [
    { date: '15 августа 2023', event: 'День нашего знакомства', emoji: '💕', description: 'Красноярский рабочий 33 → Набережная' },
    { date: '20 сентября 2023', event: 'Первое свидание', emoji: '🌸', description: 'Незабываемый вечер вместе' },
    { date: '31 декабря 2023', event: 'Новый год вместе', emoji: '🎉', description: 'Первая встреча Нового года рядом' },
    { date: '14 февраля 2024', event: 'День святого Валентина', emoji: '💋', description: 'Особенный праздник для двоих' },
    { date: '15 августа 2024', event: 'Год знакомства', emoji: '💑', description: 'Целый год счастья вместе' }
  ];

  const loveMessages = [
    {
      text: "Ты — моё солнце в пасмурный день, мой компас в жизненных лабиринтах. С тобой каждый день становится праздником, а каждый момент — драгоценным воспоминанием.",
      date: "Сегодня"
    },
    {
      text: "С тобой каждый момент становится волшебным. Твоя улыбка — мой любимый рассвет, а твои объятия — самый уютный дом на свете.",
      date: "Вчера"
    },
    {
      text: "В твоих глазах я нашёл свой дом, в твоём смехе — свою любимую мелодию. Ты делаешь мир ярче одним своим присутствием.",
      date: "Неделю назад"
    },
    {
      text: "Каждый день с тобой — это новая страница нашей прекрасной истории любви. Я благодарен судьбе за то, что она свела нас вместе.",
      date: "Месяц назад"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tight">
              ДЛЯ МОЕЙ ЛЮБИМОЙ
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Сайт, созданный с любовью специально для тебя 💕
            </p>
            
            {/* First Meeting Story */}
            <Card className="bg-white/70 backdrop-blur-sm border-rose-200 shadow-lg max-w-4xl mx-auto mb-8">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-heading text-rose-600 mb-2">
                    День, который изменил мою жизнь
                  </h3>
                  <p className="text-rose-500 text-lg">
                    15 августа 2023 года
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src="/img/9bbf9ab9-b5d8-4baf-b713-efb0924839ee.jpg" 
                        alt="Карта маршрута от Красноярский рабочий 33 до Набережной"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-sm font-medium text-center bg-black/30 rounded px-2 py-1">
                          Маршрут нашей первой встречи
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="MapPin" size={24} className="text-rose-500" />
                      <span className="text-rose-700 font-medium">Красноярский рабочий 33</span>
                    </div>
                    
                    <div className="flex justify-center">
                      <Icon name="ArrowDown" size={24} className="text-rose-400" />
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="Heart" size={24} className="text-rose-500" />
                      <span className="text-rose-700 font-medium">Набережная в центре города</span>
                    </div>
                    
                    <div className="bg-rose-50 rounded-lg p-4 mt-6">
                      <p className="text-rose-600 italic text-center leading-relaxed">
                        "Тот путь, который привёл меня к тебе — самый важный в моей жизни. 
                        Каждый шаг по этому маршруту был шагом навстречу счастью."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center space-x-8 text-primary">
              <Icon name="Heart" size={40} className="animate-pulse" />
              <Icon name="Sparkles" size={40} className="animate-pulse" />
              <Icon name="Heart" size={40} className="animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="Camera" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Наши Моменты
            </h2>
            <p className="text-xl text-muted-foreground">
              Самые дорогие воспоминания в фотографиях
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {photos.map((photo, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-pink-200 bg-white/80 backdrop-blur-sm"
                onClick={() => setSelectedImage(index)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-heading font-semibold text-lg">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.date}</p>
                      <p className="text-xs opacity-80 mt-1">{photo.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Calendar */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100/50 to-purple-100/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="Calendar" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Календарь Любви
            </h2>
            <p className="text-xl text-muted-foreground">
              Важные даты нашей истории
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {importantDates.map((item, index) => (
                <Card 
                  key={index} 
                  className="group transition-all duration-300 hover:scale-102 hover:shadow-lg border-pink-200 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {item.emoji}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                          {item.event}
                        </h3>
                        <p className="text-muted-foreground mb-1">
                          {item.date}
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          {item.description}
                        </p>
                      </div>
                      <Icon name="Heart" size={24} className="text-pink-400 group-hover:text-pink-500 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Love Messages */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Послания Любви
            </h2>
            <p className="text-xl text-muted-foreground">
              Слова, которые идут от самого сердца
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {loveMessages.map((message, index) => (
              <Card 
                key={index} 
                className="group transition-all duration-300 hover:shadow-xl border-pink-200 bg-gradient-to-r from-pink-50/80 to-purple-50/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-4 italic">
                    "{message.text}"
                  </blockquote>
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground">
                      {message.date}
                    </p>
                    <div className="flex space-x-2">
                      <Icon name="Heart" size={20} className="text-pink-400" />
                      <Icon name="Heart" size={20} className="text-pink-500" />
                      <Icon name="Heart" size={20} className="text-pink-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Icon name="Heart" size={40} className="mx-auto text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground mb-2">
            Создано с безграничной любовью
          </p>
          <p className="text-sm text-muted-foreground">
            Для самой прекрасной девушки в мире 💕
          </p>
        </div>
      </footer>

      {/* Modal for image preview */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={photos[selectedImage].src} 
              alt={photos[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;