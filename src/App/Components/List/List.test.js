import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from ".";
import { UserProvider } from "../../Providers/users";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/historic",
    useHref: "/historic",
  }),
  useNavigate: () => jest.fn(),
  setLoading: () => jest.fn(),
}));
const users = [
  {
    data: {
      avatar_url: "https://avatars.githubusercontent.com/u/91613?v=4",
      bio: null,
      blog: "",
      company: null,
      created_at: "2009-06-03T21:07:43Z",
      email: null,
      events_url: "https://api.github.com/users/teste/events{/privacy}",
      followers: 5,
      followers_url: "https://api.github.com/users/teste/followers",
      following: 0,
      following_url:
        "https://api.github.com/users/teste/following{/other_user}",
      gists_url: "https://api.github.com/users/teste/gists{/gist_id}",
      gravatar_id: "",
      hireable: null,
      html_url: "https://github.com/teste",
      id: 91613,
      location: "Argentina",
      login: "teste",
      name: null,
      node_id: "MDQ6VXNlcjkxNjEz",
      organizations_url: "https://api.github.com/users/teste/orgs",
      public_gists: 8,
      public_repos: 8,
      received_events_url: "https://api.github.com/users/teste/received_events",
      repos_url: "https://api.github.com/users/teste/repos",
      site_admin: false,
      starred_url: "https://api.github.com/users/teste/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/teste/subscriptions",
      twitter_username: null,
      type: "User",
      updated_at: "2017-12-16T23:42:50Z",
      url: "https://api.github.com/users/teste",
    },
    date: "2022-07-07T10:58:01.898Z",
  },
];
describe("Historico", () => {
  jest.spyOn(window, "alert").mockImplementation(() => {});

  it("perfil do historico", () => {
    render(
      <UserProvider value={{ setLoading: jest.fn(), users }}>
        <List />
      </UserProvider>
    );
    setTimeout(() => {
      const userName = screen.getByText("teste");
      expect(userName).toBeInTheDocument();
      const todayTime = screen.queryByText("Hoje: 7:58");
      const Time = screen.queryByText("07/07/2022");
      expect(todayTime || Time).toBeInTheDocument();
      userEvent.click(userName);
    }, 5000);
  });
});
