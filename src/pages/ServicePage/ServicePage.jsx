import './ServicePage.scss';
import WhatWeGrowSection from './WhatGrowSection/WhatWeGrow';
import StyleGuide from "@/components/StyleGuide/StyleGuide";

function ServicePage () {
    return (
        <main className="wrapper">
            <StyleGuide titleText="Services" backgroundClass="bg-services"/>
            <WhatWeGrowSection/>
        </main>
    )
}



export default ServicePage;