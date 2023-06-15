import { useNavigate } from "react-router-dom"

export const useRouteChange = () => {
  const navigate = useNavigate()

  const routeChange = (path: string) => {
    navigate(path)
  }
  return routeChange
}