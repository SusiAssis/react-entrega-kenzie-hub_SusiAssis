import { useContext, useState } from "react"
import { HeaderBnt } from "../../componentes/Header Bnt/Header Bnt"
import { StyledDashboard } from "../Dashboard/StyledDashboard"
import { UserContext } from "../../providers/UserContext"
import { Navigate } from "react-router-dom"
import { CardTech } from "../../componentes/Card Tech/index"
import { Modal } from "../../componentes/Modal"
import { TechContext } from "../../providers/TechContext"
import { ModalEdit } from "../../componentes/ModalEdit"


export const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const { user, logout, loading, listTechs } = useContext(UserContext)


    const openModal = () => {
        { modalOpen === false ? setModalOpen(true) : setModalOpen(false) }
    }

    const openModalEdit = () => {
        { modalEdit === false ? setModalEdit(true) : setModalEdit(false) }
    }


    if (loading) {
        return <div>Carregando...</div>
    }

    if (!user) {
        return <Navigate to="/" />
    }


    return (
        <StyledDashboard>
            {modalOpen === true ? <Modal openModal={openModal} /> : null}
            {modalEdit === true ? <ModalEdit openModalEdit={openModalEdit} /> : null}

            <HeaderBnt logout={logout} name='Sair' />
            <main>
                <div className="contanier_data">
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>

                </div>

                <section>
                    <div className="tech_add">
                        <h3>Tecnologias</h3>
                        <button onClick={() => openModal()}>+</button>
                    </div>

                    <ul className="contanier_tech">
                        {listTechs.map(tech => (
                            <CardTech key={tech.id} tech={tech} openModalEdit={openModalEdit} />
                        ))}
                    </ul>
                </section>

            </main>
        </StyledDashboard>
    )
}
export default Dashboard