<div align="center">
  <a href="https://rubendarioguerreroneira.github.io/">
    <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0077b6,100:00b4d8&height=280&section=header&text=Rubén%20D.%20Guerrero%20N.&fontSize=80&animation=fadeIn&fontAlignY=35&desc=Backend%20Developer%20%7C%20Open%20Source%20Contributor&descAlignY=55&descAlign=50&fontColor=ffffff" alt="Rubén D. Guerrero N. Header" width="100%"/>
  </a>
</div>

<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com?font=Outfit&weight=600&size=25&pause=1000&color=33C2F7&center=true&vCenter=true&width=500&lines=Backend+Developer;NestJS+Expert;Open+Source+Contributor;Clean+Code+Enthusiast" alt="Typing SVG" />
  </a>
</div>

<div align="center">
  
  [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ruben-d-guerrero-n-9276bb195/)
  [![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rudargeneira@gmail.com)
  [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Rubedev)
  
</div>

<br/>

## ⚡ Sobre mí

> "Escribir código es fácil. Escribir código limpio, mantenible y escalable... esa es la verdadera aventura."

Soy un desarrollador apasionado por la **arquitectura escalable**, el **diseño limpio** y los **sistemas distribuidos**. Actualmente, dedico gran parte de mi tiempo al Open Source.

- 🔭 Contribuidor activo en **[Vendure](https://github.com/vendure-ecommerce/vendure)** (e-commerce headless en NestJS).
- 🌱 Siempre aprendiendo nuevas tecnologías y patrones de diseño.
- 💬 Hablemos sobre **NestJS**, **Microservicios** y **Clean Architecture**.

---

<div align="center">
  <h3>🛠️ Tech Stack</h3>
  
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/-Docker-333?style=for-the-badge&logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="GCP">
</div>

---

## 🚀 Contribuciones Open Source

### 🛍️ [Vendure](https://github.com/vendure-ecommerce/vendure)
Aportes significativos al core del framework:
- [`fix(testing)`](https://github.com/vendure-ecommerce/vendure/pull/3723): Make e2e test output directory configurable
- [`fix(core)`](https://github.com/vendure-ecommerce/vendure/pull/3736): Prevent circular ref on ShippingMethod serialization
- [`fix(core)`](https://github.com/vendure-ecommerce/vendure/pull/3734): Make payment state transitions idempotent
- [`feat(core)`](https://github.com/vendure-ecommerce/vendure/pull/3739): Add `@Override()` decorator

---

## 🏆 Proyectos Destacados

### 🟢 [Sustainable Credits Indexer](#)
*Servicio Backend para RWA (Real World Assets)*

> Indexador off-chain de eventos ERC-1155 para créditos de carbono, diseñado para empresas y reguladores que necesitan auditoría en tiempo real sin los costos de la blockchain.

- **Stack**: NestJS, PostgreSQL, Ethers.js, Blockchain

#### 🔍 Características
- **Eficiencia radical**: Consultas instantáneas (PostgreSQL) vs. llamadas lentas a blockchain.
- **Integridad**: Operaciones atómicas para Mint/Transfer/Burn.
- **Escalabilidad**: Descubrimiento automático de nuevos contratos de proyectos.

#### 📐 Diagrama de Arquitectura (Mermaid)

```mermaid
sequenceDiagram
    participant Admin as Administrador
    participant API_Principal as API REST (Backend)
    participant DB as PostgreSQL Database
    participant Indexer as Listener Service
    participant Blockchain

    Note over Indexer: Al iniciar, el Indexer carga todos los proyectos existentes.
    Indexer->>+DB: GET /proyectos
    DB-->>-Indexer: Lista de proyectos
    Indexer->>Blockchain: Se suscribe a eventos de contratos

    Admin->>+API_Principal: POST /proyectos (Nuevo proyecto)
    API_Principal->>+DB: Guarda proyecto
    DB-->>-API_Principal: Confirmación
    API_Principal-->>Indexer: Evento 'proyecto.creado'
    Indexer->>Blockchain: Suscripción a nuevo contrato

    Blockchain-->>Indexer: Evento (Mint/Transfer/Burn)
    Indexer->>+DB: Actualiza saldos (Atómico)
    DB-->>-Indexer: Confirmación

    Client->>+API_Principal: GET /proyectos/wallet/{address}
    API_Principal->>+DB: Consulta saldos
    DB-->>-API_Principal: Devuelve datos indexados
    API_Principal-->>-Client: 200 OK
```


---

### 🏥 Medical Appointments API
*Sistema Integral de Gestión Clínica*

API completa desarrollada en **NestJS** para la administración de clínicas. Permite la gestión de pacientes, médicos, citas y recetas con altos estándares de seguridad y rendimiento.

**Tecnologías:** NestJS, TypeScript, PostgreSQL (TypeORM), JWT, Cloudinary.

#### ✨ Funcionalidades Clave
- **Roles y Permisos**: Sistema granular (Admin, Médico, Paciente).
- **Gestión de Citas**: Flujo completo (solicitud, confirmación, cancelación).
- **Historial Médico**: Almacenamiento JSONB de diagnósticos complejos.
- **Recetas e Imágenes**: Subida de evidencias y recetas a la nube.
- **Seguridad**: Autenticación JWT y validación estricta de datos.

> **Documentación**: Disponible vía Swagger en el despliegue.

---

### 🐂 Bot Taurino con IA (Telegram)
*Asistente inteligente con NestJS y Gemini*

Un bot avanzado que combina **Web Scraping** e **Inteligencia Artificial** para informar a los aficionados taurinos.

**Tecnologías:** NestJS, Gemini API, Telegraf, Puppeteer, Cheerio, Redis (Caché).

#### 🚀 Capacidades
- **NLP Avanzado (Gemini)**: Entiende lenguaje natural como "quiero ver toros hoy" o "¿qué televisan el domingo?".
- **Scraping Dual**: Extrae datos de transmisión (El Muletazo) y calendarios (Servitoro).
- **Caché Inteligente**: Respuestas instantáneas y reducción de carga al servidor origen.
- **Persistencia**: Recuerda el contexto de la conversación.

---

### 🩺 Bot de Telegram para Citas Médicas
*Interfaz conversacional para pacientes*

Extensión de la API de Citas Médicas que acerca los servicios al paciente a través de Telegram.

#### 💡 Funcionalidades Implementadas
- **Geolocalización**: Encuentra farmacias y centros médicos cercanos.
- **Gestión de Historial**: Consulta y creación de nuevos registros.
- **Recordatorios**: Alertas para toma de medicamentos.
- **Código QR de Emergencia**: Generación de QR con datos vitales (alergias, tipo de sangre) para primeros auxilios.

---

### 📂 Otros Proyectos

#### 🎳 Bowling Tournament Management
Plataforma web para torneos de bolos, brackets y seguimiento en tiempo real.
- **Stack**: Node.js, NestJS, PostgreSQL

#### 🛒 Shopping Cart System
Backend para e-commerce con lógica de carritos y pedidos.
- **Stack**: Node.js, NestJS, PostgreSQL

#### 🎡 Amusement Park API
API RESTful para gestión de parques (tickets, atracciones, empleados).
- **Stack**: NestJS, TypeORM, PostgreSQL

---

<!--
<div align="center">
  <h3>📊 GitHub Stats</h3>
  <br>
  
  [![GitHub Stats](https://github-readme-stats.vercel.app/api?username=RubenDarioGuerreroNeira&show_icons=true&theme=tokyonight&hide_border=true)](https://github.com/RubenDarioGuerreroNeira)
  [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=RubenDarioGuerreroNeira&layout=compact&theme=tokyonight&hide_border=true)](https://github.com/RubenDarioGuerreroNeira)
  
  <br>
  
  [![Streak Stats](https://streak-stats.demolab.com?user=RubenDarioGuerreroNeira&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)
</div>
-->

<div align="center">
  <br>
  <a href="https://rubendarioguerreroneira.github.io/RubenDarioGuerreroNeira">
    <img src="https://img.shields.io/badge/✨_Ver_Portafolio_Web_Completo-000000?style=for-the-badge&logo=googlechrome&logoColor=00f2ea" />
  </a>
</div>
