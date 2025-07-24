"use client";

import { useState, useRef, useEffect } from "react";
import {
  FiMoreHorizontal,
  FiEdit3,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiArrowLeft,
} from "react-icons/fi";

export default function MessagesWidget() {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const users = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Merhaba!",
    },
    {
      id: 2,
      name: "Ali Veli",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Görüşürüz.",
    },
    {
      id: 3,
      name: "Zeynep Demir",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Tamamdır.",
    },
    {
      id: 4,
      name: "Burak",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Ne zaman?",
    },
    {
      id: 5,
      name: "Elif",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Bakarım.",
    },
    {
      id: 6,
      name: "Kemal",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Olur.",
    },
    {
      id: 7,
      name: "Fatma",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Görüşürüz.",
    },
    {
      id: 8,
      name: "Mehmet",
      avatar:
        "https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg",
      lastMessage: "Ok.",
    },
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-1 z-50 right-4 w-80 text-sm shadow-lg rounded-lg border bg-white">
      {/* ÜST BAR */}
      <div
        className="flex items-center justify-between px-3 py-2 border-b cursor-pointer rounded-t-lg"
        onClick={() => !selectedUser && setOpen(!open)}
      >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <img
              src="https://www.fotoipek.com.tr/wp-content/uploads/2021/04/biyometrikk.jpg"
              alt="Profil"
              className="w-8 h-8 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <span className="font-medium">Mesajlaşma</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <FiMoreHorizontal className="w-4 h-4" />
          <FiEdit3 className="w-4 h-4" />
          {open ? (
            <FiChevronDown className="w-4 h-4" />
          ) : (
            <FiChevronUp className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* AÇILIR PANEL */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="h-80 flex flex-col">
          {!selectedUser ? (
            // 👥 KİŞİ LİSTESİ
            <div className="overflow-y-auto max-h-80">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedUser(user);
                    setMessages([
                      { id: 1, text: `Merhaba ${user.name} 👋` },
                      { id: 2, text: "Nasılsın?" },
                    ]);
                  }}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* 👤 ÜST BAR */}
              <div className="flex items-center border-b p-2 space-x-2">
                <button onClick={() => setSelectedUser(null)}>
                  <FiArrowLeft className="w-5 h-5" />
                </button>
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{selectedUser.name}</span>
              </div>

              {/* 💬 MESAJLAR */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-blue-100 p-2 rounded-lg self-end max-w-[70%] ml-auto"
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>

              {/* ✍️ YAZMA ALANI */}
              <div className="border-t p-2 flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Mesaj yaz..."
                  className="flex-1 px-3 py-1.5 border rounded-full text-sm outline-none"
                />
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={handleSend}
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
