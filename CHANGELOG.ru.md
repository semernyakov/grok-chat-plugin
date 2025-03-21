# История изменений

Все значимые изменения в проекте документируются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
и этот проект следует [Semantic Versioning](https://semver.org/lang/ru/).

## [1.2.0] - 2024-03-20

### Добавлено

- Поддержка новых preview моделей:
  - Qwen 32B
  - DeepSeek Llama 70B
  - DeepSeek Qwen 32B
  - Llama 3 Vision модели
- Улучшенный интерфейс чата
- Поддержка мобильной версии Obsidian
- Новые горячие клавиши

### Изменено

- Упрощен процесс авторизации через API ключ
- Улучшена производительность
- Оптимизирована работа с памятью

### Исправлено

- Проблема с отображением длинных сообщений
- Ошибка при сохранении настроек
- Утечка памяти при длительном использовании

## [1.1.0] - 2024-03-18

### Добавлено

- Поддержка новых моделей:
  - Llama 3 70B Versatile (128K контекст)
  - Llama 3 8B Instant (128K контекст)
  - Mixtral 8x7B (32K контекст)
  - Gemma 2 9B (8K контекст)
  - Llama Guard 3 8B (для безопасности)
  - Whisper Large V3 (для аудио)
  - Llama 3 90B Vision (поддержка изображений)
  - Qwen 2.5 Coder 32B (для кода)
  - Mistral Saba 24B
- Улучшенная обработка ошибок API
- Поддержка аудио транскрипции
- Поддержка анализа изображений
- Улучшенная работа с кодом

### Изменено

- Обновлен интерфейс настроек
- Улучшена производительность чата
- Оптимизирована работа с контекстом

### Исправлено

- Исправлены проблемы с отображением длинных сообщений
- Улучшена стабильность соединения
- Исправлены ошибки в работе с историей

## [1.0.0] - 2024-03-01

### Добавлено

- Первый публичный релиз
- Базовая поддержка моделей Groq
- Интерактивный чат-интерфейс
- Сохранение истории диалогов
- Настройки интерфейса
- Поддержка тем оформления
- Горячие клавиши

### Изменено

- Оптимизация производительности
- Улучшение UI/UX
- Обновление документации

### Исправлено

- Основные баги бета-версии
- Проблемы с авторизацией
- Ошибки форматирования

## [0.9.0] - 2023-12-15

### Добавлено

- Бета-версия плагина
- Тестовая интеграция с API
- Базовый интерфейс
- Система логирования

### Изменено

- Улучшение стабильности
- Оптимизация кода
- Подготовка к релизу

### Исправлено

- Критические ошибки
- Проблемы безопасности
- Ошибки интерфейса

---

## Типы изменений

- `Добавлено` для новых функций.
- `Изменено` для изменений в существующей функциональности.
- `Устарело` для функций, которые будут удалены в следующих версиях.
- `Удалено` для удалённых функций.
- `Исправлено` для любых исправлений багов.
- `Безопасность` для обновлений безопасности.
