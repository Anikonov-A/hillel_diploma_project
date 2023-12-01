import './ServicePage.scss';

import WhatWeGrowSection from './WhatGrowSection/WhatWeGrow';

function ServicePage () {
  return (
    <main className="wrapper">
        <WhatWeGrowSection/>
    </main>
)

import StyleGuide from "../../components/StyleGuide/StyleGuide";

function ServicePage () {
  return(
      <div className="wrapper">
          <StyleGuide titleText="Services" backgroundClass="bg-services" />
      </div>
  )

}

export default ServicePage;