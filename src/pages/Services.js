import React from "react";
import { Header } from "../Components/Header";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

export const Services = () => {
  return (
    <>
      <Header />
      <Tools />
      <Loader />
      {/* <!-- Content  --> */}
      <main id="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs__title">Our Services</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <a href="/" className="breadcrumbs__item-link">
                        Home
                      </a>{" "}
                      <span>/</span>{" "}
                      <a href="/services" className="breadcrumbs__item-link">
                        Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Breadcrumbs  --> */}
        <section className="service-info-box">
          <div className="swiper-container-column swiper-container-column-second swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide odd-line">
                <div className="service-block">
                  <figure className="thumbnail">
                    <span>
                      <a href="services-post.html">
                        <img src="assets/images/service_img_1.jpg" alt="" />
                      </a>
                    </span>
                  </figure>
                  <div className="service-block__content">
                    <h3>24 Hour Airport Services</h3>
                    <p>
                      The best and biggest airport transfer company in the city,
                      Airport Transfers is here to provide you with the best
                      one-stop transportation service with minimal fuss and
                      maximum comfort.
                    </p>
                    <a href="services-post.html" className="btn btn__marker">
                      <i className="icon-arrows"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide even-line">
                <div className="service-block">
                  <figure className="thumbnail">
                    <span>
                      <a href="services-post.html">
                        <img src="assets/images/service_img_2.jpg" alt="" />
                      </a>
                    </span>
                  </figure>
                  <div className="service-block__content">
                    <h3>Corporate Meetings &amp; Events</h3>
                    <p>
                      Does your company have employees or clients who frequently
                      rent in the Los Angeles area? Setting up a corporate
                      account allowsus to pre-deliver vehicles to hotels,
                      offices, residences.
                    </p>
                    <a href="services-post.html" className="btn btn__marker">
                      <i className="icon-arrows"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide odd-line">
                <div className="service-block">
                  <figure className="thumbnail">
                    <span>
                      <a href="services-post.html">
                        <img src="assets/images/service_img_3.jpg" alt="" />
                      </a>
                    </span>
                  </figure>
                  <div className="service-block__content">
                    <h3>Business Travel</h3>
                    <p>
                      We offer professional drivers who can chauffeur you to any
                      destination you choose. Or ask for a type of tour or drive
                      you are in the mood for and let us do the rest.{" "}
                    </p>
                    <a href="services-post.html" className="btn btn__marker">
                      <i className="icon-arrows"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide odd-line">
                <div className="service-block">
                  <figure className="thumbnail">
                    <span>
                      <a href="services-post.html">
                        <img src="assets/images/service_img_4.jpg" alt="" />
                      </a>
                    </span>
                  </figure>
                  <div className="service-block__content">
                    <h3>Private Tours</h3>
                    <p>
                      Huge discounts. Free Delivery and Pickup. Free Car washes.
                      Free upgrades. Free maintenance. We offer amazing deals on
                      car rental rates. Give us a call we make it easy and
                      affordable.
                    </p>
                    <a href="services-post.html" className="btn btn__marker">
                      <i className="icon-arrows"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide even-line">
                <div className="service-block">
                  <figure className="thumbnail">
                    <span>
                      <a href="services-post.html">
                        <img src="assets/images/service_img_5.jpg" alt="" />
                      </a>
                    </span>
                  </figure>
                  <div className="service-block__content">
                    <h3>To My Door</h3>
                    <p>
                      Sometimes there just aren’t enough hours in the day. So,
                      why would you want to spend an hour travelling across town
                      to pick up a hire car?
                    </p>
                    <a href="services-post.html" className="btn btn__marker">
                      <i className="icon-arrows"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide odd-line">
                <div className="service-block">
                  <figure className="thumbnail">
                    <span>
                      <a href="services-post.html">
                        <img src="assets/images/service_img_6.jpg" alt="" />
                      </a>
                    </span>
                  </figure>
                  <div className="service-block__content">
                    <h3>Private Tours</h3>
                    <p>
                      If you’ve got a busy trip ahead and you simply want to get
                      straight behind the wheel when you arrive to pick up your
                      rental car, you’re in luck. Online Check-in is designed to
                      get you out on the road as soon as possible, and the best
                      part is… it’s a free service.
                    </p>
                    <a href="services-post.html" className="btn btn__marker">
                      <i className="icon-arrows"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-column-main"></div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="phone-box">
                <h1>Join Us and Save on Car Rentals!</h1>
                <span className="text-link">
                  Great offers for cheap car rental, daily, weekly long term
                  rentals
                </span>
                <h3 className="phone-box__number">
                  Call Now:{" "}
                  <span>
                    <i className="icon-telephone"></i>
                    1-800-123-4567
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="services-box">
          <div className="container">
            <div className="box-list-posts swiper-container-services swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="post-column">
                    <figure className="thumbnail">
                      <img src="assets/images/post-sm-img-1.jpg" alt="" />
                    </figure>
                    <div className="post-column__content">
                      <h3>
                        Nearest
                        <br /> Airport Deals
                      </h3>
                      <span className="text-link">
                        Budget Prices for Long Term Rentals
                      </span>
                      <a href="#" className="btn btn__marker">
                        <i className="icon-arrows"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="post-column">
                    <figure className="thumbnail">
                      <img src="assets/images/post-sm-img-2.jpg" alt="" />
                    </figure>
                    <div className="post-column__content">
                      <h3>Online Reservations</h3>
                      <span className="text-link">
                        Search Prices and Special Offers
                      </span>
                      <a href="#" className="btn btn__marker">
                        <i className="icon-arrows"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="post-column">
                    <figure className="thumbnail">
                      <img src="assets/images/post-sm-img-3.jpg" alt="" />
                    </figure>
                    <div className="post-column__content">
                      <h3>24/7 Road Assistance</h3>
                      <span className="text-link">
                        Road Assistance &amp; Car Replacement
                      </span>
                      <a href="#" className="btn btn__marker">
                        <i className="icon-arrows"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-services"></div>
            </div>
            {/* <!-- // box-list-posts  --> */}
          </div>
        </div>
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
