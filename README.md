# LinkedIn Roast Generator 🔥

A fun tool that generates playful roasts based on LinkedIn profiles. Turn corporate buzzwords into comedy gold!

## Features

- 🎯 LinkedIn profile analysis
- 😄 Humorous roast generation
- 🎨 Modern, responsive UI
- 📱 Mobile-friendly design
- 🔄 Random roast generator
- 📋 Easy copy and share functionality

## Tech Stack

- **Frontend:**
  - React
  - TailwindCSS
  - shadcn/ui components
  - Lucide icons

- **Backend:**
  - Node.js
  - Express
  - Puppeteer (for LinkedIn scraping)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShreySigh2912/linkedin-roast-generator.git
cd linkedin-roast-generator
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Set up environment variables:
```bash
cp .env.example .env
# Update .env with your values
```

5. Start the development servers:

Backend:
```bash
cd backend
npm run dev
```

Frontend (in a new terminal):
```bash
cd frontend
npm run dev
```

## Project Structure

```
roast/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── RoastApp.jsx
│   │   │   └── ui/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is meant for entertainment purposes only. Please use responsibly and respect LinkedIn's terms of service and users' privacy.
