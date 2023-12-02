import './ErrorPage.scss'
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';
import {NavButton} from '../../components/Buttons/Buttons';
function ErrorPage () {
    return (
        <main className="wrapper">
            <section className="error__section">
                <div className="container">
                    <div className="error__section-content">
                        <div className="error__section-number"></div>
                        <Title addClasses="error__section-title" size={1}>Page not found</Title>
                        <Paragraph addClasses="error__section-desc">The page you are looking for does not exist or has been moved.</Paragraph>
                        <NavButton to="/" className="button green error__section-btn" text="Go to HomePage"></NavButton>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ErrorPage;