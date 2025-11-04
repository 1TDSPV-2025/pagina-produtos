import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col gap-5">
      <nav className="flex items-center justify-around gap-5 p-5 bg-teal-200 border-b border-teal-500">
        <Link
          className="text-emerald-600 font-bold text-xl hover:text-emerald-400"
          to="/"
        >
          Produtos
        </Link>
        <Link
          className="text-emerald-600 font-bold text-xl hover:text-emerald-400"
          to="/add/products"
        >
          Adicionar Produtos
        </Link>
        <Link
          className="text-emerald-600 font-bold text-xl hover:text-emerald-400"
          to="/categories"
        >
          Categorias
        </Link>
        <Link
          className="text-emerald-600 font-bold text-xl hover:text-emerald-400"
          to="/add/categories"
        >
          Adicionar Categorias
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
