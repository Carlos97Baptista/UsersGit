import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchUsers from "../../Screens/SearchUsers";
import SearchInput from '.'
import {UserProvider} from  '../../Providers/users'
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/historic",
    useHref: "/historic"
  }),
  useNavigate: () => (
     jest.fn()
  ), 
  setLoading: () =>( jest.fn())
}));
describe("Pesquisa", () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});

    it("Busca com texto",() => {
        render(<UserProvider value={{setLoading: jest.fn()}}><SearchInput/></UserProvider>)
        const searchInput = screen.getByTestId("searchInput");
        const searchBtn = screen.getByTestId("searchBtn");
        userEvent.type(searchInput, "carlos97baptista")
        userEvent.click(searchBtn);
  
    })
    it("Busca em branco",() => {
      render(<UserProvider value={{setLoading: jest.fn()}}><SearchInput/></UserProvider>)
      const searchInput = screen.getByTestId("searchInput");
      const searchBtn = screen.getByTestId("searchBtn");
      userEvent.type(searchInput, "")
      userEvent.click(searchBtn);
      setTimeout(expect(window.alert).toBeCalledWith("Preencha o nome do usuário"), 5000);

})

})