import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="flex items-center  justify-center py-20  container ">
            <div className="justify-center flex-1 max-w-8xl px-4 py-4 mx-auto lg:py-9 md:px-8">
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 md:w-1/2">
                                <img
                                    src="https://t3.ftcdn.net/jpg/05/65/09/38/360_F_565093895_mRLsNiMVLZpshQ9hiBpZ1OhdfRngq4sK.jpg"
                                    alt=""
                                    className="object-cover w-full mb-3 rounded-lg h-64"
                                />
                                <img
                                    src="https://5.imimg.com/data5/EC/BO/IW/SELLER-11161414/customs-clearance-service-500x500.JPG"
                                    alt=""
                                    className="object-cover w-full rounded-lg h-90"
                                />
                            </div>
                            <div className="w-full px-4 md:w-1/2 xl:mt-11">
                                <img
                                    src="https://portistlojistik.com.tr/wp-content/uploads/2022/12/Asset-21.png"
                                    alt=""
                                    className="object-cover w-full mb-3 rounded-lg h-80"
                                />
                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2023/6/319179542/QM/ZS/GU/183597878/import-clearance-service-2-500x500.jpeg"
                                    alt=""
                                    className="object-cover w-full rounded-lg h-80  "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-10 xl:w-1/2   flex  flex-col lg:mb-8 text-center items-center">
                        <span className="text-l font-semibold text-blue-500">من نحن ؟</span>
                        <h2 className="mt-2 text-l mb-4 text-5xl font-bold text-gray-700">شـركة وسن للخدمات اللوجستية</h2>
                        <p className="mb-4  text-base leading-7 text-blue-500">
                            افضل شركة في الوطن العربي والمملكة العربية السعودية في مجال خدمات النقل البري
                        </p>
                        <ul className="mb-10 text-center">
                            <li className="flex items-center mb-4  text-3xl text-gray-600">
                                <span className="mr-3 text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        fill="currentColor"
                                        className="w-6 h-6 bi bi-1-circle-fill"
                                        viewBox="0 0 16 16"
                                    ></svg>
                                </span>
                                خبرة واسعة: لدينا خبرة واسعة في مجال خدمات النقل البري، حيث نقدم الحلول اللوجستية المبتكرة والموثوقة
                                لعملائنا.
                            </li>
                            <li className="flex items-center mb-4 text-3xl text-gray-600">
                                <span className="mr-3 text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-6 h-6 bi bi-2-circle-fill"
                                        viewBox="0 0 16 16"
                                    ></svg>
                                </span>
                                جودة الخدمة: نحرص دائمًا على تقديم أعلى مستويات الجودة في خدماتنا، مما يضمن رضا عملائنا وتحقيق تجربة نقل
                                سلسة وفعالة.
                            </li>
                            <li className="flex items-center mb-4 text-3xl text-gray-600">
                                <span className="mr-3 text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-6 h-6 bi bi-3-circle-fill"
                                        viewBox="0 0 16 16"
                                    ></svg>
                                </span>
                                شبكة واسعة: تتمتع شركة وسن بشبكة واسعة من الشركاء والموردين في جميع أنحاء المملكة العربية السعودية، مما
                                يمكننا من تلبية احتياجات النقل لعملائنا بفعالية.
                            </li>
                            <li className="flex items-center mb-4 text-3xl text-gray-600 w">
                                <span className="mr-3 text-blue-500 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-6 h-6 bi bi-4-circle-fill"
                                        viewBox="0 0 16 16"
                                    ></svg>
                                </span>
                                تقنيات متقدمة: نستخدم أحدث التقنيات في عمليات النقل البري، مما يسهل عمليات التتبع والإدارة ويزيد من
                                كفاءة العمليات.
                            </li>
                            <li className="flex items-center mb-4 text-3xl text-gray-600">
                                <span className="mr-3 text-blue-500 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-6 h-6 bi bi-4-circle-fill"
                                        viewBox="0 0 16 16"
                                    ></svg>
                                </span>
                                التزام بالمواعيد: نحرص على تقديم الخدمات في الوقت المحدد وبمواعيد دقيقة، مما يسهم في تحقيق التوقعات ورضا
                                العملاء.
                            </li>
                            <li className="flex items-center mb-4 text-3xl text-gray-600">
                                <span className="mr-3 text-blue-500 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-6 h-6 bi bi-4-circle-fill"
                                        viewBox="0 0 16 16"
                                    ></svg>
                                </span>
                                تكاليف تنافسية: نقدم خدمات ذات تكلفة معقولة ومنافسة، مع الحفاظ على جودة الخدمة والموثوقية.
                            </li>
                        </ul>
                        <Link to="/contact" className="px-4 py-2 w-50  text-gray-100 bg-blue-500 rounded-md hover:bg-yellow-500">
                            تواصل معنا
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}