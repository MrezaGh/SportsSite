import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import Navbar from "../../Navbar";
import './TheLeaguePage.css';


export default class TheLeaguePage extends Component {
    sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc";
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (n == 0) {
                    if (dir == "asc") {
                        if (x.innerHTML > y.innerHTML) {
                            console.log(x);
                            //if so, mark as a switch and break the loop:
                            shouldSwitch = true;
                            break;
                        }
                    } else if (dir == "desc") {
                        if (x.innerHTML < y.innerHTML) {
                            //if so, mark as a switch and break the loop:
                            shouldSwitch = true;
                            break;
                        }
                    }
                } else if (n == 1) {
                    if (dir == "asc") {
                        if (Number(x.innerHTML) > Number(y.innerHTML)) {
                            console.log(x);
                            //if so, mark as a switch and break the loop:
                            shouldSwitch = true;
                            break;
                        }
                    } else if (dir == "desc") {
                        if (Number(x.innerHTML) < Number(y.innerHTML)) {
                            //if so, mark as a switch and break the loop:
                            shouldSwitch = true;
                            break;
                        }
                    }
                }

            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }


    myfunction(){
        var e=document.getElementById("hello1");
        var r=e.options[1].value;
        alert(r);
    }
    render() {

        return <div className="ui two column divided grid mydirection">
            <div className="row">
                <div className="twelve wide column">

                    <table id="myTable">
                        <tr ></tr>
                        <tr>
                            <th className="haveclick" onClick={() => this.sortTable(0)}> تیم</th>
                            <th className="haveclick" onClick={() => this.sortTable(1)}> امتیاز</th>
                            <th>بازی ها</th>
                            <th>برد</th>
                            <th>مساری</th>
                            <th>باخت</th>
                            <th>گل زده</th>
                            <th>گل خورده</th>
                            <th> تفاضل گل</th>
                        </tr>

                        {this.props.teamData.map((data, index) => {
                            return (<tr>

                                <td>{data.name}</td>
                                <td>{parseInt(data.points)}</td>
                                <td>{data.games}</td>
                                <td>{data.win}</td>
                                <td>{data.equal}</td>
                                <td>{data.lose}</td>
                                <td>{data.goalhad}</td>
                                <td>{data.achivedgoal}</td>
                                <td>{data.defrenceofgoals}</td>
                            </tr>);


                        })}


                    </table>

                </div>
                < div
                    className="four wide column">

                    <select id="hello1" className="ui search dropdown ">
                        <option value="">Skills</option>
                        <option value="angular">Angular</option>
                        <option value="css">CSS</option>
                        <option value="design">Graphic Design</option>
                        <option value="ember">Ember</option>
                        <option value="html">HTML</option>
                        <option value="ia">Information Architecture</option>
                        <option value="javascript">Javascript</option>
                        <option value="mech">Mechanical Engineering</option>
                        <option value="meteor">Meteor</option>
                        <option value="node">NodeJS</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="python">Python</option>
                        <option value="rails">Rails</option>
                        <option value="react">React</option>
                        <option value="repair">Kitchen Repair</option>
                        <option value="ruby">Ruby</option>
                        <option value="ui">UI Design</option>
                        <option value="ux">User Experience</option>
                    </select>
                    <select id="hello2" className="ui search dropdown">
                        <option value="۸۵">۸۵</option>
                        <option value="۸۶">۸۶</option>
                        <option value="۸۷">۸۷</option>
                        <option value="۸۸">۸۸</option>
                        <option value="۸۹">۸۹</option>
                        <option value="۹۰">۹۰</option>
                        <option value="۹۱">۹۱</option>
                        <option value="۹۲">۹۲</option>
                        <option value="۹۳">۹۳</option>
                        <option value="۹۴">۹۴</option>
                        <option value="۹۵">۹۵</option>
                        <option value="۹۶">۹۶</option>
                        <option value="۹۷">۹۷</option>
                    </select>
                </div>

            </div>


        </div>;


    }

}