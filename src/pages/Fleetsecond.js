import React from "react";
import { Header } from "../Components/Header";
import { Tools } from "../Components/Tools";
import { Loader } from "../Components/Loader";
import { Footer } from "../Components/Footer";

export const Fleetsecond = () => {
  return (
    <>
      <Header />
      <Tools />
      <Loader />
      {/* <!-- Content  --> */}
      <main id="page-content">
        <div className="breadcrumbs">
          <div className="container">
            9
            <div className="row">
              <div className="col-xs-12">
                <div className="breadcrumbs__title">Fleet</div>
                <div className="breadcrumbs__items">
                  <div className="breadcrumbs__wrap">
                    <div className="breadcrumbs__item">
                      <a href="index-2.html" className="breadcrumbs__item-link">
                        Home
                      </a>{" "}
                      <span>/</span>{" "}
                      <a href="fleet.html" className="breadcrumbs__item-link">
                        Fleet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // Breadcrumbs  --> */}

        <section className="isotop-box">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <div className="filter-box">
                  <h3>Filters</h3>

                  <div className="price-slider filter-widget">
                    <h4 className="filter-widget__title">Price</h4>
                    <div id="keypress"></div>
                    <div className="input__block">
                      <input type="text" id="input-with-keypress-0" />
                      <input type="text" id="input-with-keypress-1" />
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget__title">Vehicle Type</h4>
                    <select name="time">
                      <option value="Car">Car</option>
                      <option value="Yacht">Yacht</option>
                      <option value="Airplane">Airplane</option>
                      <option value="Helicopter">Helicopter</option>
                    </select>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget__title">Car Type</h4>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-01-01"
                        value="a1"
                      />
                      <label for="checkbox-01-01">Coupe</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option2"
                        id="checkbox-01-02"
                        value="a2"
                      />
                      <label for="checkbox-01-02">Limo</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option3"
                        id="checkbox-01-03"
                        value="a3"
                      />
                      <label for="checkbox-01-03">Sedan</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option4"
                        id="checkbox-01-04"
                        value="a4"
                      />
                      <label for="checkbox-01-04">Van</label>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget__title">Resourses</h4>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-02-01"
                        value="a1"
                      />
                      <label for="checkbox-02-01">Add. Drivers</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option2"
                        id="checkbox-02-02"
                        value="a1"
                      />
                      <label for="checkbox-02-02">Baby Seat</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option3"
                        id="checkbox-02-03"
                        value="a1"
                      />
                      <label for="checkbox-02-03">Child Seat</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option4"
                        id="checkbox-02-04"
                        value="a1"
                      />
                      <label for="checkbox-02-04">GPS</label>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget__title">className</h4>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-03-01"
                        value="a1"
                      />
                      <label for="checkbox-03-01">Compact</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-03-02"
                        value="a2"
                      />
                      <label for="checkbox-03-02">Family</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option2"
                        id="checkbox-03-03"
                        value="a3"
                      />
                      <label for="checkbox-03-03">Full size</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option3"
                        id="checkbox-03-04"
                        value="a4"
                      />
                      <label for="checkbox-03-04">Intermediate</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option4"
                        id="checkbox-03-05"
                        value="a5"
                      />
                      <label for="checkbox-03-05">Mini</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option5"
                        id="checkbox-03-06"
                        value="a6"
                      />
                      <label for="checkbox-03-06">Standard</label>
                    </div>
                  </div>
                  <div className="filter-widget bdr-none">
                    <h4 className="filter-widget__title">Car Brands</h4>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-04-01"
                        value="a1"
                      />
                      <label for="checkbox-04-01">Astonmartin</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-04-02"
                        value="a2"
                      />
                      <label for="checkbox-04-02">Audi</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-04-03"
                        value="a3"
                      />
                      <label for="checkbox-04-03">Ford</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-04-04"
                        value="a4"
                      />
                      <label for="checkbox-04-04">Maruti</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-04-05"
                        value="a5"
                      />
                      <label for="checkbox-04-05">Mercedes-Benz</label>
                    </div>
                    <div className="box-checkbox">
                      <input
                        type="checkbox"
                        name="option1"
                        id="checkbox-04-06"
                        value="a6"
                      />
                      <label for="checkbox-04-06">Terasa</label>
                    </div>
                  </div>
                  <div>
                    <input
                      type="button"
                      value="SUBMIT FILTERS"
                      className="btn"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-9">
                <div className="gallery row" id="gallery">
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-07.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Hyundai Accent Hatchback</h6>
                      <span className="cost">
                        <span>
                          <strong>21$</strong> / hour
                        </span>
                        <span>
                          <strong>110$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-08.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Hyundai Santa Fe</h6>
                      <span className="cost">
                        <span>
                          <strong>28$</strong> / hour
                        </span>
                        <span>
                          <strong>142$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-09.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Hyundai i30</h6>
                      <span className="cost">
                        <span>
                          <strong>22$</strong> / hour
                        </span>
                        <span>
                          <strong>115$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-10.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>KIA Sorento</h6>
                      <span className="cost">
                        <span>
                          <strong>21$</strong> / hour
                        </span>
                        <span>
                          <strong>110$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-11.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Toyota Corolla</h6>
                      <span className="cost">
                        <span>
                          <strong>22$</strong> / hour
                        </span>
                        <span>
                          <strong>124$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-12.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Mercedes-Benz Van </h6>
                      <span className="cost">
                        <span>
                          <strong>20$</strong> / hour
                        </span>
                        <span>
                          <strong>100$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-13.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Volkswagen Polo 1.2 TDI MT </h6>
                      <span className="cost">
                        <span>
                          <strong>20$</strong> / hour
                        </span>
                        <span>
                          <strong>200$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-14.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Citroen C-Elysee</h6>
                      <span className="cost">
                        <span>
                          <strong>18$</strong> / hour
                        </span>
                        <span>
                          <strong>90$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-15.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>KIA Rio Sedan</h6>
                      <span className="cost">
                        <span>
                          <strong>22$</strong> / hour
                        </span>
                        <span>
                          <strong>115$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-16.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Mercedes-Benz B</h6>
                      <span className="cost">
                        <span>
                          <strong>21$</strong> / hour
                        </span>
                        <span>
                          <strong>110$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-17.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Fiat Panda Fiat Panda 4x4</h6>
                      <span className="cost">
                        <span>
                          <strong>34$</strong> / hour
                        </span>
                        <span>
                          <strong>159$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                  <div className="gallery__item col-xs-12 col-sm-6 col-xl-4">
                    <figure className="gallery__item__image">
                      <a className="hover" href="/details">
                        <img
                          src="assets/images/gallery/gallery-img-thumb-18.jpg"
                          alt=""
                        />
                        <i className="icon-arrow-down-sign-to-navigate2"></i>
                      </a>
                    </figure>
                    <div className="gallery__item__content">
                      <h6>Audi A5</h6>
                      <span className="cost">
                        <span>
                          <strong>30$</strong> / hour
                        </span>
                        <span>
                          <strong>150$</strong> / day
                        </span>
                      </span>
                      <u>
                        <a href="/details" className="link-gallery">
                          View Details
                        </a>
                      </u>
                      <span
                        className="btn btn-mini"
                        data-remodal-target="modal"
                      >
                        Book now
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pagination">
                  <ul>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- //row --> */}
          </div>
          {/* <!-- //Container --> */}
        </section>
      </main>
      {/* <!-- // Content  --> */}
      <Footer />
    </>
  );
};
