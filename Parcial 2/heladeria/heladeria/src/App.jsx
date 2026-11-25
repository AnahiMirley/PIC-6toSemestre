import Header from "./components/Header";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Footer from "./components/Footer";
import Descuento from "./components/Descuento";

const menuItem = {
  id: 1,
  iceCream: {
    id: 3,
    name: "Mora silvestre",
    imagePath: "/images/mora.svg",
  },
  price: 1.5,
  description: "Mora de Ambato con un toque de limon",
  inStock: true,
}

const App = () => {
  return(
    <>
    <main>
      <Header />
      <Menu>
        <MenuItem menuItem={menuItem} />
        <Descuento />
      </Menu>
    </main>
    <Footer />
  </>
  )
};


export default App;
