
//NOT EDITABLE!!!
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/background.jpg" //Background
import backgroundMobile from "../../assets/img/backgroundM.jpg" //BackgroundMobile
import logo from '../../assets/img/logo.png'; //Logo


function pageLayout( props ) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title1 = "Kota Samarinda"
    const title2 = "Blended Learning"
    const slogan = "Belajar daring di rumah seharusnya tidak menjadi kesempatan untuk kamu bisa bermalas-malasan. Ingat, saat kamu malas, ada banyak orang yang terus berjuang menyusulmu."
    const copyright = "2022 Kota Samarinda Blended Learning - Didukung oleh"

    return (
        <div>
            <Topography />
            <Hero 
                logo={logo}
                background={background}
                backgroundMobile={backgroundMobile}
                deskripsi={deskripsi}
                title1={title1}
                title2={title2}
                slogan={slogan}
                appName={props.appName}
            >
                { props.children }
            </Hero>
            <Footer
                copyright={copyright}
            />
        </div>
    );
}


export default pageLayout;