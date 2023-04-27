import Sider from "antd/es/layout/Sider";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Home from "../../pages/Home";
import { Avatar  } from "antd";
import './LayoutDefault.scss';
import {BellOutlined,InfoCircleOutlined} from '@ant-design/icons'; 
import Siders from "../../pages/Siders";
function LayoutDefault(){
    return(
        <>
        
        <Layout>
          <Sider style={{background: "#FFF"}}><Siders /> </Sider>   
            <Layout>
                <Content >
                     <Header className="Header">
                        
                         <span className="Header__version" >Version 1.0.0</span>
                        
                        
                         <div className="Header__right">
                         <span className="Header__icon"><BellOutlined /> </span>
                         <span className="Header__icon"><InfoCircleOutlined /></span>
                         <span className="Header__nameuser"> Nguyễn Huy Hoàng </span>
                         <span> <Avatar></Avatar></span>
                         </div>
                         
                    </Header> 
                                       
                    <Home /> 
                </Content>
            </Layout>
        </Layout>
        </>
    )
}
export default LayoutDefault;