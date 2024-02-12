import React from 'react'
import { NavLink } from 'react-router-dom';

const Information = () => {
    return (
        <>
            <div className="container p-5 ">
                <div className="row">
                    <div className="col bg-orange-500 text-center h-[500px] flex items-center">
                        <div>
                            <h1 className=" text-white mb-5 font-bold text-5xl"> هل تبحث عن توصيـل سريع وأمن؟</h1>
                            <h3 className="text-gray-200 mb-5 mt-3 text-3xl">
                                توصيل سريع، خدمة مميزة، ورضا العملاء الدائم هو شعارنا في شركة وسن للخدمات اللوجستية
                            </h3>
                            <button className="btn btn-light">تـواصل معنا</button>
                        </div>
                    </div>
                    <div className="col bg-gray-700 text-center h-[500px] flex  items-center">
                        <div>
                            {" "}
                            <h1 className=" text-white mb-5 font-bold text-5xl">جاهزون لتحقيق تجربة توصيل استثنائية؟</h1>
                            <h3 className="text-orange-500 mb-5 mt-3 text-3xl">
                                اكتشف مع وسن للخدمات اللوجستية عالماً جديداً من السرعة والجودة في خدمات التوصيل، حيث نضمن لك تجربة لا
                                مثيل لها مع كل شحنة.
                            </h3>
                            <NavLink to="/contact" >
                                <button className="btn btn-light">تـواصل معنا</button>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information