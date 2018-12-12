import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import './NewsPage.css';
import Navbar from "../../Navbar";

export default class NewsPage extends Component {

    render() {
        return (
            <div className="ui two column divided grid">
                <div className="stretched row">

                    <div className="twelve wide column">
                        <div className="ui segment mytextalignright">3 هدف مهم کریستیانو رونالدو برابر یانگ بویز
                            کریستیانو رونالدو قصد استراحت کردن نداشته و امشب در دیدار مقابل یانگبویز حضور پیدا خواهد
                            کرد.

                        </div>
                        <div className="ui segment mytextalignright">
                            به گزارش "ورزش سه"، بر خلاف شروعی نه چندان خوب، حالا رونالدو در ترکیب یوونتوس به خوبی جا
                            افتاده و در هفته های اخیر تبدیل به گلزن اول بیانکونری در سری آ شده است.


                            علیرغم قطعی بودن صعود یوونتوس از مرحله گروهی، رونالدو در دیدار برابر یانگ بویز در لیگ
                            قهرمانان به میدان خواهد رفت و اهدافی برای باز کردن دروازه این تیم دارد. در صورت گلزنی
                            برابر یانگ بویز، این تیم سوئیسی تبدیل به سی و سومین حریفی خواهد شد که رونالدو در لیگ
                            قهرمانان با لباس رئال مادرید و منچستریونایتد موفق به گلزنی به آن شده است.
                            <img src="Roma.png" className="left floated" alt=""/>

                        </div>


                    </div>
                    <div className="four wide column">
                        <div className="ui segment grid">
                            <h1>اخبار دیگر</h1>
                        </div>
                    </div>
                </div>
            </div>
        );


    }

}