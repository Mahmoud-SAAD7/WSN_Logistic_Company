import React from 'react';

const FeaturedProjects = () => {
    return (
        <section className="section project" aria-label="project">
            <div className="container">
                <p className="section-subtitle">الأسطول</p>
                <p className="section-text text-5xl">
                    تملك الشركة العديد من الشاحنات الحديثة والحاويات والمقطورات
                </p>
                <ul className="project-list">
                    <li className="project-item">
                        <div className="project-card">
                            <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                                <img src="./images/blog-1.jpg" width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
                            </figure>
                            <button className="action-btn" aria-label="View image">
                                <ion-icon name="expand-outline"></ion-icon>
                            </button>
                            <div className="card-content">
                                <p className="card-tag">سائقين محترفين</p>
                                <h3 className="h3">
                                    <a href="#" className="card-title">تعرف علينا</a>
                                </h3>
                                <a href="#" className="card-link">المزيد</a>
                            </div>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="project-card">
                            <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                                <img src="./images/project-6.jpg" width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
                            </figure>
                            <button className="action-btn" aria-label="View image">
                                <ion-icon name="expand-outline"></ion-icon>
                            </button>
                            <div className="card-content">
                                <p className="card-tag">الأسطول</p>
                                <h3 className="h3">
                                    <a href="#" className="card-title">اماكن تخزين امنة</a>
                                </h3>
                                <a href="#" className="card-link">المزيد</a>
                            </div>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="project-card">
                            <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                                <img src="./images/85345.jpg" width="397" height="352" loading="lazy" alt="Warehouse inventory" className="img-cover" />
                            </figure>
                            <button className="action-btn" aria-label="View image">
                                <ion-icon name="expand-outline"></ion-icon>
                            </button>
                            <div className="card-content">
                                <p className="card-tag">أسطول</p>
                                <h3 className="h3">
                                    <a href="#" className="card-title">جميع انواع الشاحنات</a>
                                </h3>
                                <a href="#" className="card-link">المزيد</a>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    );
}

export default FeaturedProjects;
