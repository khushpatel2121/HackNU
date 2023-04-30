import React from 'react';
import "./home.css"
import Featured from '../../components/featuredInfo/featured';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummy';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/widgetLg';
import Sidebar from '../../components/sidebar/sidebar';

const Home = () => {
  return (<>

    <div className="container">
        <Sidebar/>
    <div className='home'>
            
            <Featured/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className='homeWidgets'>
            <WidgetSm/>
            <WidgetLg/>
            </div>
    </div>
    </div>
  </>
  )
}

export default Home
