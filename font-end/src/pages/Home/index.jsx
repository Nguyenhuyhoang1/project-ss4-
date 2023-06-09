import {BarsOutlined ,AppstoreOutlined} from '@ant-design/icons'; 
import React, { useState } from 'react';
import './Content.scss';
import { Avatar, Col, Row, Modal } from "antd";
import { Button } from 'antd/es/radio';
import { Room } from "../../Room";
import { Header } from "antd/es/layout/layout";
import { Input } from 'antd';
const { Search } = Input;
function Home() {
    const [query, setQuery] = useState("");
    const [modal, setModal] = useState(false);
    const abrirModal = () => {
        setModal(true);
    }
    const cerrarModal = () => {
        setModal(false);
    }
    const action = () => {
        cerrarModal();
    }

    return (
        <>
            <Header style={{background: "#F5F5F5", margin:"20px 0px 40px 0px", display:"flex" ,alignItems:"center",justifyContent:"space-between"}}>
                <div className="inner-left" style={{ display:"flex" ,alignItems:"center"}}>
                <h1 className='lable'>Rooms</h1>
                <Search placeholder="input search text" onChange={(e) => setQuery(e.target.value)} style={{ width: 200 }} />
                </div>
                <div className="inner-right" style={{ display:"flex" ,alignItems:"center"}}>
                <h3 className='view' style={{marginRight: "30px"}}>View: </h3>
                <Button style={{background: "#F5F5F5" ,marginRight: "30px"}}><AppstoreOutlined /> Gird</Button>
                <Button style={{background: "#F5F5F5"}}><BarsOutlined />List </Button>
                </div>
            </Header>

            <h2 className='StyleRoom' style={{ margin: "40px 40px 30px 40px" }}>Standard</h2>
            <Row>
                <Col>
                    {Room.length > 0 && (
                        <div className='Standard__list'>
                            {Room.filter((item) => item.Name.includes(query)).map((item) => (
                                <>
                                    <div className='Standard__item' key={item.id}>
                                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                            <div className='Standard__name'>{item.Name}</div>
                                            <div className="modal">
                                                <Button type='info' onClick={abrirModal} className='Modal'> {item.Modal}</Button>
                                                <Modal title="Modal Header"
                                                    visible={modal}
                                                    onCancel={cerrarModal}
                                                    onOk={action}>
                                                    <p>{item.Modal_Header}</p>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="Standard__status">
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                        </div>
                                        <div className="Standard__time">{item.Time}</div>
                                    </div>
                                </>
                            ))}
                        </div>
                    )}
                </Col>
            </Row>

            <h2 className='StyleRoom' style={{ margin: "40px 40px 30px 40px" }}>Double</h2>
            <Row>
                <Col>
                    {Room.length > 0 && (
                        <div className='Standard__list'>
                            {Room.filter((item) => item.Name.includes(query)).map((item) => (
                                <>
                                    <div className='Standard__item' key={item.id}>
                                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                            <div className='Standard__name'>{item.Name}</div>
                                            <div className="modal">
                                                <Button type='info' onClick={abrirModal} className='Modal'> {item.Modal}</Button>
                                                <Modal title="Modal Header"
                                                    visible={modal}
                                                    onCancel={cerrarModal}
                                                    onOk={action}>
                                                    <p>{item.Modal_Header}</p>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="Standard__status">
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                        </div>
                                        <div className="Standard__time">{item.Time}</div>
                                    </div>
                                </>
                            ))}
                        </div>
                    )}
                </Col>
            </Row>
            <h2 className='StyleRoom' style={{ margin: "40px 40px 30px 40px" }}>King</h2>
            <Row>
                <Col>
                    {Room.length > 0 && (
                        <div className='Standard__list'>
                            {Room.filter((item) => item.Name.includes(query)).map((item) => (
                                <>
                                    <div className='Standard__item' key={item.id}>
                                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                            <div className='Standard__name'>{item.Name}</div>
                                            <div className="modal">
                                                <Button type='info' onClick={abrirModal} className='Modal'> {item.Modal}</Button>
                                                <Modal title="Modal Header"
                                                    visible={modal}
                                                    onCancel={cerrarModal}
                                                    onOk={action}>
                                                    <p>{item.Modal_Header}</p>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="Standard__status">
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                        </div>
                                        <div className="Standard__time">{item.Time}</div>
                                    </div>
                                </>
                            ))}
                        </div>
                    )}
                </Col>
            </Row>


        </>
    )
}

export default Home;