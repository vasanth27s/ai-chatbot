import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxv67f8ASr-QOHPO0tAcBMtouGTtte7YXZ7_OmzsAum_pi03b7evf3-92cAprgbHUlkA9SJECO7GDfX7tvYdihsyyYL9u7tsXCtLS4pAPpdY8KM1vjw3_qfDDcSUO2tRcSSstVYyB1Ij0bKGhYdqj3fQtADeLc8j8WYo1XF2n9KP7BJL-oU8IUDxHUS5o/s320/1001.jpg"
          alt="VK Chatbot Logo"
          className="logo"
        />
        <h1 className="title">VK Chatbot</h1>
      </header>

      <main className="chat-container">
        <gradio-app src="https://vasanth27-vkai.hf.space"></gradio-app>
      </main>

      <footer className="footer">
        <p>© 2025 VK Chatbot. Built with ❤️ by Vasanth.</p>
      </footer>
    </div>
  );
}

export default App;
