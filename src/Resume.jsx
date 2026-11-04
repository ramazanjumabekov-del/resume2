import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-md w-full">
        {/* Шапка с градиентом */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-32"></div>
        
        <div className="px-6 py-8 relative">
          {/* Аватар / Инициалы */}
          <div className="absolute -top-16 left-6 w-24 h-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl text-blue-600 font-bold">
            ЖР
          </div>
          
          {/* Основные данные */}
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-800">Жумабеков Рамазан</h1>
            <p className="text-indigo-600 font-semibold mt-1">Студент / Frontend Разработчик</p>
          </div>

          {/* Контактная информация и группа */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-700 bg-blue-50 p-3 rounded-lg">
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span><strong>Группа:</strong> AIN-2-25</span>
            </div>
            
            <div className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
              <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>ramazanjumabekov-del@github</span>
            </div>
          </div>

          {/* Блок "О себе" */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">О себе</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Студент 2 курса направления «Прикладная информатика». Увлекаюсь frontend-разработкой, активно изучаю современные веб-технологии и развиваю навыки создания удобных пользовательских интерфейсов.
            </p>
          </div>
          
          {/* Навыки */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">React</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">JavaScript</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">HTML/CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
