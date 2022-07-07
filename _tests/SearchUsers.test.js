import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {SearchUsers} from "../src/App/Screens";

describe("Tela de Buscas", () => {

    test("Busca com sucesso",() => {
        render(<SearchUsers/>)
        const searchInput = screen.getByTestId("searchInput");
        const searchBtn = screen.getByTestId("searchBtn");
        userEvent.type(searchInput, "carlos97baptista")
        userEvent.click(searchBtn);

        setTimeout(() => {
          const nameUser = screen.getByText("carlos97baptista");
          expect(nameUser).toBeInTheDocument();
          }, "3000")
  
    })
    // test("Busca com erro",() => {
        
    // })
    // test("Busca em branco",() => {
        
    // })

})