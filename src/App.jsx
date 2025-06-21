import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ArticleArchive from "./pages/ArticleArchive";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailProductPage from "./components/ProductPage/DetailProductPage";
import DetailArticlePage from "./pages/DetailArticlePage"; 
import Dashboard from "./pages/DashboardPage"; 
import ManageArticles from "./pages/ManageArticles"; 
import ManageProducts from "./pages/ManageProducts";
import ManageUsers from "./pages/ManageUsers" ;
import ManageTransactions from "./pages/ManageTransactions";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Oops Indonesia - Official Website</title> {/* Ganti dengan judul yang Anda inginkan */}
        <meta name="description" content="Selamat datang di Oops Family, temukan produk terbaik kami." /> {/* Opsional: tambahkan meta deskripsi */}
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/articles" element={<ArticleArchive />} />
          <Route path="/article/:id" element={<DetailArticlePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-articles" element={<ManageArticles />} />
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-transactions" element={<ManageTransactions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App