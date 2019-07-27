import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";
import PesonnelContainer from '../container/PesonnelContainer/PesonnelContainer';
import TeamContainer from '../container/TeamContainer/TeamContainer';
import Home from '../component/Home/Home';

import Detail from '../container/PesonnelContainer/component/Detail';
import ModalCreate from '../container/PesonnelContainer/component/ModalCreate';
import ModalEdit from '../container/PesonnelContainer/component/ModalEdit';

//quan ly team
import ModalCreateTeam from '../container/TeamContainer/component/ModalCreate';
import ModalEditTeam from '../container/TeamContainer/component/ModalCreate';
import RedirectTeam from '../container/TeamContainer/component/RedirectTeam';

//quan ly cong viec
import TaskContainer from '../container/TaskContainer/TaskContainer';
import TaskContainer1 from '../container/TaskContainer/TaskContainer';
import DetailTask from '../container/TaskContainer/component/Detail';
import ModalCreateTask from '../container/TaskContainer/component/ModalCreate';
import ModalEditTask from '../container/TaskContainer/component/ModalEdit';

//
import PositionContainer from '../container/PositionContainer/PositionContainer';
import DetailPosition from '../container/PositionContainer/component/Detail';
import ModalCreatePosition from '../container/PositionContainer/component/ModalCreate';
import ModalEditPosition from '../container/PositionContainer/component/ModalEdit';

//quan ly du an

import ProjectContainer from '../container/ProjectContainer/ProjectContainer';

//Notification
import NotificationDetail from '../container/NotificationContainer/component/NotificationDetail';
export default class RouterURL extends Component {
    render(){
        return (
                <div>
                    <Switch >
                   
                    {/* <Route exact path="/home" component={Home} /> */}
                    {/* <Route exact path="/" component={Home} /> */}
                        {/* quan ly nhan su */}
                        <Route exact path="/home/nhan-su-chinh-thuc" component={PesonnelContainer} />
                        
                        <Route exact path="/home/nhan-su-chinh-thuc/them"  component={ModalCreate}/>}/>
                        <Route exact path="/home/nhan-su-chinh-thuc/chi-tiet/:id" component={Detail} />
                        <Route exact path="/home/nhan-su-chinh-thuc/sua/:id"  component={ModalEdit}/>}/>

                         {/* quan ly team */}
                        <Route exact path="/home/nhom" component={TeamContainer} />
                        <Route exact path="/home/nhom/them"  component={ModalCreateTeam}/>}/>
                        <Route exact path="/home/nhom/chi-tiet/:id" component={Detail} />
                        <Route exact path="/home/nhom/sua/:id"  component={ModalEditTeam}/>}/>
                        <Route exact path="/home/chuyen-nhom"  component={RedirectTeam}/>}/>
                       

                        {/* quan ly cong viec */}
                        <Route exact path="/home/cong-viec" component={TaskContainer} />
                        <Route exact path="/home/nhom/them"  component={ModalCreateTask}/>}/>
                        <Route exact path="/home/nhom/chi-tiet/:id" component={DetailTask} />
                        <Route exact path="/home/cong-viec/sua/:id"  component={ModalEditTask}/>}/>
                        <Route exact path="/home/giao-viec"  component={ModalCreateTask}/>}/>

                        {/* quan ly Project */}
                        <Route exact path="/home/du-an/danh-sach-du-an" component={ProjectContainer} />
                        
                        <Route exact path="/home/du-an/them"  component={ModalCreateTask}/>}/>
                        <Route exact path="/home/du-an/chi-tiet/:id" component={DetailTask} />
                        <Route exact path="/home/du-an/sua/:id"  component={ModalEditTask}/>}/>
                        <Route exact path="/home/tat-ca-thong-bao" component={NotificationDetail} />

                           {/* Position  */}
                           <Route exact path="/home/chuc-vu" component={PositionContainer} />
                        
                        <Route exact path="/home/chuc-vu/them"  component={ModalCreatePosition}/>}/>
                        <Route exact path="/home/chuc-vu/chi-tiet/:id" component={DetailPosition} />
                        <Route exact path="/home/chucvu/sua/:id"  component={ModalEditPosition}/>}/>
                        
                        <Route exact path="/home/danh-gia" component={NotificationDetail} />
                        
                        {/* trang chu */}
                        <Route path="/home" component={Home} />
                        
                        <Route component={Home} />
                        {/* Notification  */}
                      
                        
                    </Switch>
                </div>
        )
    }
}
