'use client';
import { useEffect } from 'react';

import Link from "next/link";
import Amenities from './components/Amenities';
import Image from 'next/image';
import HeroSlider from './components/Home/HeroSlider';
export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const getCurrentPath = () => window.location.pathname;
      const setLerp = () => {
        lenis.options.lerp = getCurrentPath() === '/being-here-at-studio' ? 0.1 : undefined;
        console.log('lerp applied:', lenis.options.lerp);
        console.log('Current Path:', getCurrentPath());
      };

      setTimeout(setLerp, 100);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const form = document.getElementById("wf-form-Melodies-of-Life-Contact-Form");
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");
    const sourceInput = document.getElementById("SourceURL");

    if (sourceInput) {
      sourceInput.value = window.location.href;
    }

    if (trigger && popup) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
      });
    }

    const closePopup = () => {
      if (popup) popup.style.display = "none";
      if (thankYou) thankYou.style.display = "none";
    };

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(form.action, {
          method: form.method,
          body: new FormData(form),
        })
          .then((res) => {
            if (res.ok) {
              closePopup();
              document.getElementById("brochure-download-link")?.click();
              if (thankYou) thankYou.style.display = "flex";
            } else {
              alert("There was an issue with your submission. Please try again.");
            }
          })
          .catch((err) => console.error("Submission error:", err));
      });
    }

  }, []);



  return (
    <>


      <main className="main-wrapper">
        <HeroSlider />
        <div id="scroll-more">
          <section className="project-info-section">
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5">Project Size</h6>
                  <p className="mb-0 fs-2 fw-light">63 Acres</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5">Possession</h6>
                  <p className="mb-0 fs-2 fw-light">2027</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5">Starting Price</h6>
                  <p className="mb-0 fs-2 fw-light">Rs 1.53 Cr*</p>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5">Floors</h6>
                  <p className="mb-0 fs-2 fw-light">4B + G + 32/33</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-1" id='about'>
            <div className="content">
              <h2>About Us</h2>
              <p>Nambiar District 25 (D25) is a landmark luxury residential township located at Sarjapur Road, Kommasandra in Bangalore. Spanning over 100 acres, this prestigious development by Nambiar Builders seamlessly blends elegance, nature, and world-class urban living. Strategically positioned near Muthanallur Cross, just 11 km from Outer Ring Road, and in close proximity to major IT hubs such as Electronic City and Whitefield, District 25 offers unmatched connectivity, making it the ideal address for urban professionals and families alike.</p>
            </div>
            <div className="image-wrapper">
              <Image
                width={500}
                height={900}
                src="/images/Club-Entrance-View-min_Binary.webp"
                alt="Luxury interior"
              />
            </div>
          </section>
          <div className="section_home-stats">
            <div className="padding-global">
              <div className="container-large">
                <div className="home-stats_components">
                  <div className="home-stats_content-wrapper">
                    <div className="home-stats_text-wrapper">
                      <div className="text-color-grey">
                        <div className="text-size-medium">
                          Enter and see a sprawling canvas of green within the city
                        </div>
                      </div>
                    </div>
                    <div className="home-stats_items">
                      <div
                        id="w-node-cdea1d55-fe63-8f1c-3822-d0c3250461c3-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 mb-2">796</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular fs-5">Homes</div>
                        </div>
                      </div>
                      <div
                        id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 mb-2">
                            2, 3 & 4 <span className="heading-style-h5"></span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular fs-5">BHKS</div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 mb-2">3500+</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular fs-5">Native Trees</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-5 bg-light" id='price'>
            <div className="container">
              <h2 className='text-center'>Price</h2>
              <div className="row justify-content-center g-4">
                {/* 2 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      2 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 1.53 - 1.70 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">Size – 1242 - 1323 Sq.ft.</p>
                    <hr />
                    <button className="btn btn-dark fw-bold mt-3" data-bs-toggle="modal" data-bs-target="#priceModal">
                      Request For Price Breakup
                    </button>
                  </div>
                </div>

                {/* 2.5 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      2.5 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 1.08 - 1.95 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">Size – 1417 - 1521 Sq.ft.</p>
                    <hr />
                    <button className="btn btn-dark fw-bold mt-3" data-bs-toggle="modal" data-bs-target="#priceModal">
                      Request For Price Breakup
                    </button>
                  </div>
                </div>

                {/* 3 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      3 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 2.05 - 2.55 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">Size – 1620 - 2000 Sq.ft.</p>
                    <hr />
                    <button className="btn btn-dark fw-bold mt-3" data-bs-toggle="modal" data-bs-target="#priceModal">
                      Request For Price Breakup
                    </button>
                  </div>
                </div>

                {/* 3.5 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      3.5 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 2.06 - 2.75 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">Size – 2076 - 2185 Sq.ft.</p>
                    <hr />
                    <button className="btn btn-dark fw-bold mt-3" data-bs-toggle="modal" data-bs-target="#priceModal">
                      Request For Price Breakup
                    </button>
                  </div>
                </div>

                {/* 4 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      4 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 3.15 - 3.30 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">Size – 2489 - 2590 Sq.ft.</p>
                    <hr />
                    <button className="btn btn-dark fw-bold mt-3" data-bs-toggle="modal" data-bs-target="#priceModal">
                      Request For Price Breakup
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* Section 2: 360 Lifestyle Cards */}
          <div className="section_biodiversity-benefits" id='amenities'>
            <div className="container-large">
              <div className="biodiversity-benefits_components">
                <div
                  id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                  className="biodiversity-benefits_header-wrap"
                >
                  <h2 data-animate={1} className="heading-style-h2">
                    Amenities
                  </h2>
                </div>
              </div>
            </div>
            <Amenities />
          </div>
          <div
            data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
            className="section_home-masterplan" id='master-plan'
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="home-masterplan_component">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className="biodiversity-benefits_header-wrap"
                  >
                    <h2 data-animate={1} className="heading-style-h2 text-center">
                      The Master Plan
                    </h2>
                  </div>

                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className="biodiversity-benefits_header-wrap"
                  >
                    <Image
                      width={1600}
                      height={600}
                      src="/images/masterplan.jpg"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img img-fluid"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="section_home-connectivity" id='location'>
            <div className="padding-global">
              <div className="container-large">
                <div className="home-connectivity_components">
                  <div className="home-connectivity_image-wrapper">
                    <Image
                      width={1600}
                      height={600}
                      src="/images/lp.jpg"
                      loading="lazy"
                      alt=""
                      className=""
                      style={{ border: '4px solid #000' }}
                    />
                  </div>
                  <div
                    id="w-node-ae28a13d-3673-7d72-6c93-35ac2b8ff216-ac1b3e9a"
                    className="home-connectivity_content-wrapper"
                  >
                    <div className="home-connectivity_content">
                      <div className="home-connectivity_heading-wrapper">
                        <h2
                          data-animate={1}
                          className="heading-style-h2 text-color-offwhite"
                        > Located{" "}<span className="text-color-accent">Off Sarjapur Road, </span>{" "} Bangalore.
                        </h2>
                      </div>
                      <div className="home-connectivity_text-wrapper">
                        <div className="text-size-regular text-color-offwhite">
                          A spacious urban corridor. Seamless access to IT hubs like Whitefield and Outer Ring Road. With fast-growing infrastructure and excellent connectivity across East and South Bengaluru, Sarjapura Road is emerging as the city’s next vibrant growth destination.
                        </div>
                      </div>
                    </div>
                    <div className="home-connectivity_distance-wrapper">
                      <div
                        id="w-node-_9441ef5f-b995-4318-be5b-df8ccce3289b-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Wipro SEZ </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">10 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_2e82b6e9-e071-cd09-e477-4c91b9a4b018-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">RGA Tech Park</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">12 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">RMZ Ecoworld</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">15 mins</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-connectivity_distance">
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Outer Ring Road</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">15 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Sarjapur Main Road</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">8 mins</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-connectivity_distance">
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">HSR Layout</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">20 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </main>
    </>
  );
}
