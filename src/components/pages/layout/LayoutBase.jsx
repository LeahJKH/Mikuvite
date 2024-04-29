
import Header from "../../../components/layout/header/Header"
import Footer from "../../../components/layout/footer/Footer"
import { Outlet } from "react-router-dom"

export default function LayoutBase() {

  return (
    <>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}