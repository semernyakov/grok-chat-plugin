# Groq Chat Plugin для Obsidian

[![CI](https://github.com/semernyakov/grok-chat-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/semernyakov/grok-chat-plugin/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/semernyakov/grok-chat-plugin/branch/main/graph/badge.svg)](https://codecov.io/gh/semernyakov/grok-chat-plugin)
[![Version](https://img.shields.io/github/v/release/semernyakov/grok-chat-plugin)](https://github.com/semernyakov/grok-chat-plugin/releases)
[![License](https://img.shields.io/github/license/semernyakov/grok-chat-plugin)](LICENSE)

![Groq Chat Plugin](./docs/images/plugin-banner.png)

## 📝 Описание

Groq Chat Plugin - это мощный плагин для Obsidian, который интегрирует возможности Groq AI непосредственно в ваше рабочее пространство. Используйте передовые языковые модели для улучшения вашего рабочего процесса в Obsidian.

## ✨ Основные возможности

- 🤖 Прямой доступ к моделям Groq AI
- 🔐 Простая авторизация через Google
- 💬 Интерактивный чат-интерфейс
- 📚 Сохранение истории диалогов
- 🎨 Настраиваемый интерфейс
- 🌓 Поддержка светлой и темной темы
- ⚡ Быстрый доступ через боковую панель

## 🚀 Установка

1. Откройте Obsidian
2. Перейдите в Настройки → Сторонние плагины
3. Нажмите "Просмотреть" и найдите "Groq Chat"
4. Установите плагин
5. Включите плагин в списке установленных

## ⚙️ Настройка

### Авторизация через Google

1. Создайте проект в Google Cloud Console:
   - Перейдите на [console.cloud.google.com](https://console.cloud.google.com)
   - Создайте новый проект
   - Настройте OAuth consent screen
   - Создайте OAuth Client ID

2. Настройте OAuth Credentials:
   - Тип приложения: Web application
   - Название: Groq Chat
   - Authorized redirect URI: `obsidian://groq-chat/auth/callback`
   - Скопируйте полученный Client ID

3. Настройте плагин:
   - Вставьте Client ID в настройках плагина
   - Нажмите "Войти через Google"
   - Следуйте инструкциям для авторизации

### Настройка моделей

Плагин поддерживает следующие модели Groq:
- Llama 3 (8B)
- Mixtral (8x7B)
- Gemma (7B)

Для каждой модели можно настроить:
- Температуру генерации (0.1 - 1.0)
- Максимальное количество токенов
- Пользовательский промпт

## 💡 Использование

1. **Открытие чата:**
   - Нажмите на иконку чата в боковой панели
   - Используйте горячую клавишу (по умолчанию: Ctrl/Cmd + Shift + G)

2. **Отправка сообщений:**
   - Введите текст в поле ввода
   - Нажмите Enter или кнопку "Отправить"
   - Используйте Shift + Enter для переноса строки

3. **Работа с историей:**
   - История сохраняется автоматически
   - Используйте кнопку "Очистить историю" для сброса
   - Выберите способ хранения в настройках

## ⌨️ Горячие клавиши

| Действие | Windows/Linux | macOS |
|----------|---------------|-------|
| Открыть чат | Ctrl + Shift + G | Cmd + Shift + G |
| Отправить сообщение | Enter | Enter |
| Новая строка | Shift + Enter | Shift + Enter |
| Очистить ввод | Esc | Esc |

## 🎨 Настройка интерфейса

- Размер шрифта
- Отображение временных меток
- Выбор темы (светлая/темная/системная)
- Настройка максимальной длины истории

## 🔒 Безопасность

- Все токены хранятся локально
- Поддержка безопасной авторизации через OAuth 2.0
- Шифрование данных при хранении

## 🐛 Устранение неполадок

### Распространенные проблемы:

1. **Ошибка авторизации:**
   - Проверьте правильность Client ID
   - Убедитесь, что redirect URI настроен корректно
   - Проверьте подключение к интернету

2. **Ошибка API:**
   - Проверьте статус сервиса Groq
   - Убедитесь в действительности токена
   - Проверьте лимиты использования

## 🤝 Вклад в развитие

Мы приветствуем вклад в развитие проекта! Для участия:

1. Форкните репозиторий
2. Создайте ветку для вашей функции
3. Внесите изменения
4. Отправьте Pull Request

## 📄 Лицензия

MIT License. См. файл [LICENSE](./LICENSE) для подробностей.

## 🙏 Благодарности

- Команде Obsidian за отличную платформу
- Groq за предоставление API
- Всем контрибьюторам за помощь в развитии

## 📞 Поддержка

- Создайте Issue в репозитории
- Присоединяйтесь к нашему [Discord](ссылка)
- Следите за обновлениями в [Twitter](ссылка)

## 📸 Скриншоты

![Chat Interface](docs/images/chat-interface.png)
![Settings Panel](docs/images/settings-panel.png)
![Google Auth](docs/images/google-auth.png)

## 🎮 Демо

Посмотреть демо можно [здесь](https://semernyakov.github.io/grok-chat-plugin/demo)

## Documentation

- [Setup and Publishing Guide](docs/SETUP_AND_PUBLISH.md)
- [Инструкция по настройке и публикации](docs/SETUP_AND_PUBLISH.ru.md)

## Development

```bash
# Install dependencies
npm install

# Run development build
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request.

## Author

Ivan Semernyakov
- GitHub: [@semernyakov](https://github.com/semernyakov)
- Website: [semernyakov.com](https://semernyakov.com)

---

Создано с ❤️ для сообщества Obsidian