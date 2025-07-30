# 💬 Angular Chat App

Una aplicación de chat en tiempo real desarrollada con Angular 12, Socket.IO y Angular Material. Permite comunicación instantánea entre usuarios con soporte para chats individuales y grupales.

## ✨ Características

- 🔐 **Autenticación de usuarios** - Sistema de registro y login seguro
- 💬 **Chat en tiempo real** - Mensajería instantánea con Socket.IO
- 👥 **Chats grupales** - Comunicación en grupos con múltiples usuarios
- 🔍 **Búsqueda de mensajes** - Encuentra mensajes específicos en el historial
- 📱 **Diseño responsivo** - Interfaz adaptable con Angular Material
- 🟢 **Estado de conexión** - Indicadores de usuarios en línea/desconectados
- ✍️ **Indicador de escritura** - Muestra cuando alguien está escribiendo
- 📄 **Historial de mensajes** - Carga paginada de mensajes anteriores
- 🎨 **Interfaz moderna** - Diseño limpio y profesional

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - Angular 12.2.0
  - Angular Material 12.2.13
  - TypeScript 4.3.5
  - RxJS 6.6.0
  - Socket.IO Client 4.4.1
  - SweetAlert2 11.4.0

- **Herramientas de desarrollo:**
  - Angular CLI 12.2.9
  - Karma (Testing)
  - Jasmine (Testing framework)

## 📋 Prerrequisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Angular CLI (`npm install -g @angular/cli`)

## 🚀 Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd Angular-chat
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura el backend:**
   - Asegúrate de que el servidor backend esté ejecutándose en `http://localhost:8080`
   - Puedes modificar la URL en `src/environments/environment.ts` si es necesario

4. **Ejecuta la aplicación:**
   ```bash
   npm start
   # o
   ng serve
   ```

5. **Abre tu navegador:**
   - Navega a `http://localhost:4200/`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── chat/           # Componente principal del chat
│   │   ├── sidebar/        # Barra lateral con contactos
│   │   └── user-name/      # Componente de nombre de usuario
│   ├── interfaces/         # Definiciones de tipos TypeScript
│   │   ├── auth-interfaces.ts
│   │   ├── contact-interface.ts
│   │   ├── message-interface.ts
│   │   └── group-interface.ts
│   ├── pages/              # Páginas principales
│   │   ├── chat/          # Página principal del chat
│   │   ├── login/         # Página de inicio de sesión
│   │   └── register/      # Página de registro
│   ├── services/          # Servicios de Angular
│   │   ├── auth.service.ts     # Autenticación
│   │   ├── chat.service.ts     # Gestión de mensajes
│   │   ├── socket.service.ts   # Comunicación Socket.IO
│   │   └── users.service.ts    # Gestión de usuarios
│   └── auth.guard.ts      # Guardia de rutas
├── assets/                # Recursos estáticos
└── environments/          # Configuraciones de entorno
```

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run watch` - Construye en modo desarrollo con observación de cambios
- `npm test` - Ejecuta las pruebas unitarias
- `ng serve` - Servidor de desarrollo de Angular
- `ng build` - Construcción de la aplicación
- `ng test` - Pruebas con Karma

## 🌐 Configuración del Entorno

### Desarrollo
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiURL: "http://localhost:8080"
};
```

### Producción
```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiURL: "https://tu-api-backend.com"
};
```

## 📱 Funcionalidades Principales

### Autenticación
- Registro de nuevos usuarios
- Inicio de sesión seguro
- Protección de rutas con guards
- Gestión de tokens JWT

### Chat en Tiempo Real
- Envío y recepción instantánea de mensajes
- Soporte para chats individuales y grupales
- Indicadores de estado de conexión
- Notificaciones de escritura en tiempo real

### Gestión de Mensajes
- Historial completo de conversaciones
- Búsqueda de mensajes específicos
- Carga paginada para optimizar rendimiento
- Navegación por posición de mensajes

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🐛 Reporte de Bugs

Si encuentras algún bug, por favor abre un issue describiendo:
- Pasos para reproducir el error
- Comportamiento esperado vs actual
- Screenshots si es aplicable
- Información del navegador y sistema operativo

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, puedes:
- Abrir un issue en GitHub
- Contactar al equipo de desarrollo

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!
