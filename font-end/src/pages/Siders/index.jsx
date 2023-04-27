import { TeamOutlined , FileTextOutlined, PieChartOutlined  } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import "./Sider.scss";
function Siders(){
    const { Sider } = Layout;
    return(     
    
      <Sider trigger={null} style={{textAlign: 'center'}}>     
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'DTD',
            },
            {
              key: '2',
              icon: <PieChartOutlined /> ,
            },
            {
              key: '3',
              icon: <TeamOutlined />
            },
            {
                key: '4',
                icon: <FileTextOutlined />
              },
          ]}
        />
      </Sider>
      
       
    )
};
export default Siders;