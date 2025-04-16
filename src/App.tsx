import { library } from "@fortawesome/fontawesome-svg-core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab)

export function App() {
  // @ts-expect-error problema conhecido pela fontawesome e esta é a solução temporária indicada no próprio site https://docs.fontawesome.com/web/use-with/react/add-icons#typescript-and-custom-icons-issue
  const gitHubIcon: IconProp = "fa-brands fa-github"
  return <h1><FontAwesomeIcon icon={gitHubIcon} /> Olá Mundo</h1>
}
