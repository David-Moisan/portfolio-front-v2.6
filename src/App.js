import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./utils/Context/Layout";
import GlobalStyle from './utils/globalStyle';
import HomePage from './pages/Home';
import NotFound from './components/Error/Error404';
import ProjectListPage from './pages/ProjectList';
import ErrorBoundary from './components/Error/ErrorBoundary';
import BlogListPage from './pages/BlogList';
import DetailProjectPage from './pages/DetailProject';
import DetailBlogPostPage from './pages/DetailBlogPost';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route
              path="/project"
              element={<ProjectListPage />}
            />
            <Route
              path="/project/:id"
              element={<DetailProjectPage />}
            />
            <Route path="/blog" element={<BlogListPage />} />
            <Route
              path="/blog/:id"
              element={<DetailBlogPostPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
