import { useState } from 'react';
import { Calendar, Heart, Camera, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      src: '/img/8e59c81f-9bfe-43e6-987e-60cfc3cb24fa.jpg',
      title: 'Наш первый закат вместе',
      date: '14 февраля 2024'
    },
    {
      src: '/img/100d4335-8eb0-43f5-8483-5cd1a7bba266.jpg',
      title: 'Весенняя прогулка',
      date: '20 марта 2024'
    },
    {
      src: '/img/fc9e232f-59ac-45be-a52e-d601f9b86fca.jpg',
      title: 'День влюблённых',
      date: '14 февраля 2024'
    }
  ];

  const importantDates = [
    { date: '14 февраля 2024', event: 'День знакомства', emoji: '💕' },
    { date: '20 марта 2024', event: 'Первое свидание', emoji: '🌸' },
    { date: '15 мая 2024', event: 'Первый поцелуй', emoji: '💋' },
    { date: '10 июня 2024', event: 'Официальные отношения', emoji: '💑' },
    { date: '14 августа 2024', event: 'Полгода вместе', emoji: '🎉' }
  ];

  const loveMessages = [
    {
      text: "Ты мой солнечный свет в пасмурные дни, моя улыбка, когда грустно, и моё счастье каждый день. С тобой я чувствую себя самым счастливым человеком на земле.",
      date: "Сегодня"
    },
    {
      text: "Каждое утро я просыпаюсь с мыслью о тебе, а каждый вечер засыпаю с благодарностью за то, что ты есть в моей жизни. Ты делаешь мир ярче.",
      date: "Вчера"
    },
    {
      text: "Твоя улыбка - это магия, которая превращает обычные моменты в незабываемые воспоминания. Я люблю тебя больше, чем звёзды на небе.",
      date: "Неделю назад"
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
                        <p className="text-muted-foreground">
                          {item.date}
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