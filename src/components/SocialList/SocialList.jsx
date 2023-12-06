import './SocialList.scss';
import Social from "../Social/Social";
import {imagePaths, outerUrls} from "../../common/url";
function SocialList () {
    const socialMedias= [
        {name: "Instagram", src: imagePaths.Instagram, url: outerUrls.Instagram},
        {name: "Facebook", src: imagePaths.Facebook, url: outerUrls.Facebook},
        {name: "Twitter", src: imagePaths.Twitter, url: outerUrls.Twitter},
        {name: "Pinterest", src: imagePaths.Pinterest, url: outerUrls.Pinterest}
    ]
    return (
        <ul className="socials__list">
            {socialMedias.map(socialMedia => (
                <Social key={socialMedia.name} name={socialMedia.name} src={socialMedia.src} url={socialMedia.url}></Social>
            ))}
        </ul>
    )
}

export default SocialList;