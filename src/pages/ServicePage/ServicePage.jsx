import './ServicePage.scss';
import ServicesVideoSection from './ServicesVideoSection/ServicesVideoSection';
import WhatWeGrowSection from './WhatGrowSection/WhatWeGrow';
import StyleGuide from "@/components/StyleGuide/StyleGuide";

function ServicePage () {
    return (
        <main className="wrapper">
            <StyleGuide titleText="Services" backgroundClass="bg-services"/>
            <WhatWeGrowSection/>
            <ServicesVideoSection/>
        </main>
    )
}



export default ServicePage;