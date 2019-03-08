import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import './imgCarousel.css';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100 imgCarousel-img" src="../../../public/img/projects/solar-energy.png" alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Fotovoltaic in Kongo</h3>
              <p>Fotovoltaic pannels have been implemented on top of a post-office providing the community with internet and free light at night.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100 imgCarousel-img" src="../../../public/img/projects/mini-hydro.png" alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Mini-hydro power plant in India</h3>
              <p>A newly builf mini-hydro power plant is rebuilding a indian city's economy providing clean free energy to it's shops and houses, reducing costs and enviromental impact.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100 imgCarousel-img" src="../../../public/img/projects/hydroelectric-wind-turbines.png" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Offshore Wind Farm</h3>
              <p>This offshore wind farm is making way for enough clean electricity for 400,000 German households.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100 imgCarousel-img" src="../../../public/img/projects/biomass-power-plants.png" alt="Mattonit's item" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Biomass Energy Power Plant</h3>
              <p>Generating the same amount of energy as a coal power plant this biomass fueled power plant uses 60% of the amount of fuel and has 50% less emission of greenhouse gases.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;