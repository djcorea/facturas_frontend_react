
import { Routes, Route} from "react-router-dom";
import { CusttomersPage } from '../components/customers/CustomerPage';
import { InvoicesPage } from '../components/invoices/InvoicesPage';
import { LoginPage } from '../components/login/LoginPage';
import { ProductsPage } from '../components/products/ProductsPage';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouter = () => {
    return (
    
    <>
      <div>
        <Navbar />
      <div className="container dash-container">
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/customers" element={<CusttomersPage />} />
        </Routes>
      </div>
      </div>
    </>
    );
}
